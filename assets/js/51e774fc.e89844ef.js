"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[64138],{79521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(87462),a=(n(67294),n(3905)),s=n(52991),i=n(53438);const r={id:"sources",title:"Sources",description:"Sources",custom_edit_url:null},c=void 0,l={unversionedId:"api/beta/sources",id:"api/beta/sources",title:"Sources",description:"Sources",source:"@site/products/idn/api/beta/sources.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/sources",permalink:"/idn/api/beta/sources",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sources",title:"Sources",description:"Sources",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Predict SOD violations for the given identity if they were granted the given access.",permalink:"/idn/api/beta/predict-sod-violations"},next:{title:"Lists all sources in IdentityNow.",permalink:"/idn/api/beta/list-sources"}},u={},d=[],m={toc:d};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use this API to implement and customize source functionality.\nWith source functionality in place, organizations can use IdentityNow to connect their various sources and user data sets and manage access across all those different sources in a secure, scalable way."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/sources/managing_sources.html"},"Sources")," refer to the IdentityNow representations for external applications, databases, and directory management systems that maintain their own sets of users, like Dropbox, GitHub, and Workday, for example.\nOrganizations may use hundreds, if not thousands, of different source systems, and any one employee within an organization likely has a different user record on each source, often with different permissions on many of those records.\nConnecting these sources to IdentityNow makes it possible to manage user access across them all.\nThen, if a new hire starts at an organization, IdentityNow can grant the new hire access to all the sources they need.\nIf an employee moves to a new department and needs access to new sources but no longer needs access to others, IdentityNow can grant the necessary access and revoke the unnecessary access for all the employee's various sources.\nIf an employee leaves the company, IdentityNow can revoke access to all the employee's various source accounts immediately.\nThese are just a few examples of the many ways that source functionality makes identity governance easier, more efficient, and more secure."),(0,a.kt)("p",null,"In IdentityNow, administrators can create configure, manage, and edit sources, and they can designate other users as source admins to be able to do so.\nThey can also designate users as source sub-admins, who can perform the same source actions but only on sources associated with their governance groups.\nAdmins go to Connections > Sources to see a list of the existing source representations in their organizations.\nThey can create new sources or select existing ones."),(0,a.kt)("p",null,"To create a new source, the following must be specified: Source Name, Description, Source Owner, and Connection Type.\nRefer to ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/accounts/loading_data.html#configuring-a-source"},"Configuring a Source")," for more information about the source configuration process."),(0,a.kt)("p",null,"IdentityNow connects with its sources either by a direct communication with the source server (connection information specific to the source must be provided) or a flat file feed, a CSV file containing all the relevant information about the accounts to be loaded in.\nDifferent sources use different connectors to share data with IdentityNow, and each connector's setup process is specific to that connector.\nSailPoint has built a number of connectors to come out of the box and connect to the most common sources, and SailPoint actively maintains these connectors.\nRefer to ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/connectors/identitynow/landingpages/help/landingpages/identitynow_connectivity_landing.html"},"IdentityNow Connectors")," for more information about these SailPoint supported connectors.\nRefer to the following links for more information about two useful connectors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/connectors/jdbc/help/integrating_jdbc/introduction.html"},"JDBC Connector"),": This customizable connector an directly connect to databases that support JDBC (Java Database Connectivity).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/connectors/webservices/help/integrating_webservices/introduction.html"},"Web Services Connector"),": This connector can directly connect to databases that support Web Services."))),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/docs/saas-connectivity"},"SaaS Connectivity")," for more information about SailPoint's new connectivity framework that makes it easy to build and manage custom connectors to SaaS sources."),(0,a.kt)("p",null,"When admins select existing sources, they can view the following information about the source:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Associated connections (any associated identity profiles, apps, or references to the source in a transform).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Associated user accounts. These accounts are linked to their identities - this provides a more complete picture of each user's access across sources.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Associated entitlements (sets of access rights on sources).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Associated access profiles (groupings of entitlements)."))),(0,a.kt)("p",null,"The user account data and the entitlements update with each data aggregation from the source.\nOrganizations generally run scheduled, automated data aggregations to ensure that their data is always in sync between their sources and their IdentityNow tenants so an access change on a source is detected quickly in IdentityNow.\nAdmins can view a history of these aggregations, and they can also run manual imports.\nRefer to ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/accounts/loading_data.html"},"Loading Account Data")," for more information about manual and scheduled aggregations."),(0,a.kt)("p",null,"Admins can also make changes to determine which user account data IdentityNow collects from the source and how it correlates that account data with identity data.\nTo define which account attributes the source shares with IdentityNow, admins can edit the account schema on the source.\nRefer to ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/accounts/schema.html"},"Managing Source Account Schemas")," for more information about source account schemas and how to edit them.\nTo define the mapping between the source account attributes and their correlating identity attributes, admins can edit the correlation configuration on the source.\nRefer to ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/accounts/correlation.html"},"Assigning Source Accounts to Identities")," for more information about this correlation process between source accounts and identities."),(0,a.kt)("p",null,"Admins can also delete sources, but they must first ensure that the sources no longer have any active connections: the source must not be associated with any identity profile or any app, and it must not be referenced by any transform.\nRefer to ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/sources/managing_sources.html#deleting-sources"},"Deleting Sources")," for more information about deleting sources."),(0,a.kt)("p",null,"Well organized, mapped out connections between sources and IdentityNow are essential to achieving comprehensive identity access governance across all the source systems organizations need.\nRefer to ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/sources/managing_sources.html"},"Managing Sources")," for more information about all the different things admins can do with sources once they are connected."),(0,a.kt)(s.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0},52991:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(67294),a=n(86010),s=n(53438),i=n(39960),r=n(13919),c=n(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return o.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},n)}function h(e){let{href:t,icon:n,title:s,description:i}=e;return o.createElement(m,{href:t},o.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:s},n," ",s),i&&o.createElement("p",{className:(0,a.Z)("text--truncate",d),title:i},i))}function p(e){let{item:t}=e;const n=(0,s.Wl)(t);return n?o.createElement(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,r.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,s.xz)(t.docId??void 0);return o.createElement(h,{href:t.href,icon:n,title:t.label,description:a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(f,{item:t});case"category":return o.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,s.jA)();return o.createElement(w,{items:n.items,className:t})}function w(e){const{items:t,className:n}=e;if(!t)return o.createElement(y,e);const i=(0,s.MN)(t);return o.createElement("section",{className:(0,a.Z)("row",n)},i.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(g,{item:e})))))}}}]);