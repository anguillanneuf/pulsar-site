"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[65099],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>k});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),i=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=i(e.components);return o.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(t),k=n,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||a;return t?o.createElement(m,l(l({ref:r},s),{},{components:t})):o.createElement(m,l({ref:r},s))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var i=2;i<a;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95452:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var o=t(87462),n=(t(67294),t(3905));const a={id:"deploy-docker",title:"Deploy a cluster on Docker",sidebar_label:"Docker",original_id:"deploy-docker"},l=void 0,p={unversionedId:"deploy-docker",id:"version-2.10.x/deploy-docker",title:"Deploy a cluster on Docker",description:"To deploy a Pulsar cluster on Docker, complete the following steps:",source:"@site/versioned_docs/version-2.10.x/deploy-docker.md",sourceDirName:".",slug:"/deploy-docker",permalink:"/docs/2.10.x/deploy-docker",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/deploy-docker.md",tags:[],version:"2.10.x",frontMatter:{id:"deploy-docker",title:"Deploy a cluster on Docker",sidebar_label:"Docker",original_id:"deploy-docker"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"DC/OS",permalink:"/docs/2.10.x/deploy-dcos"},next:{title:"Monitor",permalink:"/docs/2.10.x/deploy-monitoring"}},c={},i=[{value:"Prepare",id:"prepare",level:2},{value:"Pull a Pulsar image",id:"pull-a-pulsar-image",level:3},{value:"Create three containers",id:"create-three-containers",level:3},{value:"Create a network",id:"create-a-network",level:3},{value:"Connect containers to network",id:"connect-containers-to-network",level:3}],s={toc:i};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To deploy a Pulsar cluster on Docker, complete the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Deploy a ZooKeeper cluster (optional)"),(0,n.kt)("li",{parentName:"ol"},"Initialize cluster metadata"),(0,n.kt)("li",{parentName:"ol"},"Deploy a BookKeeper cluster"),(0,n.kt)("li",{parentName:"ol"},"Deploy one or more Pulsar brokers")),(0,n.kt)("h2",{id:"prepare"},"Prepare"),(0,n.kt)("p",null,"To run Pulsar on Docker, you need to create a container for each Pulsar component: ZooKeeper, BookKeeper and broker. You can pull the images of ZooKeeper and BookKeeper separately on ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),", and pull a ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apachepulsar/pulsar-all/tags"},"Pulsar image")," for the broker. You can also pull only one ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apachepulsar/pulsar-all/tags"},"Pulsar image")," and create three containers with this image. This tutorial takes the second option as an example."),(0,n.kt)("h3",{id:"pull-a-pulsar-image"},"Pull a Pulsar image"),(0,n.kt)("p",null,"You can pull a Pulsar image from ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apachepulsar/pulsar-all/tags"},"Docker Hub")," with the following command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\ndocker pull apachepulsar/pulsar-all:latest\n\n")),(0,n.kt)("h3",{id:"create-three-containers"},"Create three containers"),(0,n.kt)("p",null,"Create containers for ZooKeeper, BookKeeper and broker. In this example, they are named as ",(0,n.kt)("inlineCode",{parentName:"p"},"zookeeper"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"bookkeeper")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"broker")," respectively. You can name them as you want with the ",(0,n.kt)("inlineCode",{parentName:"p"},"--name")," flag. By default, the container names are created randomly."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\ndocker run -it --name bookkeeper apachepulsar/pulsar-all:latest /bin/bash\ndocker run -it --name zookeeper apachepulsar/pulsar-all:latest /bin/bash\ndocker run -it --name broker apachepulsar/pulsar-all:latest /bin/bash\n\n")),(0,n.kt)("h3",{id:"create-a-network"},"Create a network"),(0,n.kt)("p",null,"To deploy a Pulsar cluster on Docker, you need to create a ",(0,n.kt)("inlineCode",{parentName:"p"},"network")," and connect the containers of ZooKeeper, BookKeeper and broker to this network. The following command creates the network ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\ndocker network create pulsar\n\n")),(0,n.kt)("h3",{id:"connect-containers-to-network"},"Connect containers to network"),(0,n.kt)("p",null,"Connect the containers of ZooKeeper, BookKeeper and broker to the ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar")," network with the following commands. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\ndocker network connect pulsar zookeeper\ndocker network connect pulsar bookkeeper\ndocker network connect pulsar broker\n\n")),(0,n.kt)("p",null,"To check whether the containers are successfully connected to the network, enter the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker network inspect pulsar")," command."),(0,n.kt)("p",null,"For detailed information about how to deploy ZooKeeper cluster, BookKeeper cluster, brokers, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.10.x/deploy-bare-metal"},"deploy a cluster on bare metal"),"."))}u.isMDXComponent=!0}}]);