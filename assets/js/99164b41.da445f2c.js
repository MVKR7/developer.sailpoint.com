"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[24843],{87444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const s={id:"connector-timeouts",title:"Connector Timeouts",pagination_label:"Connector Timeouts",sidebar_label:"Connector Timeouts",sidebar_position:1.2,sidebar_class_name:"connectorTimeouts",keywords:["connectivity","connectors","timeout"],description:"IdentityNow will throw an error if your connector does not send a response in 3 minutes. For connector commands that might take longer than 3 minutes, make sure to send data at regular intervals to prevent a timeout.",slug:"/docs/saas-connectivity/in-depth/connector-timeouts",tags:["Connectivity"]},r=void 0,a={unversionedId:"docs/identity-now/saas-connectivity/in-depth/connector-timeouts",id:"docs/identity-now/saas-connectivity/in-depth/connector-timeouts",title:"Connector Timeouts",description:"IdentityNow will throw an error if your connector does not send a response in 3 minutes. For connector commands that might take longer than 3 minutes, make sure to send data at regular intervals to prevent a timeout.",source:"@site/products/idn/docs/identity-now/saas-connectivity/in-depth/connector-timeouts.md",sourceDirName:"docs/identity-now/saas-connectivity/in-depth",slug:"/docs/saas-connectivity/in-depth/connector-timeouts",permalink:"/idn/docs/saas-connectivity/in-depth/connector-timeouts",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/in-depth/connector-timeouts.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1696482400,formattedLastUpdatedAt:"Oct 5, 2023",sidebarPosition:1.2,frontMatter:{id:"connector-timeouts",title:"Connector Timeouts",pagination_label:"Connector Timeouts",sidebar_label:"Connector Timeouts",sidebar_position:1.2,sidebar_class_name:"connectorTimeouts",keywords:["connectivity","connectors","timeout"],description:"IdentityNow will throw an error if your connector does not send a response in 3 minutes. For connector commands that might take longer than 3 minutes, make sure to send data at regular intervals to prevent a timeout.",slug:"/docs/saas-connectivity/in-depth/connector-timeouts",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"API Calls",permalink:"/idn/docs/saas-connectivity/in-depth/api-calls"},next:{title:"Debugging",permalink:"/idn/docs/saas-connectivity/in-depth/debugging"}},c={},d=[],l={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An IdentityNow SaaS Connectivity connector will send a timeout error if it doesn't send a response within 3 minutes. If the connector is sending thousands of records, the record fetching process will likely exceed this timeout limit. If you are storing all those records in memory before sending them to IDN, you can run into memory utilization issues. To prevent these issues, you should paginate through your source data and send the data back in regular intervals."),(0,i.kt)("p",null,"In the case of a long running API call to the source system, you can also optionally send ",(0,i.kt)("inlineCode",{parentName:"p"},"res.keepAlive()")," to keep the connection to IdentityNow open without having to send any data to IdentityNow. If ",(0,i.kt)("inlineCode",{parentName:"p"},"res.keepAlive()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"res.send()")," is not called within 3 minutes, a connector timeout will occur."),(0,i.kt)("p",null,"This is an example of how to set up this pagination: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"async getAccounts(res: Response<StdAccountListOutput>): Promise<boolean> {\n    return this.airtableBase('Users').select(\n        // in this case, each page will only be ten records, but this could be increased depending on your needs and the limits of the source connector\n        {pageSize: 10}\n    // each page will be called recursively until there are no more records to fetch, at which case the promise is fulfilled\n    ).eachPage((records, fetchNextPage) => {\n        for (let record of records) {\n            // this is the part that sends the data to IdentityNow. Since eachPage is called with just 10 records, \n            // if there are 100 records total, we would send data back to IDN in 10 sets of 10 records.\n            res.send({\n                identity: record.id,\n                attributes: {\n                    id: <string>record.get('id'),\n                    email: <string>record.get('email'),\n                    fullname: <string>record.get('fullname'),\n                    entitlements: <string[]>(record.get('entitlements') ? record.get('entitlements') : [])\n                }\n            })\n        }\n        fetchNextPage()\n\n    }).then(()=>{\n        return true\n    }).catch((err) => {\n        throw new ConnectorError('error while fetching accounts')\n    })\n}\n\n")))}u.isMDXComponent=!0}}]);