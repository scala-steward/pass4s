"use strict";(self.webpackChunkpass4s=self.webpackChunkpass4s||[]).push([[922],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,r[1]=c;for(var i=2;i<s;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var a=n(7462),o=(n(7294),n(3905));const s={sidebar_position:1,description:"Pass4s documentation page"},r="Getting started",c={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"Pass4s documentation page",source:"@site/../mdoc/target/mdoc/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/pass4s/docs/getting-started",draft:!1,editUrl:"https://github.com/ocadotechnology/pass4s/edit/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Pass4s documentation page"},sidebar:"sidebar",next:{title:"Sender",permalink:"/pass4s/docs/core-concepts/Sender"}},l={},i=[{value:"About",id:"about",level:2},{value:"Basis installation",id:"basis-installation",level:2},{value:"Modules",id:"modules",level:2},{value:"Connectors",id:"connectors",level:3},{value:"Useful utils",id:"useful-utils",level:3}],p={toc:i},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("h2",{id:"about"},"About"),(0,o.kt)("p",null,"Pass4s is a Scala library providing an abstract layer for app messaging. It provides implementations for platforms like AWS SQS/SNS and ActiveMQ."),(0,o.kt)("h2",{id:"basis-installation"},"Basis installation"),(0,o.kt)("p",null,"The library is divided into multiple modules. If you're only interested in the basic abstractions, add following to your ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'// Algebraic abstractions (Sender/Consumer)\n"com.ocadotechnology" %% "pass4s-kernel" % "v0.2.0"\n\n// Message, Destination, CommittableMessage, Connector\n"com.ocadotechnology" %% "pass4s-core" % "v0.2.0"\n\n// Broker\n"com.ocadotechnology" %% "pass4s-high" % "v0.2.0"\n')),(0,o.kt)("h2",{id:"modules"},"Modules"),(0,o.kt)("h3",{id:"connectors"},"Connectors"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://activemq.apache.org/"},"ActiveMq")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'// ActiveMQ connector - based on Akka Alpakka\n"com.ocadotechnology" %% "pass4s-connector-activemq" % "v0.2.0"\n// ActiveMQ pekko connector - based on Pekko Connectors\n"com.ocadotechnology" %% "pass4s-connector-pekko-activemq" % "v0.2.0"\n')),(0,o.kt)("p",null,"\u26a0\ufe0f ",(0,o.kt)("strong",{parentName:"p"},"Warning")," Pekko connector is an experimental addition at the moment, as it is based on nightly build"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/aws/queues-and-notifications-now-best-friends/"},"SNS/SQS")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'// SNS connector\n"com.ocadotechnology" %% "pass4s-connector-sns" % "v0.2.0"\n// SQS connector\n"com.ocadotechnology" %% "pass4s-connector-sqs" % "v0.2.0"\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/kinesis/"},"Kinesis")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'// Kinesis connector\n"com.ocadotechnology" %% "pass4s-connector-kinesis" % "v0.2.0"\n')),(0,o.kt)("h3",{id:"useful-utils"},"Useful utils"),(0,o.kt)("p",null,"Extras - provides ",(0,o.kt)("a",{parentName:"p",href:"modules/message-processor"},(0,o.kt)("inlineCode",{parentName:"a"},"MessageProcessor"))," for convenient way of building rich message consumers and an easy way to bind them to processor logic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'// high-level MessageProcessor\n"com.ocadotechnology" %% "pass4s-extra" % "v0.2.0"\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"modules/s3proxy"},"S3proxy")," - seamless support for proxying large messages through s3. Useful for sorting the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sns/latest/dg/large-message-payloads.html"},"large messages on sns")," kind of problems."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'// s3proxy\n"com.ocadotechnology" %% "pass4s-s3proxy" % "v0.2.0"\n\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://circe.github.io/circe/"},"Circe")," - JSON serialization/parsing support"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'// circe JSON senders/consumers\n"com.ocadotechnology" %% "pass4s-circe" % "v0.2.0"\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Tinkoff/phobos"},"Phobos")," - XML serialization/parsing support"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'// phobos XML senders/consumers\n"com.ocadotechnology" %% "pass4s-phobos" % "v0.2.0"\n')),(0,o.kt)("p",null,"Logging middleware that uses ",(0,o.kt)("a",{parentName:"p",href:"https://typelevel.org/log4cats/"},"log4cats")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'// logging middleware\n"com.ocadotechnology" %% "pass4s-logging" % "v0.2.0"\n')))}u.isMDXComponent=!0}}]);