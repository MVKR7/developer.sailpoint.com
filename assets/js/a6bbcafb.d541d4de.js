"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[53904],{64124:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=a(87462),r=(a(67294),a(3905));const n={id:"cli-search",title:"Search",pagination_label:"CLI-Search",sidebar_label:"Search",sidebar_position:3,sidebar_class_name:"cli",keywords:["cli","search"],description:"Learn how to use the CLI to search your IDN tenant in this guide.",slug:"/tools/cli/search",tags:["CLI"]},l=void 0,s={unversionedId:"tools/cli/cli-search",id:"tools/cli/cli-search",title:"Search",description:"Learn how to use the CLI to search your IDN tenant in this guide.",source:"@site/products/idn/tools/cli/search.md",sourceDirName:"tools/cli",slug:"/tools/cli/search",permalink:"/idn/tools/cli/search",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/tools/cli/search.md",tags:[{label:"CLI",permalink:"/idn/tags/cli"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1696482400,formattedLastUpdatedAt:"Oct 5, 2023",sidebarPosition:3,frontMatter:{id:"cli-search",title:"Search",pagination_label:"CLI-Search",sidebar_label:"Search",sidebar_position:3,sidebar_class_name:"cli",keywords:["cli","search"],description:"Learn how to use the CLI to search your IDN tenant in this guide.",slug:"/tools/cli/search",tags:["CLI"]},sidebar:"sdkSidebar",previous:{title:"CLI Connectors",permalink:"/idn/tools/cli/connectors"},next:{title:"CLI-Set",permalink:"/idn/tools/cli/set"}},o={},c=[{value:"Search",id:"search",level:2},{value:"Commands",id:"commands",level:2},{value:"Query",id:"query",level:3},{value:"Flags",id:"flags",level:4},{value:"Template",id:"template",level:3},{value:"Flags",id:"flags-1",level:4}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"search"},"Search"),(0,r.kt)("p",null,"Learn how to use the CLI to search your IDN tenant in this guide."),(0,r.kt)("p",null,"In IdentityNow (IDN), you can search across all the sources connected to your tenant and return virtually any information you have access to. The ",(0,r.kt)("inlineCode",{parentName:"p"},"search")," command allows you to access IDN search functionality within the CLI. For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"search")," command, refer to the CLI ",(0,r.kt)("a",{parentName:"p",href:"/idn/tools/cli/search"},"Search guide"),". For more information about search in IDN, refer to ",(0,r.kt)("a",{parentName:"p",href:"idn/api/v3/search"},"Search"),"."),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("p",null,"To use the CLI to search your IDN tenant, you can use these commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#search"},"Search")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#commands"},"Commands"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#query"},"Query"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#flags"},"Flags")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#template"},"Template"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#flags-1"},"Flags"))))))),(0,r.kt)("h3",{id:"query"},"Query"),(0,r.kt)("p",null,"Search queries in IDN are flexible - they can be very broad or very narrow, and you can further narrow your results by using IDN's specific syntax to structure your queries. Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/search/building-query.html"},"Building a Search Query")," for more information about how specific search queries are constructed in IDN."),(0,r.kt)("p",null,"To create a search query, run this command and provide your desired search attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail search query {search query string} --indices {index to search}\n")),(0,r.kt)("p",null,'For example, running this command would return all identities starting with the letter "a":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'sail search query "name:a*" --indices identities\n')),(0,r.kt)("h4",{id:"flags"},"Flags"),(0,r.kt)("p",null,"You can add these flags to the ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"indices"),': Use this flag to specify the indices you want to search. The following indices are searchable: identities, roles, access profiles, entitlements, events, and account activities. The earlier example shows how to specify a single index in a search query. You can also search multiple indices. For example, running this command would return all identities and access profiles starting with the letter "a": ',(0,r.kt)("inlineCode",{parentName:"li"},'shell sail search query "name:a*" --indices identities --indices accessprofiles ')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sort"),': Use this flag to specify the sort strings your search query uses. You can also specify multiple sorting criteria. For example, running this command would sort search results by starting with the letter "a" first by the ',(0,r.kt)("inlineCode",{parentName:"li"},"name")," attribute in ascending order and then the ",(0,r.kt)("inlineCode",{parentName:"li"},"created")," attribute in descending order, as indicated by the ",(0,r.kt)("inlineCode",{parentName:"li"},"-")," prefix:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'sail search query "name:a*" --indices identities --sort name --sort "-created"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"outputTypes"),": Use this flag to specify the output data type. This example shows how running this command would return search results in a ",(0,r.kt)("inlineCode",{parentName:"li"},"json")," output. Currently only ",(0,r.kt)("inlineCode",{parentName:"li"},"csv")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"json")," are supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"folderPath"),": Use this flag to specify the folder path you want to save the search results in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory.")),(0,r.kt)("h3",{id:"template"},"Template"),(0,r.kt)("p",null,"For more detailed search queries, you can provide a predefined template instead of constructing the whole query every time. This allows you to run very detailed search queries quickly and easily. To search with a predefined template, run this command and provide your template filename:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail search template {template name}\n")),(0,r.kt)("p",null,'For example, if you had a template, "all-provisioning-events-90-days," which provided everything you needed to search for all provisioning events performed within your tenant in the last 90 days, you could run this command to search with the template:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail search template all-provisioning-events-90-days\n")),(0,r.kt)("h4",{id:"flags-1"},"Flags"),(0,r.kt)("p",null,"You can add these flags to your ",(0,r.kt)("inlineCode",{parentName:"p"},"template")," command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"outputTypes"),": Use this flag to specify the output data type. In this example, running this command would return search results in a ",(0,r.kt)("inlineCode",{parentName:"li"},"json")," output:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail search template all-provisioning-events-90-days --outputTypes json\n")),"Currently only ",(0,r.kt)("inlineCode",{parentName:"li"},"csv")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"json")," are supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"folderPath"),': Use this flag to specify the folder path you want to save the search results in. For example, running this command would save search results to "./local/folder/path":',(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail search template all-provisioning-events-90-days --folderPath ./local/folder/path\n")),"If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory.")))}u.isMDXComponent=!0}}]);