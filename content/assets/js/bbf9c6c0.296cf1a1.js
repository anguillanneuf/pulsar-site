"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[31237],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58969:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={id:"release-note-guide",title:"Release Note Guide"},o=void 0,s={unversionedId:"release-note-guide",id:"release-note-guide",title:"Release Note Guide",description:"This guide explains everything about Pulsar release notes.",source:"@site/contribute/release-note-guide.md",sourceDirName:".",slug:"/release-note-guide",permalink:"/contribute/release-note-guide",draft:!1,editUrl:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/contribute/release-note-guide.md",tags:[],version:"current",lastUpdatedBy:"Pulsar Site Updater",lastUpdatedAt:1668988920,formattedLastUpdatedAt:"Nov 21, 2022",frontMatter:{id:"release-note-guide",title:"Release Note Guide"},sidebar:"sidebarDevelopment",previous:{title:"Release Process",permalink:"/contribute/release-process"},next:{title:"Committers",permalink:"/contribute/category/committers"}},i={},p=[{value:"Intro to release notes",id:"intro-to-release-notes",level:2},{value:"Basic info",id:"basic-info",level:3},{value:"Maintenance info",id:"maintenance-info",level:3},{value:"Submit release notes",id:"submit-release-notes",level:2}],u={toc:p};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains everything about Pulsar release notes."),(0,r.kt)("h2",{id:"intro-to-release-notes"},"Intro to release notes"),(0,r.kt)("p",null,"This chapter gives an overview of Pulsar release notes."),(0,r.kt)("h3",{id:"basic-info"},"Basic info"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/release-notes/"},"Pulsar release notes")," consist of the following parts."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Release note"),(0,r.kt)("th",{parentName:"tr",align:null},"Component"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/release-notes/#pulsar-release-notes"},"Pulsar Core")),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/client-libraries.md"},"Pulsar Clients")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"Java"),(0,r.kt)("li",null,"WebSocket"),(0,r.kt)("li",null,"C++"),(0,r.kt)("li",null,"Python"),(0,r.kt)("li",null,"Go"),(0,r.kt)("li",null,"NodeJs"),(0,r.kt)("li",null,"C#")))))),(0,r.kt)("h3",{id:"maintenance-info"},"Maintenance info"),(0,r.kt)("p",null,"To generate release note page, you're suggested to install the ",(0,r.kt)("a",{parentName:"p",href:"https://cli.github.com/"},"GitHub CLI")," and authenticate first."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fetch the release metadata:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Replace v2.10.2 with the target version tag\ngh release view "v2.10.2" -R apache/pulsar --json author,tagName,publishedAt\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Fetch the release notes:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Replace v2.10.2 with the target version tag\ngh release view "v2.10.2" -R apache/pulsar --json body --jq .body\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Select the related release notes entries and add a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/release-notes/versioned"},"versioned release note"),"."),(0,r.kt)("li",{parentName:"ol"},"Update the metadata file ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/data"},"site2/website-next/data/release-*.js"),".")),(0,r.kt)("p",null,"The process is similar to update standalone client releases."),(0,r.kt)("p",null,"To preview the result, follow the instructions documented at the ",(0,r.kt)("a",{parentName:"p",href:"/contribute/document-preview#preview-website-changes"},"Content Preview Guide"),"."),(0,r.kt)("h2",{id:"submit-release-notes"},"Submit release notes"),(0,r.kt)("p",null,"Follow the steps below to submit release notes for Pulsar and clients (",(0,r.kt)("strong",{parentName:"p"},"Java and WebSocket"),")."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For C++, Python, Go, Node.js, and C# clients, you do not need to take care of them since their release notes are synced from their repos to the ",(0,r.kt)("a",{parentName:"p",href:"/release-notes/"},"Pulsar Release Note page"),".")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit a PR to add separate release notes for Pulsar and clients (Java and WebSocket) to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/release-notes/versioned"},"versioned release-notes folder"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get this PR reviewed and merged.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the release note to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases"},"Pulsar Releases Page on GitHub"),"."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar Core"),(0,r.kt)("td",{parentName:"tr",align:null},"Copy the release note content.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar Clients (Java, WebSocket, ...)"),(0,r.kt)("td",{parentName:"tr",align:null},"Create independent sections for each client and copy release note content.")))),(0,r.kt)("p",{parentName:"li"},"Examples for Java clent's release note:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Java client release note example",src:a(93323).Z,width:"1992",height:"832"})),(0,r.kt)("p",{parentName:"li"},"After the new release is published, all the information about the release is automatically added to the ",(0,r.kt)("a",{parentName:"p",href:"/release-notes/"},"Pulsar Release Note page"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check whether the release information is shown on the ",(0,r.kt)("a",{parentName:"p",href:"/release-notes/"},"Pulsar Release Note page")," after the website is updated and built successfully."))))}c.isMDXComponent=!0},93323:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/release-note-guide-example-ede0cc2d5706f7a29a00f5fec635bbe2.png"}}]);