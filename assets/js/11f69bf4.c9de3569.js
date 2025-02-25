"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19494],{12158:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/store-8a3d8d142e699b82286da665bb0dc8b7.PNG"},17744:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"docs/plugins/implementing-plugins","title":"Plugin Implementation","description":"Plugins are existing features that are wrapped with some special logic or widgets to make them controllable.","source":"@site/docs/docs/plugins/implementing-plugins.md","sourceDirName":"docs/plugins","slug":"/docs/plugins/implementing-plugins","permalink":"/docs/docs/plugins/implementing-plugins","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-admin/edit/develop/docs/docs/docs/plugins/implementing-plugins.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"implementing-plugins","title":"Plugin Implementation","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Plugin Architecture","permalink":"/docs/docs/plugins/plugin-architecture"},"next":{"title":"Plugin Examples","permalink":"/docs/docs/plugins/implementing-plugins-example"}}');var t=i(74848),l=i(28453);const r={id:"implementing-plugins",title:"Plugin Implementation",sidebar_position:2},a=void 0,o={},d=[{value:"Technical Overview of the Steps to Implement features as plugins",id:"technical-overview-of-the-steps-to-implement-features-as-plugins",level:2},{value:"1. Plugin Registration",id:"1-plugin-registration",level:3},{value:"2. Plugin Creation",id:"2-plugin-creation",level:3},{value:"A. Feature that are located in the bottom navigation bar",id:"a-feature-that-are-located-in-the-bottom-navigation-bar",level:4},{value:"B. Other Features",id:"b-other-features",level:4},{value:"Additional properties : [For Development Purpose Only]",id:"additional-properties--for-development-purpose-only",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Plugins are existing features that are wrapped with some special logic or widgets to make them controllable."}),"\n",(0,t.jsx)(n.p,{children:"Plugin are activated from Plugin store of the Admin panel"}),"\n",(0,t.jsx)(n.p,{children:"To implement features as plugins or to convert existing features into plugins, follow the below steps"}),"\n",(0,t.jsx)(n.h2,{id:"technical-overview-of-the-steps-to-implement-features-as-plugins",children:"Technical Overview of the Steps to Implement features as plugins"}),"\n",(0,t.jsx)(n.h3,{id:"1-plugin-registration",children:"1. Plugin Registration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Plugins have to be registered first before even they are created from the Plugin store in the ",(0,t.jsx)(n.code,{children:"Talawa Admin"})," portal. This can be done by developer by creating an account in the admin portal and going to ",(0,t.jsx)(n.code,{children:"Plugin Store"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Plugin Store can be accessed from navbar"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Plugin Store Option in Navbar",src:i(24525).A+"",width:"1366",height:"129"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Once entered in store , you will see a list of available plugins"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Plugin Store Sample Image",src:i(12158).A+"",width:"1358",height:"625"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click on the ",(0,t.jsx)(n.code,{children:"Add New"})," Button"]}),"\n",(0,t.jsxs)(n.li,{children:["Enter the Details of the New Plugin and Click on ",(0,t.jsx)(n.code,{children:"Create"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Name"})," of plugin provided is very important and will be used for later steps.\nMake sure to use unique names with trailing spaces."]})}),"\n",(0,t.jsx)(n.p,{children:"In next step we'll see how to create plugins"}),"\n",(0,t.jsx)(n.h3,{id:"2-plugin-creation",children:"2. Plugin Creation"}),"\n",(0,t.jsx)(n.p,{children:"Based on where the feature UI is there are currently 2 ways to implement your features as plugins. Let's call them type A and B features for now."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Plugin Store Option in Navbar",src:i(93556).A+"",width:"505",height:"519"})}),"\n",(0,t.jsx)(n.h4,{id:"a-feature-that-are-located-in-the-bottom-navigation-bar",children:"A. Feature that are located in the bottom navigation bar"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For the features in the navbar we have maintained a list of them in ",(0,t.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa/blob/develop/lib/views/main_screen.dart",children:"main_scree.dart"})," file.It has detailed comments to help you understand the operations."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"renderBottomNavBarPlugins"})," method combines current features and plugins in navbar and generates an array containing ",(0,t.jsx)(n.code,{children:"navBarItems"})," and ",(0,t.jsx)(n.code,{children:"navbarClasses"})," and then it is returned to ",(0,t.jsx)(n.code,{children:"children"})," property of the navbar UI code."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Let's understand some important variables before understanding the process of conversion."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Name"})," of property provided to any of the below variables should the exactly same for that feature only without any trailing spaces. Duplicate or Existing plugin names shouldn't be used keep the application consistent and predictable."]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"navBarItems"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type ",(0,t.jsx)(n.code,{children:"[ BottomNavigationBarItem() ]"})]}),"\n",(0,t.jsxs)(n.li,{children:["contains list of ",(0,t.jsx)(n.code,{children:"BottomNavigationBarItem"})," widget to show ",(0,t.jsx)(n.code,{children:"icon"})," and ",(0,t.jsx)(n.code,{children:"text"})," to the navbar options."]}),"\n",(0,t.jsx)(n.li,{children:"if your feature is not a plugin it should be added to this array."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"navBarClasses"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type ",(0,t.jsx)(n.code,{children:"[Widgets]"})]}),"\n",(0,t.jsx)(n.li,{children:"Array that contains the Widgets to be rendered on the navbar"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"navNameClasses"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type ",(0,t.jsx)(n.code,{children:" Map<dynamic, dynamic>"})]}),"\n",(0,t.jsxs)(n.li,{children:["Maps the feature names with their proper Icons and Widgets (named as ",(0,t.jsx)(n.code,{children:"class"}),") used in navbar."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"navNameIcon"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type ",(0,t.jsx)(n.code,{children:"Map<String, Widgets>"})]}),"\n",(0,t.jsx)(n.li,{children:"Contains a key value pair of the feature name in the navbar and it's corresponding plugin."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"b-other-features",children:"B. Other Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"TalawaPluginProvider"})," is Flutter widget that is used here . The Source can be viewed ",(0,t.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa/blob/develop/lib/plugins/talawa_plugin_provider.dart",children:"here"})]}),"\n",(0,t.jsxs)(n.li,{children:["Here's the basic use of ",(0,t.jsx)(n.code,{children:"TalawaPluginProvider"})," with ",(0,t.jsx)(n.code,{children:"Text()"})," widget.Let's discuss it's properties"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'    const TalawaPluginProvider(child: Text("Demo") ,\n        visible: true,\n        pluginName: "My Plugin"\n    );\n'})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"child"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type ",(0,t.jsx)(n.code,{children:"Widget?"})]}),"\n",(0,t.jsxs)(n.li,{children:["It can be any flutter UI widget like ",(0,t.jsx)(n.code,{children:"Container()"}),", ",(0,t.jsx)(n.code,{children:"Text()"}),", ",(0,t.jsx)(n.code,{children:"Row()"}),",etc. For example if your features is encapsulated within an ",(0,t.jsx)(n.code,{children:"Container()"})," widget then wrap that widget into the ",(0,t.jsx)(n.code,{children:"TalawaPluginProvider"})," ."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"visible"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type ",(0,t.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,t.jsx)(n.li,{children:"True if plugin is Installed and plugin will be visible, Otherwise false hence plugin is hidden."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"pluginName"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type ",(0,t.jsx)(n.code,{children:"String"})]}),"\n",(0,t.jsxs)(n.li,{children:["Contains the name of the plugin. Make sure that the name provided here should match with the plugin name registered on the store from the\n",(0,t.jsx)(n.a,{href:"#a-feature-that-are-located-in-the-bottom-navigation-bar",children:"Step 1 A "})]}),"\n",(0,t.jsxs)(n.li,{children:["For example. If plugin stored on the store as ",(0,t.jsx)(n.code,{children:"Members List"})," then here exactly enter ",(0,t.jsx)(n.code,{children:"Members List"})," without any trialing spaces."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("u",{children:(0,t.jsx)(n.h4,{id:"additional-properties--for-development-purpose-only",children:"Additional properties : [For Development Purpose Only]"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"serverVisible"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type ",(0,t.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:["True will make all plugins visible if set to ",(0,t.jsx)(n.code,{children:"true"})," otherwise ",(0,t.jsx)(n.code,{children:"false"})," won't change anything."]}),"\n",(0,t.jsx)(n.li,{children:"This property is accessible for the developers only as it can be only set during development phase. We can see that it is defined in build method of the widget."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"     Widget build(BuildContext context) {\n        var serverVisible = false;\n        serverVisible = checkFromPluginList();\n        return serverVisible || visible ? child! : Container();\n    }\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},24525:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/plugin-store-navbar-b78151eeb9009d78556070a8401518c3.PNG"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(96540);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}},93556:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/plugin-types-c3fe5b2573f8665c22ceb2dc38b59360.PNG"}}]);