"use strict";(self.webpackChunkdevfolio=self.webpackChunkdevfolio||[]).push([[757,256],{2821:function(e,t,l){var n=l(7294);const a="block pt-12 md:flex",r="pb-6 md:w-full md:max-w-150 md:p-0",s="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",o="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20";t.Z=e=>{let{title:t,children:l}=e;return n.createElement("div",{className:a},n.createElement("div",{className:r},n.createElement("h2",{className:s},t)),n.createElement("div",{className:o},l))}},7547:function(e,t,l){var n=l(1883),a=l(7294);const r="mb-6",s="font-semibold text-gray-900 pb-1",o="text-md text-gray-600 font-light";t.Z=e=>{let t,{name:l,description:c,link:m=!1,internal:i=!1}=e;return t=i?a.createElement(n.Link,{to:m},l):a.createElement("a",{href:m},l),a.createElement("div",{className:r},a.createElement("h3",{className:s+" "+(m?"hover:underline hover:text-black":"")},m?t:l),a.createElement("p",{className:o},c))}},7291:function(e,t,l){l.r(t);var n=l(7294),a=l(1883),r=l(7196),s=l(4839);const o="text-lg font-bold",c="underline";t.default=()=>n.createElement(r.Z,null,n.createElement(s.Z,{title:"Not found"}),n.createElement("h1",{className:o},"404: Not Found"),n.createElement("p",null,"You just hit a route that doesn't exist."," ",n.createElement(a.Link,{className:c,to:"/"},"Return to safety"),"."))},6106:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var n=l(7294),a=l(2821),r=l(7547);var s=e=>{let{posts:t}=e;return n.createElement(a.Z,{title:"All Blog Posts"},t.map((e=>n.createElement(r.Z,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0}))))},o=l(1634),c=l(7196),m=l(4839),i=l(7291);var d=e=>{let{data:t}=e;const l=t.allMarkdownRemark.edges,a=!l||!l.length;return l&&l.length?n.createElement(c.Z,null,n.createElement(m.Z,{title:"Blog"}),n.createElement(o.Z,{metadata:t.site.siteMetadata}),!a&&n.createElement(s,{posts:l})):n.createElement(i.default,null)}}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-ea6f6a92d80e961018bc.js.map