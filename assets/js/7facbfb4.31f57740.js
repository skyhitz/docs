"use strict";(self.webpackChunkskyhitz=self.webpackChunkskyhitz||[]).push([[605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=r,k=c["".concat(u,".").concat(h)]||c[h]||d[h]||o;return n?i.createElement(k,a(a({ref:t},p),{},{components:n})):i.createElement(k,a({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},a=void 0,l={unversionedId:"audible-skyhitz/overview",id:"audible-skyhitz/overview",title:"overview",description:"Github//github.com/skyhitz/audible-magic",source:"@site/docs/audible-skyhitz/overview.md",sourceDirName:"audible-skyhitz",slug:"/audible-skyhitz/overview",permalink:"/docs/audible-skyhitz/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"About",permalink:"/docs/"},next:{title:"overview",permalink:"/docs/backend/overview"}},u={},s=[{value:"Project structure",id:"project-structure",level:2},{value:"How to run",id:"how-to-run",level:3},{value:"How to test",id:"how-to-test",level:3},{value:"Flow",id:"flow",level:3},{value:"Test deployed version",id:"test-deployed-version",level:3},{value:"What needs to be done?",id:"what-needs-to-be-done",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Github: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/skyhitz/audible-magic"},"https://github.com/skyhitz/audible-magic")),(0,r.kt)("p",null,"A repository that contains PoC for audible service. It's the express REST server with one endpoint\n",(0,r.kt)("inlineCode",{parentName:"p"},"/identify")," which allows running the audible check for uploaded media files."),(0,r.kt)("h2",{id:"project-structure"},"Project structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src")," directory that contains all source code",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config")," contains config with environment variables"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"controllers")," contains controllers for routes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"execptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interfaces")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"middlewares")," contains an error and auth middleware"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"passwordless")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"routes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"utils"))))),(0,r.kt)("h3",{id:"how-to-run"},"How to run"),(0,r.kt)("p",null,"Install git-lfs: ",(0,r.kt)("a",{parentName:"p",href:"https://git-lfs.github.com/"},"https://git-lfs.github.com/")),(0,r.kt)("p",null,"Make sure you have ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file with the public key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone git@github.com:skyhitz/audible-magic.git\ncd audible-magic\ndocker-compose up\n")),(0,r.kt)("p",null,"Node.js server should be available.\nIMPORTANT: As we are using amd Ubuntu image, the Audible Magic toolkit is not working while running on Mac with an Apple Silicon chip."),(0,r.kt)("h3",{id:"how-to-test"},"How to test"),(0,r.kt)("p",null,"You can use swagger-ui interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"localhost/api-docs\n")),(0,r.kt)("h3",{id:"flow"},"Flow"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"/identify")," route requires an access token which can be obtained using skyhitz API. The token is valid only for 2 minutes, so the request\nto audible service should be made right after obtaining the token. You have to send ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request with the form content type and the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - unique id of the beat"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beat")," - media file to check")),(0,r.kt)("p",null,"In the response, you will receive information on whether the beat is original."),(0,r.kt)("h3",{id:"test-deployed-version"},"Test deployed version"),(0,r.kt)("p",null,"The service is currently deployed in the digital ocean. You can test it using the following instructions."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Request for an access token: (you should replace the token from the authorization header with your own token but for testing, it doesn't matter)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl --request POST \\\n  --url https://api.skyhitz.io/api/graphql \\\n  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1OQ3Q1YlhFOW1YTWxFaVZvd3NFIiwiZW1haWwiOiJqYWt1Yi5teXNsaXdpZWNAc3dtYW5zaW9uLmNvbSIsInZlcnNpb24iOjEsImlhdCI6MTY2NzM4MjAxNH0.nMSIWOswdJwv26aFCtqk7HvUG355LU7iglAlhDBqt5I' \\\n  --header 'Content-Type: application/json' \\\n  --data '{\n    \"query\": \"query token {\\n getAudibleToken {\\n token\\n}\\n}\"\n}\n'\n")),(0,r.kt)("p",null,"In the response, you should receive a jwt access token to audible service."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Request audible service. Replace:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"<YOUR_TOKEN> with the token received from the previous request."),(0,r.kt)("li",{parentName:"ul"},"<BEAT_UNIQUE_ID> with the beat unique id"),(0,r.kt)("li",{parentName:"ul"},"<BEAT_PATH> with the path to your beat file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"  curl --request POST \\\n   --url http://142.93.241.220/identify \\\n   --header 'Authorization: Bearer <YOUR_TOKEN>' \\\n   --header 'Content-Type: multipart/form-data' \\\n   --form id=<BEAT_UNIQUE_ID> \\\n   --form beat=<BEAT_PATH>\n")),(0,r.kt)("p",null,"It takes a few seconds for the service to respond."),(0,r.kt)("h3",{id:"what-needs-to-be-done"},"What needs to be done?"),(0,r.kt)("p",null,"To move service to production, the following steps are required:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"set up a droplet with more resources"),(0,r.kt)("li",{parentName:"ul"},"introduce logs collection"),(0,r.kt)("li",{parentName:"ul"},"introduce auto recovery after faults"),(0,r.kt)("li",{parentName:"ul"},"add CI/CD that will automate deployment directly from GitHub.")))}c.isMDXComponent=!0}}]);