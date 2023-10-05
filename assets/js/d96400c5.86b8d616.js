"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[68041],{72506:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var r=i(87462),s=(i(67294),i(3905));const n={id:"subscribing-to-trigger",title:"Subscribing to a Trigger",pagination_label:"Subscribing to a Trigger",sidebar_label:"Subscribing to a Trigger",sidebar_position:3,sidebar_class_name:"subscribingToTrigger",keywords:["event","trigger","subscribing"],description:"Usually, you will subscribe to event triggers using the user interface in IDN. Refer to subscribing to event triggers to learn how to subscribe to an event trigger through the IDN UI.",slug:"/docs/event-triggers/subscribing-to-trigger",tags:["Event Triggers"]},o=void 0,a={unversionedId:"docs/identity-now/event-triggers/subscribing-to-trigger",id:"docs/identity-now/event-triggers/subscribing-to-trigger",title:"Subscribing to a Trigger",description:"Usually, you will subscribe to event triggers using the user interface in IDN. Refer to subscribing to event triggers to learn how to subscribe to an event trigger through the IDN UI.",source:"@site/products/idn/docs/identity-now/event-triggers/subscribing-to-a-trigger.md",sourceDirName:"docs/identity-now/event-triggers",slug:"/docs/event-triggers/subscribing-to-trigger",permalink:"/idn/docs/event-triggers/subscribing-to-trigger",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/subscribing-to-a-trigger.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1696482400,formattedLastUpdatedAt:"Oct 5, 2023",sidebarPosition:3,frontMatter:{id:"subscribing-to-trigger",title:"Subscribing to a Trigger",pagination_label:"Subscribing to a Trigger",sidebar_label:"Subscribing to a Trigger",sidebar_position:3,sidebar_class_name:"subscribingToTrigger",keywords:["event","trigger","subscribing"],description:"Usually, you will subscribe to event triggers using the user interface in IDN. Refer to subscribing to event triggers to learn how to subscribe to an event trigger through the IDN UI.",slug:"/docs/event-triggers/subscribing-to-trigger",tags:["Event Triggers"]},sidebar:"idnDocs",previous:{title:"Preparing a Subscriber Service",permalink:"/idn/docs/event-triggers/preparing-subscriber-service"},next:{title:"Filtering Events",permalink:"/idn/docs/event-triggers/filtering-events"}},g={},l=[{value:"View the Available Triggers",id:"view-the-available-triggers",level:2},{value:"Subscribe to a Trigger from the UI",id:"subscribe-to-a-trigger-from-the-ui",level:2},{value:"Subscribe to a Trigger from the API",id:"subscribe-to-a-trigger-from-the-api",level:2}],b={toc:l};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"view-the-available-triggers"},"View the Available Triggers"),(0,s.kt)("p",null,"SailPoint is continuously developing new event triggers to satisfy different use cases. Some of these triggers are considered ",(0,s.kt)("strong",{parentName:"p"},"early access")," and are only available in an IDN tenant upon request. To see a list of available event triggers in your tenant, go to the ",(0,s.kt)("strong",{parentName:"p"},"Event Triggers")," tab in the ",(0,s.kt)("strong",{parentName:"p"},"Admin")," section of IdentityNow. The first page is a list of your tenant's available event triggers. You can select each trigger to learn more about its type, what causes it to fire, and what the payload will look like."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Available triggers",src:i(8649).Z,width:"2560",height:"1328"})),(0,s.kt)("h2",{id:"subscribe-to-a-trigger-from-the-ui"},"Subscribe to a Trigger from the UI"),(0,s.kt)("p",null,"Usually, you will subscribe to event triggers using the user interface in IDN. Refer to ",(0,s.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/common/event_triggers.html#subscribing-to-event-triggers"},"subscribing to event triggers")," to learn how to subscribe to an event trigger through the IDN UI."),(0,s.kt)("h2",{id:"subscribe-to-a-trigger-from-the-api"},"Subscribe to a Trigger from the API"),(0,s.kt)("p",null,"Sometimes, you may need to use the API to subscribe to event triggers. This can occur when you want to programatically subscribe/unsubscribe from event triggers in a custom application or no-code solution that does not have a native integration with SailPoint."),(0,s.kt)("p",null,"If this is your first time calling a SailPoint API, refer to the ",(0,s.kt)("a",{parentName:"p",href:"/idn/api/getting-started"},"getting started guide")," to learn how to generate a token and call the APIs."),(0,s.kt)("p",null,"Start by reviewing the list of ",(0,s.kt)("a",{parentName:"p",href:"/idn/api/beta/triggers#available-event-triggers"},"available event triggers"),", and take note of the ",(0,s.kt)("strong",{parentName:"p"},"ID")," of the trigger you want to subscribe to (ex ",(0,s.kt)("inlineCode",{parentName:"p"},"idn:access-request-dynamic-approver"),"). Use the ",(0,s.kt)("a",{parentName:"p",href:"/idn/api/beta/create-subscription"},"create subscription")," endpoint to subscribe to an event trigger of your choosing. See the API docs for the latest details about how to craft a subscription request."))}c.isMDXComponent=!0},8649:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/available-triggers-efdaede7d73d4ccfc9452cd5e3e3ee80.png"}}]);