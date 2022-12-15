"use strict";(self.webpackChunkskyhitz=self.webpackChunkskyhitz||[]).push([[315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},l=void 0,o={unversionedId:"skyhitz-expo-next/overview",id:"skyhitz-expo-next/overview",title:"overview",description:"Github//github.com/skyhitz/skyhitz-expo-next",source:"@site/docs/skyhitz-expo-next/overview.md",sourceDirName:"skyhitz-expo-next",slug:"/skyhitz-expo-next/overview",permalink:"/docs/skyhitz-expo-next/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"flow",permalink:"/docs/nft-big-query/flow"},next:{title:"graphql",permalink:"/docs/skyhitz-expo-next/graphql"}},p={},s=[{value:"Project structure",id:"project-structure",level:2},{value:"\ud83c\udfc1 Start the app",id:"-start-the-app",level:2},{value:"\ud83c\udd95 Add new dependencies",id:"-add-new-dependencies",level:2},{value:"Pure JS dependencies",id:"pure-js-dependencies",level:3},{value:"Native dependencies",id:"native-dependencies",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Github: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/skyhitz/skyhitz-expo-next"},"https://github.com/skyhitz/skyhitz-expo-next")),(0,i.kt)("p",null,"This repository contains frontend code of the Skyhitz app. It's a monorepo that uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nandorojo/solito"},"Solito")," to reuse code between Web and Mobile."),(0,i.kt)("h2",{id:"project-structure"},"Project structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"apps")," entry points for each app"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expo")," here you can import all expo specific packages, or configure expo app (",(0,i.kt)("inlineCode",{parentName:"li"},"app.json")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"eas.json"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"next")," here you can import all next expecific packages and configure next app",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pages")," under this directory you have to maintain navigation hierarchy according to next guidelines"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"public")," here you can put files that should be static served"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"packages")," shared packages across apps"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"app")," you'll be importing most files from ",(0,i.kt)("inlineCode",{parentName:"li"},"app/"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"api")," directory for all graphql related code. Here you will add new queries or mutations (see ",(0,i.kt)("a",{parentName:"li",href:"/docs/skyhitz-expo-next/graphql"},"more"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"assets")," directory for assets like fonts or images"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config")," directory where we keep config depending on the current environment"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"constants")," directory for constants"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"design-system")," directory for all things related to design-system. it should be merged in the future with ",(0,i.kt)("inlineCode",{parentName:"li"},"ui")," directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"features")," components organized by feature"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hooks")," directory where we keep all our custom hooks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"navigation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mobile")," Next.js has a ",(0,i.kt)("inlineCode",{parentName:"li"},"pages/")," folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web")," We use it as a wrapper to for the dashboard navbar"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"provider")," (all the providers that wrap the app, and some no-ops for Web.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state")," all recoil related code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stellar")," stellar related code (i.ex. creating transactions). Could be moved to utils"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"types")," directory where we keep global types (i.ex. user)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ui")," directory where we keep components that are reused by many features i.ex. buttons, inputs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"utils")," self-explanatory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validation")," code for form validation. Could be moved to utils")))))),(0,i.kt)("h2",{id:"-start-the-app"},"\ud83c\udfc1 Start the app"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install dependencies: ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Next.js local dev: ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn web")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Runs ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn next")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Expo local dev: ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn native")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Runs ",(0,i.kt)("inlineCode",{parentName:"li"},"expo start"))))),(0,i.kt)("h2",{id:"-add-new-dependencies"},"\ud83c\udd95 Add new dependencies"),(0,i.kt)("h3",{id:"pure-js-dependencies"},"Pure JS dependencies"),(0,i.kt)("p",null,"If you're installing a JavaScript-only dependency that will be used across platforms, install it in ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/app"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd packages/app\nyarn add date-fns\ncd ../..\nyarn\n")),(0,i.kt)("h3",{id:"native-dependencies"},"Native dependencies"),(0,i.kt)("p",null,"If you're installing a library with any native code, you must install it in ",(0,i.kt)("inlineCode",{parentName:"p"},"apps/expo"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd apps/expo\nyarn add react-native-reanimated\n\ncd ../..\nyarn\n")),(0,i.kt)("p",null,"You can also install the native library inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/app")," if you want to get autoimport for that package inside of the ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," folder. However, you need to be careful and install the ",(0,i.kt)("em",{parentName:"p"},"exact")," same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna-update-wizard")," to help with this (you don't need to use Lerna to use that lib)."))}u.isMDXComponent=!0}}]);