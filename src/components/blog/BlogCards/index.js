import React from 'react';
import styles from './styles.module.css';
import BlogCard from '../BlogCard';
import BounceLoader from 'react-spinners/BounceLoader';
import {discourseBaseURL, developerWebsiteDomain} from '../../../util/util';

import {getBlogPosts, getTopic} from '../../../services/DiscourseService';
export default function BlogCards({
  filterCallback
  }) {
  const [cardData, setCardData] = React.useState();
  const [loadingCards, setLoadingCards] = React.useState(true);

  const getPosts = async () => {
    const data = await getBlogPosts(filterCallback.join('+'));
    const resultset = []
    if (data.topics) {
      for (const topic of data.topics) {
        resultset.push(await getPostList(topic))
      }
      setCardData(resultset);
    } else {
      setCardData(undefined);
    }
    setLoadingCards(false);
  };

  React.useEffect(() => {
    getPosts();
    setCardData(undefined);
    setLoadingCards(true);
  }, [filterCallback]);

  if (cardData) {
    return (
      <div className={styles.center}>
        <div className={styles.gridContainer}>
          {cardData.map(function(a, index){
            return <BlogCard 
            key={a.link}
            id={index + a.link}
            excerpt={a.excerpt}
            name={a.name}
            tags={a.tags}
            link={a.link}
            image={a.image}
            title={a.title}
            views={a.views}
            replies={a.replies}
            readTime={a.readTime}
            creatorImage={a.creatorImage}></BlogCard>
          })}
        </div>
      </div>
    );
  } else if (loadingCards) {
    return (
      <BounceLoader
        className={styles.spinnerCenter}
        color={'#0033a1'}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  } else {
    return (
      <div className={styles.noFound}>
        {' '}
        No Blogposts Found with the Given Search Criteria
      </div>
    );
  }
}

async function getPostList(topic) {
  const fullTopic = await getTopic(topic.id);
  return {
    name: fullTopic.details.created_by.name,
    excerpt: styleExcerpt(topic.excerpt),
    creatorImage: getavatarURL(fullTopic.details.created_by.avatar_template),
    tags: topic.tags,
    image: fullTopic.image_url,
    link:
    discourseBaseURL() + 't/' +
      topic.slug +
      '/' +
      topic.id,
    title: topic.title,
    views: fullTopic.views,
    liked: topic.like_count,
    replies: fullTopic.posts_count,
    solution: topic.has_accepted_answer,
    readTime: parseInt(fullTopic.word_count/100),
  };
}

function getavatarURL(avatar) {
  if (avatar.includes(developerWebsiteDomain())) {
    return "https://" + developerWebsiteDomain() + avatar.replace("{size}", "120")
  } else {
    return avatar.replace("{size}", "120")
  }
}

function styleExcerpt(excerpt) {
  if (excerpt.length > 150) {
    return excerpt.slice(0, 150) + "..."
  } else {
    return excerpt.replace("&hellip;", "")
  }
}

