/*! For license information please see b50efff5.e0b8d24a.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[6032],{8173:function(e,t,i){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function r(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return a(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}i.d(t,{Z:function(){return r}})},3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return m},kt:function(){return u}});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},m=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=o(i),u=r,g=d["".concat(c,".").concat(u)]||d[u]||h[u]||n;return i?a.createElement(g,l(l({ref:t},m),{},{components:i})):a.createElement(g,l({ref:t},m))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,l=new Array(n);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<n;o++)l[o]=i[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3","beginner/early-game-question-4"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,t,i){"use strict";i.d(t,{Z:function(){return m}});var a=i(8173),r=i(7294),n=i(5774),l=i(6679),s=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],c=[];!function e(t,i){for(var r,n=(0,a.Z)(i);!(r=n()).done;){var l=r.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(c,s),"beginner"===c[0]&&c.shift();var o=c.length;function m(e){var t=e.id,i=c.findIndex((function(e){return"beginner/"+t===e}));if(-1===i)throw new Error("page id not found in sidebar");var a=Math.round((i+1)/o*100);return(0,r.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),r.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},r.createElement(n.Ip,{value:a,text:a+"%"}))}},5169:function(e,t,i){"use strict";i.r(t),i.d(t,{contentTitle:function(){return je},default:function(){return Me},frontMatter:function(){return Be},metadata:function(){return _e},toc:function(){return Fe}});var a,r,n,l,s,c,o,m,h,d,u,g,p,y,f,b,x,v,E,w,k,N,O,P,q,C,S,B,j,_,F,A,M=i(2122),T=i(9756),H=i(7294),R=i(3905),I=i(1961),z=["title","titleId"];function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var W,Z,V,X,U,Q,L,$,J,K,Y,ee,te,ie,ae,re,ne,le,se,ce,oe,me,he,de,ue,ge,pe,ye,fe,be,xe,ve,Ee,we,ke,Ne=function(e){var t=e.title,i=e.titleId,M=G(e,z);return H.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,a||(a=H.createElement("defs",null,H.createElement("filter",{x:0,y:0,width:1,height:1,id:"finesse-1_yml__a"},H.createElement("feFlood",{floodColor:"#0ff"})),H.createElement("filter",{id:"finesse-1_yml__b"},H.createElement("feOffset",{in:"SourceAlpha",dx:2,dy:2,result:"offsetblur"}),H.createElement("feComponentTransfer",{result:"shadow"},H.createElement("feFuncA",{type:"linear",slope:.5})),H.createElement("feMorphology",{in:"SourceAlpha",operator:"dilate",radius:1,result:"border"}),H.createElement("feMerge",null,H.createElement("feMergeNode",{in:"shadow"}),H.createElement("feMergeNode",{in:"border"}),H.createElement("feMergeNode",{in:"SourceGraphic"}))))),r||(r=H.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red2.svg"})),n||(n=H.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow2.svg"})),l||(l=H.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green2.svg"})),s||(s=H.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue2.svg"})),c||(c=H.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple2.svg"})),H.createElement("svg",D({height:100,width:90,x:464,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,o||(o=H.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),m||(m=H.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#finesse-1_yml__a)",x:"0%",y:"50%"},"Clue Giver")),h||(h=H.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),H.createElement("svg",D({height:100,width:70,x:554,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,d||(d=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",D({height:100,width:70,x:632,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,u||(u=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",D({height:100,width:70,x:710,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,g||(g=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",D({height:100,width:70,x:788,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,p||(p=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",D({height:100,width:70,x:866,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,y||(y=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",D({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,f||(f=H.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),H.createElement("svg",D({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,b||(b=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",D({height:20,width:64,x:557,y:125,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,x||(x=H.createElement("path",{fill:"red",stroke:"#fff",d:"M0 0h64v20H0z"})),H.createElement("svg",D({height:20,width:64,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,v||(v=H.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%"},"Red 3")))),H.createElement("svg",D({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,E||(E=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",D({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,w||(w=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",D({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,k||(k=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",D({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,N||(N=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",D({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,O||(O=H.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),H.createElement("svg",D({height:100,width:70,x:554,y:250,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,P||(P=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",D({height:100,width:70,x:632,y:250,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,q||(q=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C||(C=H.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:247})),H.createElement("svg",D({height:100,width:70,x:710,y:250,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,S||(S=H.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red.svg"}))),B||(B=H.createElement("image",{height:70,width:50,x:720,xlinkHref:"/img/pieces/arrow.svg",y:210})),j||(j=H.createElement("circle",{cx:745,cy:235,fill:"red",r:15,stroke:"#000",strokeWidth:2})),H.createElement("svg",D({height:100,width:70,x:710,y:250,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,_||(_=H.createElement("text",{dominantBaseline:"central",fill:"#fff",stroke:"#fff",textAnchor:"middle",x:"50%",y:"50%",fontSize:"1.5em",filter:"url(#finesse-1_yml__b)"},"(4)"))),H.createElement("svg",D({height:100,width:70,x:788,y:250,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,F||(F=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",D({height:100,width:70,x:866,y:250,className:"example","aria-labelledby":i},M),t?H.createElement("title",{id:i},t):null,A||(A=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},Oe=["title","titleId"];function Pe(){return(Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function qe(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var Ce=function(e){var t=e.title,i=e.titleId,a=qe(e,Oe);return H.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:500,viewBox:"0 0 866 500",width:866,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,W||(W=H.createElement("defs",null,H.createElement("filter",{id:"finesse-2_yml__a"},H.createElement("feOffset",{in:"SourceAlpha",dx:2,dy:2,result:"offsetblur"}),H.createElement("feComponentTransfer",{result:"shadow"},H.createElement("feFuncA",{type:"linear",slope:.5})),H.createElement("feMorphology",{in:"SourceAlpha",operator:"dilate",radius:1,result:"border"}),H.createElement("feMerge",null,H.createElement("feMergeNode",{in:"shadow"}),H.createElement("feMergeNode",{in:"border"}),H.createElement("feMergeNode",{in:"SourceGraphic"}))))),Z||(Z=H.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red0.svg"})),V||(V=H.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),X||(X=H.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),U||(U=H.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue0.svg"})),Q||(Q=H.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),H.createElement("svg",Pe({height:100,width:90,x:464,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,L||(L=H.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice"))),H.createElement("svg",Pe({height:100,width:70,x:554,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,$||($=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",Pe({height:100,width:70,x:632,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,J||(J=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",Pe({height:100,width:70,x:710,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,K||(K=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",Pe({height:100,width:70,x:788,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,Y||(Y=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",Pe({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,ee||(ee=H.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),H.createElement("svg",Pe({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,te||(te=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",Pe({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,ie||(ie=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",Pe({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,ae||(ae=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",Pe({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,re||(re=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",Pe({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,ne||(ne=H.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),le||(le=H.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:551,y:247})),H.createElement("svg",Pe({height:100,width:70,x:554,y:250,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,se||(se=H.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red.svg"}))),H.createElement("svg",Pe({height:100,width:70,x:554,y:250,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,ce||(ce=H.createElement("text",{dominantBaseline:"central",fill:"#fff",stroke:"#fff",textAnchor:"middle",x:"50%",y:"50%",fontSize:"1.5em",filter:"url(#finesse-2_yml__a)"},"(1)"))),oe||(oe=H.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:629,y:247})),H.createElement("svg",Pe({height:100,width:70,x:632,y:250,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,me||(me=H.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red.svg"}))),H.createElement("svg",Pe({height:100,width:70,x:710,y:250,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,he||(he=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",Pe({height:20,width:64,x:713,y:250,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,de||(de=H.createElement("path",{fill:"#00f",stroke:"#fff",d:"M0 0h64v20H0z"})),H.createElement("svg",Pe({height:20,width:64,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,ue||(ue=H.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%"},"Blue 1")))),H.createElement("svg",Pe({height:100,width:70,x:788,y:250,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,ge||(ge=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",Pe({height:100,width:90,x:464,y:375,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,pe||(pe=H.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Donald"))),ye||(ye=H.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:551,y:372})),H.createElement("svg",Pe({height:100,width:70,x:554,y:375,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,fe||(fe=H.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/blue.svg"}))),be||(be=H.createElement("image",{height:70,width:50,x:564,xlinkHref:"/img/pieces/arrow.svg",y:335})),xe||(xe=H.createElement("circle",{cx:589,cy:360,fill:"#00f",r:15,stroke:"#000",strokeWidth:2})),H.createElement("svg",Pe({height:100,width:70,x:554,y:375,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,ve||(ve=H.createElement("text",{dominantBaseline:"central",fill:"#fff",stroke:"#fff",textAnchor:"middle",x:"50%",y:"50%",fontSize:"1.5em",filter:"url(#finesse-2_yml__a)"},"(2)"))),H.createElement("svg",Pe({height:100,width:70,x:632,y:375,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,Ee||(Ee=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",Pe({height:100,width:70,x:710,y:375,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,we||(we=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",Pe({height:100,width:70,x:788,y:375,className:"example","aria-labelledby":i},a),t?H.createElement("title",{id:i},t):null,ke||(ke=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},Se=["components"],Be={id:"finesse",title:"The Finesse"},je=void 0,_e={unversionedId:"beginner/finesse",id:"beginner/finesse",isDocsHomePage:!1,title:"The Finesse",description:"- Normally, players play cards that have been clued by someone else on the team.",source:"@site/docs/beginner/finesse.md",sourceDirName:"beginner",slug:"/beginner/finesse",permalink:"/docs/beginner/finesse",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/finesse.md",version:"current",frontMatter:{id:"finesse",title:"The Finesse"},sidebar:"mainSidebar",previous:{title:"The Prompt (Question 3)",permalink:"/docs/beginner/prompt-question-3"},next:{title:"The Finesse (Question 1)",permalink:"/docs/beginner/finesse-question-1"}},Fe=[{value:"Prompts &gt; Finesses",id:"prompts--finesses",children:[]},{value:"Finesse Urgency",id:"finesse-urgency",children:[]},{value:"Finesse Position",id:"finesse-position",children:[]}],Ae={toc:Fe};function Me(e){var t=e.components,i=(0,T.Z)(e,Se);return(0,R.kt)("wrapper",(0,M.Z)({},Ae,i,{components:t,mdxType:"MDXLayout"}),(0,R.kt)(I.Z,{id:"finesse",mdxType:"BeginnersGuideProgress"}),(0,R.kt)("ul",null,(0,R.kt)("li",{parentName:"ul"},"Normally, players play cards that have been clued by someone else on the team."),(0,R.kt)("li",{parentName:"ul"},"However, it is also possible to tell a player to blind-play a card without any clues on it at all."),(0,R.kt)("li",{parentName:"ul"},"In the example below:",(0,R.kt)("ul",{parentName:"li"},(0,R.kt)("li",{parentName:"ul"},"Bob has no clued cards in his hand."),(0,R.kt)("li",{parentName:"ul"},"Alice clues red to Cathy, touching a red 4. This must be a ",(0,R.kt)("em",{parentName:"li"},"Play Clue")," on the red 4."),(0,R.kt)("li",{parentName:"ul"},"Bob sees that the red 4 is currently unplayable. Assuming Alice is not making a mistake, this clue implies that someone has the red 3."),(0,R.kt)("li",{parentName:"ul"},"Bob does not see a red 3 clued in anyone else's hand. So, Alice must be promising him that he has a red 3."),(0,R.kt)("li",{parentName:"ul"},"Normally, this would indicate a ",(0,R.kt)("em",{parentName:"li"},"Prompt"),". But Bob does not have any red cards and Bob does not have any 3's. So where is the red 3?"),(0,R.kt)("li",{parentName:"ul"},"Bob knows that this must be a ",(0,R.kt)("em",{parentName:"li"},"Finesse")," - he is promised that his left-most unclued card is the red 3."),(0,R.kt)("li",{parentName:"ul"},"Bob blind-plays his slot 1 card, and it is the red 3."),(0,R.kt)("li",{parentName:"ul"},"Cathy sees the blind-play happen immediately after this red clue, so she knows that she must have the connecting red card, the red 4."),(0,R.kt)("li",{parentName:"ul"},"Cathy plays the red 4.")))),(0,R.kt)(Ne,{mdxType:"Finesse1"}),(0,R.kt)("h3",{id:"prompts--finesses"},"Prompts > Finesses"),(0,R.kt)("ul",null,(0,R.kt)("li",{parentName:"ul"},"Note that ",(0,R.kt)("strong",{parentName:"li"},(0,R.kt)("em",{parentName:"strong"},"Prompts")," take precedence over ",(0,R.kt)("em",{parentName:"strong"},"Finesses")),". Players should never blind-play a card if the situation can apply to the clued cards in their hand.")),(0,R.kt)("br",null),(0,R.kt)("h3",{id:"finesse-urgency"},"Finesse Urgency"),(0,R.kt)("ul",null,(0,R.kt)("li",{parentName:"ul"},"When a ",(0,R.kt)("em",{parentName:"li"},"Finesse")," occurs, it causes temporary information desynchronization."),(0,R.kt)("li",{parentName:"ul"},"For example, in the previous scenario, if Bob discarded instead of blind-played, Cathy would go on to think that she had the red 3. But she really doesn't have the red 3, which means that information is not synchronized throughout the team."),(0,R.kt)("li",{parentName:"ul"},"For this reason, blind-playing a card into a ",(0,R.kt)("em",{parentName:"li"},"Finesse")," is very important - by doing so, it resynchronizes all of the information. So, ",(0,R.kt)("strong",{parentName:"li"},"if a player is ",(0,R.kt)("em",{parentName:"strong"},"Finessed"),", they should usually blind-play the card immediately"),", even if they have other important cards to play or some good clue to give.")),(0,R.kt)("br",null),(0,R.kt)("h3",{id:"finesse-position"},"Finesse Position"),(0,R.kt)("ul",null,(0,R.kt)("li",{parentName:"ul"},"We define the ",(0,R.kt)("em",{parentName:"li"},"Finesse Position")," as the slot that a player's left-most unclued card is in. A player's ",(0,R.kt)("em",{parentName:"li"},"Finesse Position")," can move around, and if it does, it is still possible to ",(0,R.kt)("em",{parentName:"li"},"Finesse")," them."),(0,R.kt)("li",{parentName:"ul"},"In the example below:",(0,R.kt)("ul",{parentName:"li"},(0,R.kt)("li",{parentName:"ul"},"Alice clues Cathy red, which touches two red cards on slot 1 and slot 2."),(0,R.kt)("li",{parentName:"ul"},"Cathy assumes that the slot 1 card is a red 1."),(0,R.kt)("li",{parentName:"ul"},"Next, Bob clues Donald blue, which touches a blue 2."),(0,R.kt)("li",{parentName:"ul"},"Now, it is Cathy's turn. Cathy knows that she must have the blue 1 and that Bob is trying to perform a ",(0,R.kt)("em",{parentName:"li"},"Finesse"),"."),(0,R.kt)("li",{parentName:"ul"},"Blind-playing the blue 1 is more important than playing the red 1."),(0,R.kt)("li",{parentName:"ul"},"Normally, Cathy's ",(0,R.kt)("em",{parentName:"li"},"Finesse Position")," would be her left-most card. However, since Cathy's slot 1 and slot 2 card are already clued, her ",(0,R.kt)("em",{parentName:"li"},"Finesse Position")," card has shifted down to her slot 3. Thus, Cathy must blind-play the blue 1 from slot 3.")))),(0,R.kt)(Ce,{mdxType:"Finesse2"}))}Me.isMDXComponent=!0},5774:function(e,t,i){"use strict";i.d(t,{Ip:function(){return c}});var a=i(7294),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};function n(e){var t=e.className,i=e.counterClockwise,r=e.dashRatio,n=e.pathRadius,c=e.strokeWidth,o=e.style;return(0,a.createElement)("path",{className:t,style:Object.assign({},o,s({pathRadius:n,dashRatio:r,counterClockwise:i})),d:l({pathRadius:n,counterClockwise:i}),strokeWidth:c,fillOpacity:0})}function l(e){var t=e.pathRadius,i=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+i+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+i+" 1 1 0,-"+2*t+"\n    "}function s(e){var t=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,r=2*Math.PI*a,n=(1-i)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(t?-n:n)+"px"}}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,i=e.minValue,a=e.maxValue;return(Math.min(Math.max(t,i),a)-i)/(a-i)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,i=e.className,r=e.classes,l=e.counterClockwise,s=e.styles,c=e.strokeWidth,o=e.text,m=this.getPathRadius(),h=this.getPathRatio();return(0,a.createElement)("svg",{className:r.root+" "+i,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,a.createElement)("circle",{className:r.background,style:s.background,cx:50,cy:50,r:50}):null,(0,a.createElement)(n,{className:r.trail,counterClockwise:l,dashRatio:t,pathRadius:m,strokeWidth:c,style:s.trail}),(0,a.createElement)(n,{className:r.path,counterClockwise:l,dashRatio:h*t,pathRadius:m,strokeWidth:c,style:s.path}),o?(0,a.createElement)("text",{className:r.text,style:s.text,x:50,y:50},o):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(a.Component)}}]);