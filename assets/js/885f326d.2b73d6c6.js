"use strict";(self.webpackChunkskyhitz=self.webpackChunkskyhitz||[]).push([[996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,y=u["".concat(l,".").concat(f)]||u[f]||h[f]||o;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},353:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i=void 0,p={unversionedId:"skyhitz-expo-next/graphql",id:"skyhitz-expo-next/graphql",title:"graphql",description:"Graphql",source:"@site/docs/skyhitz-expo-next/graphql.md",sourceDirName:"skyhitz-expo-next",slug:"/skyhitz-expo-next/graphql",permalink:"/docs/skyhitz-expo-next/graphql",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"overview",permalink:"/docs/skyhitz-expo-next/overview"},next:{title:"guidelines",permalink:"/docs/skyhitz-expo-next/guidelines"}},l={},c=[{value:"Graphql",id:"graphql",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"graphql"},"Graphql"),(0,a.kt)("p",null,"To add graphql query/mutation simply create a file in the proper folder:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"packages/app/api/queries/your_query.graphql")," for queries"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"packages/app/api/mutations/your_mutation.graphql")," for mutations")),(0,a.kt)("p",null,"We had a config file for the generator placed here: ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/app/codegen.yaml"),".\nWhat you might want to change there is the schema URL which is set for localhost.\nIt's the most convenient if you are changing schema in the backend repository at the same time.\nIn such a case just run the backend server locally and then run the following script and let codegen generate graphql types for you:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn graphql:gen\n")),(0,a.kt)("p",null,"After that you might want to format this file using prettier:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn prettier -w packages/app\n")))}u.isMDXComponent=!0}}]);