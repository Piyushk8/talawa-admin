"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52014],{12158:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/store-8a3d8d142e699b82286da665bb0dc8b7.PNG"},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>s});var n=t(96540);const a={},l=n.createContext(a);function r(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(l.Provider,{value:i},e.children)}},63185:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/talawa-115af7c974ebc0d4f23e600c5f703d43.PNG"},88961:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"docs/plugins/plugin-architecture","title":"Plugin Architecture","description":"Plugin Architecture provides talawa projects an ability to control latent Talawa Mobile App features from the Talawa Admin Web Portal.","source":"@site/docs/docs/plugins/plugin-architecture.md","sourceDirName":"docs/plugins","slug":"/docs/plugins/plugin-architecture","permalink":"/docs/docs/plugins/plugin-architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-admin/edit/develop/docs/docs/docs/plugins/plugin-architecture.md","tags":[],"version":"current","frontMatter":{"id":"plugin-architecture","title":"Plugin Architecture"},"sidebar":"tutorialSidebar","previous":{"title":"Plugin Implementation","permalink":"/docs/docs/plugins/implementing-plugins"},"next":{"title":"default","permalink":"/docs/auto-docs/App/functions/default"}}');var a=t(74848),l=t(28453);const r={id:"plugin-architecture",title:"Plugin Architecture"},s="Plugin Architecture",o={},c=[{value:"Plugin",id:"plugin",level:2},{value:"High Level Overview of Plugin Architecture",id:"high-level-overview-of-plugin-architecture",level:2},{value:"Talawa Admin",id:"talawa-admin",level:3},{value:"Example",id:"example",level:4},{value:"Talawa API",id:"talawa-api",level:3},{value:"Talawa",id:"talawa",level:3},{value:"Plugin Store",id:"plugin-store",level:2},{value:"Installing and Uninstalling Plugins",id:"installing-and-uninstalling-plugins",level:2}];function d(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"plugin-architecture",children:"Plugin Architecture"})}),"\n",(0,a.jsxs)(i.p,{children:["Plugin Architecture provides talawa projects an ability to control latent ",(0,a.jsx)(i.a,{href:"https://docs.talawa.io/docs/developers/talawa/talawa-introduction",children:"Talawa Mobile App"})," features from the ",(0,a.jsx)(i.a,{href:"https://docs.talawa.io/docs/developers/talawa-admin/talawa-admin-introduction",children:"Talawa Admin"})," Web Portal."]}),"\n",(0,a.jsx)(i.h2,{id:"plugin",children:"Plugin"}),"\n",(0,a.jsx)(i.p,{children:"A Plugin is a feature in Talawa Mobile App that is controlled by the Admins of that organization. By having the control admins can decide the accessibility of that feature for the organization members."}),"\n",(0,a.jsx)(i.p,{children:"Programmatically the logic of this Plugin is stored in the mobile app but it's inaccessible to the users until the admin of the organization installs that plugin."}),"\n",(0,a.jsxs)(i.p,{children:["You first have to be register the Plugins from the ",(0,a.jsx)(i.code,{children:"Plugin store"})," in order to install them from the Talawa Admin."]}),"\n",(0,a.jsx)(i.h2,{id:"high-level-overview-of-plugin-architecture",children:"High Level Overview of Plugin Architecture"}),"\n",(0,a.jsx)(i.p,{children:"Let's discuss the role of the different apps to make the plugin architecture work."}),"\n",(0,a.jsx)(i.h3,{id:"talawa-admin",children:"Talawa Admin"}),"\n",(0,a.jsxs)(i.p,{children:["Admin Provides ",(0,a.jsx)(i.code,{children:"Plugin Store"})," where has the following functionalities:"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Ability to install or uninstall the plugins."}),"\n",(0,a.jsx)(i.li,{children:"Ability to Toggle list of installed and available plugins."}),"\n",(0,a.jsx)(i.li,{children:"Ability to Search the plugin using SearchBar (provided on the right) ."}),"\n"]}),"\n",(0,a.jsx)(i.h4,{id:"example",children:"Example"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Plugin Store Sample Image",src:t(12158).A+"",width:"1358",height:"625"})}),"\n",(0,a.jsx)(i.h3,{id:"talawa-api",children:"Talawa API"}),"\n",(0,a.jsx)(i.p,{children:"It is a nodeJS API that is used to interface with the database containing list of the plugins with their different attributes."}),"\n",(0,a.jsx)(i.p,{children:"A sample Plugin Model can have the below properties."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"Plugin : {\n    pluginName: String, // plugin name\n    pluginCreatedBy: String, // name of the creator\n    pluginDesc : String, // description\n    pluginInstallStatus : Boolean, // TRUE if installed otherwise FALSE\n    installedOrgs : [ID] // a list containing ID of the organization who have installed the plugin\n}\n"})}),"\n",(0,a.jsx)(i.h3,{id:"talawa",children:"Talawa"}),"\n",(0,a.jsxs)(i.p,{children:["Plugin in the mobile App are mainly focused for the features on the navbar.but other functionalities can also be implemented as plugins using the ",(0,a.jsx)(i.code,{children:"TalawaPluginProvider"})," Flutter Widget.",(0,a.jsx)(i.br,{}),"\n",(0,a.jsx)(i.img,{alt:"Talawa Mobile App ",src:t(63185).A+"",width:"418",height:"627"})]}),"\n",(0,a.jsx)(i.h2,{id:"plugin-store",children:"Plugin Store"}),"\n",(0,a.jsx)(i.h2,{id:"installing-and-uninstalling-plugins",children:"Installing and Uninstalling Plugins"}),"\n",(0,a.jsxs)(i.p,{children:["The Following video showcases process of installing the plugin. We are uninstalling ",(0,a.jsx)(i.code,{children:"Events"})," feature from the talawa app."]}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsx)(i.p,{children:"Admin portal and Talawa app must be of same organizations"})}),"\n",(0,a.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/dsbh03N9wYo",title:"Talawa Admin Plugin Demo - 2023",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]})}function u(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);