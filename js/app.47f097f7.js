(function(t){function e(e){for(var o,i,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var r=n[i];0!==s[r]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},s={app:0},a=[];function r(t){return c.p+"js/"+({about:"about",blog:"blog",contact:"contact",gallery:"gallery",pricing:"pricing",services:"services",shop:"shop",veterinarian:"veterinarian"}[t]||t)+"."+{about:"1f34bea1",blog:"952a52c2",contact:"5e126f2b",gallery:"5c4744ff",pricing:"2fc40d62",services:"d15c4a02",shop:"b892546c",veterinarian:"44251c34"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={shop:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="css/"+({about:"about",blog:"blog",contact:"contact",gallery:"gallery",pricing:"pricing",services:"services",shop:"shop",veterinarian:"veterinarian"}[t]||t)+"."+{about:"31d6cfe0",blog:"31d6cfe0",contact:"31d6cfe0",gallery:"31d6cfe0",pricing:"31d6cfe0",services:"31d6cfe0",shop:"67d6f31c",veterinarian:"31d6cfe0"}[t]+".css",s=c.p+o,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var l=a[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===s))return e()}var m=document.getElementsByTagName("style");for(r=0;r<m.length;r++){l=m[r],u=l.getAttribute("data-href");if(u===o||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||s,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete i[t],p.parentNode.removeChild(p),n(a)},p.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){i[t]=0})));var o=s[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=s[t]=[e,n]}));e.push(o[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var m=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=s[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",m.name="ChunkLoadError",m.type=o,m.request=i,n[1](m)}s[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1137:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"question"},[o("div",{staticClass:"text"},[o("h3",[t._v("Frequently Asks Questions")]),o("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, veniam. ")]),o("div",{staticClass:"btns",attrs:{id:"change-1",type:"button","aria-expanded":"true"},on:{click:function(e){return t.togglebtn(1)}}},[t._v(" How to train your pet dog? "),o("font-awesome-icon",{attrs:{icon:"minus",show:"true"}}),o("font-awesome-icon",{attrs:{icon:"plus",show:"false"}})],1),t._m(0),o("div",{staticClass:"btns",attrs:{id:"change-2",type:"button","aria-expanded":"false"},on:{click:function(e){return t.togglebtn(2)}}},[t._v(" How to manage your pets? "),o("font-awesome-icon",{attrs:{icon:"minus",show:"true"}}),o("font-awesome-icon",{attrs:{icon:"plus",show:"false"}})],1),t._m(1),o("div",{staticClass:"btns",attrs:{id:"change-3",type:"button","aria-expanded":"false"},on:{click:function(e){return t.togglebtn(3)}}},[t._v(" What is the best grooming for your pets? "),o("font-awesome-icon",{attrs:{icon:"minus",show:"true"}}),o("font-awesome-icon",{attrs:{icon:"plus",show:"false"}})],1),t._m(2),o("div",{staticClass:"btns",attrs:{id:"change-4",type:"button","aria-expanded":"false"},on:{click:function(e){return t.togglebtn(4)}}},[t._v(" What are those requirements for sitting pets? "),o("font-awesome-icon",{attrs:{icon:"minus",show:"true"}}),o("font-awesome-icon",{attrs:{icon:"plus",show:"false"}})],1),t._m(3)]),o("div",{staticClass:"jpg-box"},[o("div",{staticClass:"jpg"},[o("img",{attrs:{src:n("37c3"),alt:""}}),o("div",{staticClass:"media"},[o("a",{staticClass:"play",on:{click:function(e){t.mediaShow=!t.mediaShow}}},[o("img",{attrs:{src:n("5443"),alt:""}})])])])]),o("transition",{attrs:{name:"fade"}},[!0===t.mediaShow?o("div",{attrs:{id:"mediaShow"}},[o("iframe",{attrs:{width:"100%",height:"100%",src:"https://www.youtube.com/embed/7wIMQwtUBls",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),o("div",{staticClass:"close",on:{click:function(e){t.mediaShow=!t.mediaShow}}},[t._v("❌")])]):t._e()])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{attrs:{id:"btn-1"}},[n("li",[t._v("Lorem ipsum dolor sit amet.")]),n("li",[t._v("Lorem ipsum dolor sit amet.")]),n("li",[t._v("Lorem ipsum dolor sit amet.")]),n("li",[t._v("Lorem ipsum dolor sit amet.")]),n("li",[t._v("Lorem ipsum dolor sit amet.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{attrs:{id:"btn-2"}},[n("li",[t._v("Lorem ipsum dolor sit amet.")]),n("li",[t._v("Lorem ipsum dolor sit amet.")]),n("li",[t._v("Lorem ipsum dolor sit amet.")]),n("li",[t._v("Lorem ipsum dolor sit amet.")]),n("li",[t._v("Lorem ipsum dolor sit amet.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{attrs:{id:"btn-3"}},[n("li",[t._v("Lorem ipsum dolor sit amet.")]),n("li",[t._v("Lorem ipsum dolor sit amet.")]),n("li",[t._v("Lorem ipsum dolor sit amet.")]),n("li",[t._v("Lorem ipsum dolor sit amet.")]),n("li",[t._v("Lorem ipsum dolor sit amet.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{attrs:{id:"btn-4"}},[n("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laudantium culpa sunt repellat, suscipit dignissimos eaque cum doloremque praesentium pariatur. ")])])}],s={data:function(){return{mediaShow:!1}},methods:{togglebtn:function(t){var e=document.getElementById("change-"+t);"true"===e.getAttribute("aria-expanded")?e.setAttribute("aria-expanded","false"):e.setAttribute("aria-expanded","true")}}},a=s,r=(n("f017"),n("2877")),c=Object(r["a"])(a,o,i,!1,null,null,null);e["a"]=c.exports},1213:function(t,e,n){t.exports=n.p+"img/1.23875c3d.jpg"},"12dd":function(t,e,n){"use strict";n("b364")},"13d5":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog"},[t._m(0),t.blog!==[]?n("div",{staticClass:"box"},t._l(t.blog,(function(e,o){return n("div",{key:e.src,staticClass:"blog-box"},[n("div",{staticClass:"jpg"},[t.blog[o]?n("img",{attrs:{src:t.getJpgPath(o).src}}):t._e()]),n("div",{staticClass:"text"},[n("span",[t._v(t._s(e.time))]),n("p",[t._v(t._s(e.title))])])])})),0):t._e()])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h3",[t._v("Latest news from our blog")])])}],s=n("bc3a"),a=n.n(s),r={data:function(){return{blog:[]}},beforeCreate:function(){var t=this;a.a.get("./blog.json").then((function(e){t.blog=e.data.blog})).catch((function(t){console.log(t)}))},methods:{getJpgPath:function(t){var e=this.blog[t].src;return{src:n("fe12")("./".concat(e))}}}},c=r,l=(n("95b7"),n("2877")),u=Object(l["a"])(c,o,i,!1,null,null,null);e["a"]=u.exports},2201:function(t,e,n){t.exports=n.p+"img/happy.de50368a.jpg"},3287:function(t,e,n){},3407:function(t,e,n){},"36b7":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"choose"},[o("div",{staticClass:"jpg"},[o("img",{attrs:{src:n("aae9"),alt:""}})]),o("div",{staticClass:"text"},[o("h3",[t._v("Why choose Us?")]),o("div",{staticClass:"text-sub"},[o("div",{staticClass:"items"},[o("div",{staticClass:"jpg-1"},[o("img",{attrs:{src:n("2201"),alt:""}})]),o("div",{staticClass:"text-1"},[o("h3",[t._v("title")]),o("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, totam?")])]),o("div",{staticClass:"jpg-1"},[o("img",{attrs:{src:n("2201"),alt:""}})]),o("div",{staticClass:"text-1"},[o("h3",[t._v("title")]),o("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, totam?")])])]),o("div",{staticClass:"items"},[o("div",{staticClass:"jpg-1"},[o("img",{attrs:{src:n("2201"),alt:""}})]),o("div",{staticClass:"text-1"},[o("h3",[t._v("title")]),o("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, totam?")])]),o("div",{staticClass:"jpg-1"},[o("img",{attrs:{src:n("2201"),alt:""}})]),o("div",{staticClass:"text-1"},[o("h3",[t._v("title")]),o("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, totam?")])])])])])])}],s=(n("8f21"),n("2877")),a={},r=Object(s["a"])(a,o,i,!1,null,null,null);e["a"]=r.exports},"37c3":function(t,e,n){t.exports=n.p+"img/see.078f9d24.jpg"},"3bc9":function(t,e,n){},"3e1b":function(t,e,n){},"4bf5":function(t,e,n){"use strict";n("ab66")},"4c8f":function(t,e,n){},5443:function(t,e,n){t.exports=n.p+"img/play.b07d158a.jpeg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[""!==this.router?n("section",[n("headercomponent"),n("router-view"),n("footercomponent")],1):n("section",[n("headercomponent"),n("breadcomponent"),n("homecomponent"),n("choosecomponent"),n("countercomponent"),n("questioncomponent"),n("pricecomponent"),n("gallerycomponent"),n("blogcomponent"),n("formcomponent"),n("footercomponent")],1)])},s=[],a=(n("4de4"),n("4160"),n("d81d"),n("b0c0"),n("159b"),n("2909")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("header",[n("div",{staticClass:"navbar"},[n("div",{staticClass:"bars"},[n("h2",[n("label",{attrs:{for:"check"},on:{click:function(e){return t.movebody()}}},[n("font-awesome-icon",{attrs:{icon:"bars"}})],1),n("router-link",{attrs:{to:"/"}},[n("font-awesome-icon",{attrs:{icon:"dog"}}),t._v("Pet sitting ")],1)],1)]),n("div",{staticClass:"shop"},[t.itemofshop()>0?n("div",{staticClass:"itemofshop"},[n("sup",[t._v(t._s(t.itemofshop()))])]):t._e(),n("h2",[n("router-link",{attrs:{to:"/shop"}},[n("font-awesome-icon",{attrs:{icon:"shopping-cart"}})],1)],1)])])]),n("section",[n("input",{attrs:{type:"checkbox",id:"check"}}),n("ul",{staticClass:"menu"},[n("li",{on:{click:function(e){return t.goTop()}}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("li",{on:{click:function(e){return t.goTop()}}},[n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("li",{on:{click:function(e){return t.goTop()}}},[n("router-link",{attrs:{to:"/veterinarian"}},[t._v("Veterinarian")])],1),n("li",{on:{click:function(e){return t.goTop()}}},[n("router-link",{attrs:{to:"/services"}},[t._v("Services")])],1),n("li",{on:{click:function(e){return t.goTop()}}},[n("router-link",{attrs:{to:"/gallery"}},[t._v("Gallery")])],1),n("li",{on:{click:function(e){return t.goTop()}}},[n("router-link",{attrs:{to:"/pricing"}},[t._v("Pricing")])],1),n("li",{on:{click:function(e){return t.goTop()}}},[n("router-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),n("li",{on:{click:function(e){return t.goTop()}}},[n("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)]),n("label",{staticClass:"menu-bg",attrs:{for:"check"},on:{click:function(e){return t.movebody()}}})])])},c=[],l={methods:{movebody:function(){var t=document.getElementsByTagName("body");"80%"==t[0].style.width?t[0].removeAttribute("style","width:100%;position:relative;left:0;"):t[0].setAttribute("style","width:80%;position:relative;left:20%;")},itemofshop:function(){var t=this.$store.state.content;return t.length},goTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}},u=l,m=(n("7930"),n("2877")),p=Object(m["a"])(u,r,c,!1,null,null,null),d=p.exports,f=n("ecb6"),v=n("82f3"),h=n("36b7"),g=n("6b58"),b=n("1137"),_=n("c4e4"),C=n("b947"),w=n("13d5"),y=n("5898"),x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("div",{staticClass:"footer"},[o("div",{staticClass:"box"},[o("h4",[t._v("Petsitting")]),o("p",[t._v("A small river named Duden flows by their place and supplies it with the necessary regelialia.")]),o("font-awesome-icon",{staticClass:"iconL",attrs:{icon:["fab","twitter"]}}),o("font-awesome-icon",{staticClass:"iconL",attrs:{icon:["fab","facebook"]}}),o("font-awesome-icon",{staticClass:"iconL",attrs:{icon:["fab","instagram"]}})],1),o("div",{staticClass:"box"},[o("h4",[t._v("Latest News")]),o("div",{staticClass:"news"},t._l(t.getNewBlog,(function(e){return o("section",{key:e.src},[o("div",{staticClass:"jpg"},[o("img",{attrs:{src:n("fe12")("./"+e.src),alt:""}})]),o("div",{staticClass:"text"},[o("a",{attrs:{href:""}},[o("p",[t._v(t._s(e.title))])]),o("span",[t._v(t._s(e.time))])])])})),0)]),o("div",{staticClass:"box"},[o("h4",[t._v("Quick Links")]),o("ul",[o("li",{on:{click:function(e){return t.goTop()}}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),o("li",{on:{click:function(e){return t.goTop()}}},[o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),o("li",{on:{click:function(e){return t.goTop()}}},[o("router-link",{attrs:{to:"/veterinarian"}},[t._v("Veterinarian")])],1),o("li",{on:{click:function(e){return t.goTop()}}},[o("router-link",{attrs:{to:"/services"}},[t._v("Services")])],1),o("li",{on:{click:function(e){return t.goTop()}}},[o("router-link",{attrs:{to:"/gallery"}},[t._v("Gallery")])],1),o("li",{on:{click:function(e){return t.goTop()}}},[o("router-link",{attrs:{to:"/pricing"}},[t._v("Pricing")])],1),o("li",{on:{click:function(e){return t.goTop()}}},[o("router-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),o("li",{on:{click:function(e){return t.goTop()}}},[o("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])]),o("div",{staticClass:"box"},[o("h4",[t._v("Have a Questions?")]),o("ul",[o("li",[o("font-awesome-icon",{staticClass:"iconR",attrs:{icon:"map"}}),o("span",{staticClass:"text"},[t._v("taiwan Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem recusandae praesentium debitis et molestiae laborum delectus tempore harum officiis. ")])],1),o("li",[o("font-awesome-icon",{staticClass:"iconR",attrs:{icon:"phone"}}),o("span",{staticClass:"text"},[t._v("0919546545")])],1),o("li",[o("font-awesome-icon",{staticClass:"iconR",attrs:{icon:"paper-plane"}}),o("span",{staticClass:"text"},[t._v("giuygig@ui.com")])],1)])])]),t._m(0)])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copyright"},[n("p",[t._v("edit by cloud in 2020")])])}],j=(n("fb6a"),n("bc3a")),E=n.n(j),L={data:function(){return{blog:[]}},beforeCreate:function(){var t=this;E.a.get("./blog.json").then((function(e){t.blog=e.data.blog})).catch((function(t){console.log(t)}))},computed:{getNewBlog:function(){return this.blog.slice(0,2)}},methods:{goTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}},T=L,$=(n("88bf"),Object(m["a"])(T,x,k,!1,null,null,null)),S=$.exports,O={data:function(){return{cssanimate:{majorClass:[".navbar",".banner",".home",".choose",".counter",".question",".price",".gallery",".blog",".form",".footer"],filterClass:[]},counterEl:[],counter:[],router:""}},components:{headercomponent:d,breadcomponent:f["a"],homecomponent:v["a"],choosecomponent:h["a"],countercomponent:g["a"],questioncomponent:b["a"],pricecomponent:_["a"],gallerycomponent:C["a"],blogcomponent:w["a"],formcomponent:y["a"],footercomponent:S},mounted:function(){this.$store.dispatch("INIT_shop"),this.cssanimate.filterClass=this.cssanimate.majorClass.filter((function(t){return null!==document.querySelector(t)})),this.counterEl=document.getElementsByClassName("number"),this.counter=Object(a["a"])(this.counterEl).map((function(){return 0})),window.onload=this.jump,window.addEventListener("scroll",this.jump)},updated:function(){this.cssanimate.filterClass=this.cssanimate.majorClass.filter((function(t){return null!==document.querySelector(t)})),this.counterEl=null,this.counterEl=document.getElementsByClassName("number"),this.counter=Object(a["a"])(this.counterEl).map((function(){return 0}))},computed:{getElData:function(){var t=this.cssanimate.filterClass.map((function(t){var e=document.querySelector(t);return{filterClass:t,el:e,position:e.offsetTop}}));return t},getCounterElData:function(){var t=Object(a["a"])(this.counterEl),e=0,n=t.map((function(t){var n=t.dataset.number;return n>1e3&&(e=100),n<=1e3&&(e=1e3),{el:t,zero:0,final:n,speed:e}}));return n}},methods:{jump:function(){for(var t=0;t<this.getElData.length;t++){var e=this.getElData[t],n=e.el,o=e.filterClass,i=e.position;window.scrollY+.6*screen.height>i&&(n.classList.add("show"),".counter"===o&&this.counterStart())}},counterStart:function(){var t=this;this.getCounterElData.forEach((function(e,n){var o=e.el,i=e.final,s=e.speed,a=setTimeout((function(){if(o.innerHTML=t.counter[n],o.innerHTML===i)return clearTimeout(a);t.counter[n]++,t.counterStart()}),s)}))}},watch:{$route:function(t){var e=t.name;this.router=e,this.jump,console.log(e)},counter:function(t){console.log(t)}}},q=O,P=(n("79cc"),Object(m["a"])(q,i,s,!1,null,null,null)),A=P.exports,N=(n("a434"),n("2f62"));o["a"].use(N["a"]);var J={load:function(){return JSON.parse(localStorage.getItem("vue-shop")||"[]")},save:function(t){localStorage.setItem("vue-shop",JSON.stringify(t))}},B=new N["a"].Store({strict:!0,state:{content:[{name:"醫療",price:"49",src:"1.jpg",number:1},{name:"玩樂",price:"99",src:"2.jpg",number:1},{name:"照顧",price:"149",src:"3.jpg",number:1}]},mutations:{set_shop:function(t,e){t.content=e,J.save(t.content)},add_shop:function(t,e){var n=e.data;t.content.push(n),J.save(t.content)},update_shop:function(t,e){var n=e.index,o=e.data;t.content[n].number=o.number,J.save(t.content)},remove_shop:function(t,e){t.content.splice(e,1),J.save(t.content)}},actions:{INIT_shop:function(t){var e=t.commit;e("set_shop",J.load())}},modules:{}}),H=(n("d3b7"),n("8c4f")),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("breadcomponent"),n("homecomponent"),n("choosecomponent"),n("countercomponent"),n("questioncomponent"),n("pricecomponent"),n("gallerycomponent"),n("blogcomponent"),n("formcomponent")],1)},I=[],M={name:"home",components:{breadcomponent:f["a"],homecomponent:v["a"],choosecomponent:h["a"],countercomponent:g["a"],questioncomponent:b["a"],pricecomponent:_["a"],gallerycomponent:C["a"],blogcomponent:w["a"],formcomponent:y["a"]}},U=M,G=Object(m["a"])(U,D,I,!1,null,null,null),F=G.exports;o["a"].use(H["a"]);var Q=[{path:"/",name:"Home",component:F},{path:"*",redirect:"/home"},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/blog",name:"Blog",component:function(){return n.e("blog").then(n.bind(null,"fd3f"))}},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}},{path:"/gallery",name:"Gallery",component:function(){return n.e("gallery").then(n.bind(null,"0d77"))}},{path:"/pricing",name:"Pricing",component:function(){return n.e("pricing").then(n.bind(null,"dbc9"))}},{path:"/services",name:"Services",component:function(){return n.e("services").then(n.bind(null,"f23e"))}},{path:"/veterinarian",name:"Veterinarian",component:function(){return n.e("veterinarian").then(n.bind(null,"840b"))}},{path:"/shop",name:"Shop",component:function(){return n.e("shop").then(n.bind(null,"0fa5"))}}],V=new H["a"]({routes:Q}),W=V,R=n("ecee"),Y=n("c074"),z=n("f2d1"),K=n("ad3d");R["c"].add(Y["a"],Y["c"],Y["j"],z["c"],z["a"],z["b"],Y["d"],Y["g"],Y["f"],Y["b"],Y["i"],Y["h"],Y["e"]),o["a"].component("font-awesome-icon",K["a"]),o["a"].config.productionTip=!1,o["a"].directive("focus",{inserted:function(t){t.focus()}}),new o["a"]({store:B,router:W,render:function(t){return t(A)}}).$mount("#app")},5898:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form"},[n("div",{staticClass:"jpg"}),n("div",{staticClass:"form-data"},[n("h2",[t._v("Free Consultation")]),n("form",{attrs:{action:"#"}},[n("select",{staticClass:"form-control",attrs:{required:""}},[n("option",{attrs:{value:""}},[t._v("Select services")]),n("option",{attrs:{value:""}},[t._v("Cat Sitting")]),n("option",{attrs:{value:""}},[t._v("Dog Walk")]),n("option",{attrs:{value:""}},[t._v("Pet Spa")]),n("option",{attrs:{value:""}},[t._v("Pet Grooming")])]),n("div",{staticClass:"form-group"},[n("input",{attrs:{type:"text",placeholder:"Your Name",required:""}}),n("input",{attrs:{type:"text",placeholder:"Vehicle number",required:""}})]),n("div",{staticClass:"form-group"},[n("div",{staticClass:"date"},[n("input",{attrs:{type:"date",placeholder:"Date",required:""}}),n("span",{staticClass:"fa fa-calendar"})]),n("div",{staticClass:"time"},[n("input",{attrs:{type:"time",placeholder:"Time",required:""}}),n("span",{staticClass:"fa fa-clock-o"})])]),n("textarea",{attrs:{name:"",id:"",cols:"30",rows:"7",placeholder:"Message"}}),n("input",{attrs:{type:"submit",value:"Send message",id:"btn"}})])])])}],s=(n("9b75"),n("2877")),a={},r=Object(s["a"])(a,o,i,!1,null,null,null);e["a"]=r.exports},"5b43":function(t,e,n){},"696a":function(t,e,n){t.exports=n.p+"img/relax.9ec99510.jpg"},"6b58":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"counter-bg"},[n("div",{staticClass:"counter"},[n("div",{staticClass:"counter-box"},[n("div",{staticClass:"number",attrs:{"data-number":"50"}},[t._v("0")]),n("div",{staticClass:"text"},[t._v("Customer")])]),n("div",{staticClass:"counter-box"},[n("div",{staticClass:"number",attrs:{"data-number":"6150"}},[t._v("0")]),n("div",{staticClass:"text"},[t._v("Professionals")])]),n("div",{staticClass:"counter-box"},[n("div",{staticClass:"number",attrs:{"data-number":"50"}},[t._v("0")]),n("div",{staticClass:"text"},[t._v("Products")])]),n("div",{staticClass:"counter-box"},[n("div",{staticClass:"number",attrs:{"data-number":"150"}},[t._v("0")]),n("div",{staticClass:"text"},[t._v("Pets Hosted")])])])])}],s=(n("4bf5"),n("2877")),a={},r=Object(s["a"])(a,o,i,!1,null,null,null);e["a"]=r.exports},7930:function(t,e,n){"use strict";n("3bc9")},"79cc":function(t,e,n){"use strict";n("d231")},8027:function(t,e,n){},"82f3":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("div",{staticClass:"items"},[o("div",{staticClass:"jpg"},[o("img",{attrs:{src:n("cf65"),alt:""}})]),o("div",{staticClass:"text"},[o("h3",[t._v("醫療")]),o("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cupiditate.")])])]),o("div",{staticClass:"items"},[o("div",{staticClass:"jpg"},[o("img",{attrs:{src:n("2201"),alt:""}})]),o("div",{staticClass:"text"},[o("h3",[t._v("玩樂")]),o("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, quo dolorum! Inventore similique veniam corporis. At temporibus ex vel saepe?")])])]),o("div",{staticClass:"items"},[o("div",{staticClass:"jpg"},[o("img",{attrs:{src:n("696a"),alt:""}})]),o("div",{staticClass:"text"},[o("h3",[t._v("照顧")]),o("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quae voluptatum incidunt, quas consequatur quod autem voluptatibus distinctio in aperiam deleniti! Odit quod ipsam earum praesentium amet architecto reiciendis nemo?")])])])])}],s=(n("b5f1"),n("2877")),a={},r=Object(s["a"])(a,o,i,!1,null,null,null);e["a"]=r.exports},"88bf":function(t,e,n){"use strict";n("3407")},"8f21":function(t,e,n){"use strict";n("dbf0")},9404:function(t,e,n){t.exports=n.p+"img/0.3ca0049d.jpg"},"95b7":function(t,e,n){"use strict";n("9cd6")},"9b75":function(t,e,n){"use strict";n("3e1b")},"9cd6":function(t,e,n){},a24a:function(t,e,n){t.exports=n.p+"img/3.349b43dd.jpg"},a5bc:function(t,e,n){t.exports=n.p+"img/2.0427544f.jpg"},aae9:function(t,e,n){t.exports=n.p+"img/about.f3b606ad.jpg"},ab66:function(t,e,n){},b364:function(t,e,n){},b5f1:function(t,e,n){"use strict";n("4c8f")},b947:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"gallery"},[t._m(0),o("div",{staticClass:"gallery-box"},t._l(t.gallery,(function(e,n){return o("div",{key:n,class:"jpg-"+(n+1)},[o("div",{staticClass:"bg-opacity"}),o("a",{on:{click:function(o){return t.openJpg(e,n)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.closeJpg(e)},blur:t.closeJpg}},[o("font-awesome-icon",{attrs:{icon:"search-plus"}})],1),o("div",{staticClass:"text"},[o("h4",[t._v("cat"+t._s(n+1))]),o("h2",[t._v("dog"+t._s(n+1))])])])})),0),o("transition",{attrs:{name:"fade"}},[null!==t.index||""!==t.src?o("div",{attrs:{id:"jpgShow"}},[o("div",{staticClass:"jpg"},[o("img",{attrs:{src:n("fe12")("./"+t.src),alt:""}}),o("p",[t._v(t._s(t.index+1)+"/"+t._s(t.gallery.length))])]),o("div",{staticClass:"close",on:{click:t.closeJpg}},[t._v("❌")]),o("div",{staticClass:"arrow right",on:{click:function(e){return t.nextJpg(t.index,1)}}},[t._v("❱")]),o("div",{staticClass:"arrow left",on:{click:function(e){return t.nextJpg(t.index,-1)}}},[t._v("❰")])]):t._e()])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h3",[t._v("Pets Gallery")])])}],s={data:function(){return{gallery:[{src:"banner.jpg"},{src:"care.jpg"},{src:"happy.jpg"},{src:"relax.jpg"},{src:"see.jpg"},{src:"about.jpg"}],src:"",index:null}},methods:{openJpg:function(t,e){var n=t.src;this.src=n,this.index=e,console.log(n)},closeJpg:function(){this.src="",this.index=null},nextJpg:function(t,e){var n=(this.gallery.length+t+e)%this.gallery.length;this.index=n,this.src=this.gallery[n].src}}},a=s,r=(n("f14e"),n("2877")),c=Object(r["a"])(a,o,i,!1,null,null,null);e["a"]=c.exports},c4e4:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"price"},[n("h3",[t._v("Affordable Packages")]),n("div",{staticClass:"flex-box"},[n("div",{staticClass:"box"},[n("div",{staticClass:"hot hide"},[t._v("hot")]),t._m(0),n("div",{staticClass:"text"},[n("h2",[t._v(t._s(t.content[0].name))]),n("sup",[t._v("$")]),n("h1",[t._v("49")]),n("sub",[t._v("/mos")]),n("ul",[n("li",[n("font-awesome-icon",{attrs:{icon:"check"}}),t._v("Lorem, ipsum dolor.")],1),n("li",[n("font-awesome-icon",{attrs:{icon:"check"}}),t._v("Lorem, ipsum dolor.")],1),n("li",[n("font-awesome-icon",{attrs:{icon:"check"}}),t._v("Lorem, ipsum")],1),n("li",[n("font-awesome-icon",{attrs:{icon:"check"}}),t._v("Lorem, ipsum dolor.")],1)])]),n("div",{staticClass:"btn-box"},[n("div",{staticClass:"btn",on:{click:function(e){return t.buy(0)}}},[t._v("加入購物車")])])]),n("div",{staticClass:"box"},[n("div",{staticClass:"hot"},[t._v("hot")]),t._m(1),n("div",{staticClass:"text"},[n("h2",[t._v(t._s(t.content[1].name))]),n("sup",[t._v("$")]),n("h1",[t._v("99")]),n("sub",[t._v("/mos")]),n("ul",[n("li",[n("font-awesome-icon",{attrs:{icon:"check"}}),t._v("Lorem, ipsum dolor.")],1),n("li",[n("font-awesome-icon",{attrs:{icon:"check"}}),t._v("Lorem, ipsum dolor.")],1),n("li",[n("font-awesome-icon",{attrs:{icon:"check"}}),t._v("Lorem, ipsum dolor.")],1),n("li",[n("font-awesome-icon",{attrs:{icon:"check"}}),t._v("Lorem, i")],1),n("li",[n("font-awesome-icon",{attrs:{icon:"check"}}),t._v("Lorem, ipsum")],1)])]),n("div",{staticClass:"btn-box"},[n("div",{staticClass:"btn",on:{click:function(e){return t.buy(1)}}},[t._v("加入購物車")])])]),n("div",{staticClass:"box"},[n("div",{staticClass:"hot hide"},[t._v("hot")]),t._m(2),n("div",{staticClass:"text"},[n("h2",[t._v(t._s(t.content[2].name))]),n("sup",[t._v("$")]),n("h1",[t._v("149")]),n("sub",[t._v("/mos")]),n("ul",[n("li",[n("font-awesome-icon",{attrs:{icon:"check"}}),t._v("Lorem, ipsum dolor.")],1),n("li",[n("font-awesome-icon",{attrs:{icon:"check"}}),t._v("Lorem, ipsum dolor.")],1),n("li",[n("font-awesome-icon",{attrs:{icon:"check"}}),t._v("Lorem, ipsum dolor.")],1),n("li",[n("font-awesome-icon",{attrs:{icon:"check"}}),t._v("Lorem, ipsum d.")],1),n("li",[n("font-awesome-icon",{attrs:{icon:"check"}}),t._v("Lorem, ipsum d.")],1),n("li",[n("font-awesome-icon",{attrs:{icon:"check"}}),t._v("ipsum dolor.")],1)])]),n("div",{staticClass:"btn-box"},[n("div",{staticClass:"btn",on:{click:function(e){return t.buy(2)}}},[t._v("加入購物車")])])])])])},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"jpg"},[o("img",{attrs:{src:n("cf65"),alt:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"jpg"},[o("img",{attrs:{src:n("2201"),alt:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"jpg"},[o("img",{attrs:{src:n("696a"),alt:""}})])}],s=(n("c975"),n("b0c0"),{data:function(){return{content:[{name:"醫療",price:"49",src:"1.jpg",number:1},{name:"玩樂",price:"99",src:"2.jpg",number:1},{name:"照顧",price:"149",src:"3.jpg",number:1}]}},methods:{buy:function(t){var e=this.content[t],n=e.name,o=e.price,i=e.src,s=this.$store.state.content;if(0===s.length)this.$store.commit("add_shop",{data:{name:n,price:o,src:i,number:1}});else{for(var a=0;a<s.length;a++)if(0===s[a].name.indexOf(n))return void this.$store.commit("update_shop",{index:a,data:{number:s[a].number+1}});this.$store.commit("add_shop",{data:{name:n,price:o,src:i,number:1}})}}}}),a=s,r=(n("f55a"),n("2877")),c=Object(r["a"])(a,o,i,!1,null,null,null);e["a"]=c.exports},cf65:function(t,e,n){t.exports=n.p+"img/care.679be70b.jpg"},d231:function(t,e,n){},dbf0:function(t,e,n){},dd1c:function(t,e,n){t.exports=n.p+"img/4.d70f569c.jpg"},ecb6:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},["Home"===t.bread?n("section",{attrs:{name:"fade"}},[n("div",{staticClass:"text"},[n("transition",{attrs:{name:"fade1"}},[t.show1?n("h1",[t._v("Hello, pet!")]):t._e()]),n("transition",{attrs:{name:"fade2"}},[t.show2?n("section",[n("p",[t._v("最優質的寵物護理")]),n("hr"),n("p",[t._v("您的寵物舒服了")])]):t._e()]),n("transition",{attrs:{name:"fade3"}},[t.show3?n("router-link",{staticClass:"btn",attrs:{to:"/services"}},[t._v("了解更多")]):t._e()],1)],1)]):n("section",[n("div",{staticClass:"bread-bg"}),n("div",{staticClass:"bread"},[n("p",[n("a",{attrs:{href:"#"}},[t._v("Home")]),n("span",[t._v(t._s(t.bread))])]),n("h1",[t._v(t._s(t.bread))])])])])},i=[],s=(n("b0c0"),{data:function(){return{bread:this.$route["name"],show1:!1,show2:!1,show3:!1}},mounted:function(){this.delayedShow()},methods:{delayedShow:function(){var t=this;window.setTimeout((function(){return t.show1=!0}),0),window.setTimeout((function(){return t.show2=!0}),1e3),window.setTimeout((function(){return t.show3=!0}),2e3)}}}),a=s,r=(n("12dd"),n("2877")),c=Object(r["a"])(a,o,i,!1,null,null,null);e["a"]=c.exports},f017:function(t,e,n){"use strict";n("8027")},f14e:function(t,e,n){"use strict";n("3287")},f55a:function(t,e,n){"use strict";n("5b43")},f5da:function(t,e,n){t.exports=n.p+"img/banner.07ae6645.jpg"},fe12:function(t,e,n){var o={"./0.jpg":"9404","./1.jpg":"1213","./2.jpg":"a5bc","./3.jpg":"a24a","./4.jpg":"dd1c","./about.jpg":"aae9","./banner.jpg":"f5da","./care.jpg":"cf65","./happy.jpg":"2201","./play.jpeg":"5443","./relax.jpg":"696a","./see.jpg":"37c3"};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=s,t.exports=i,i.id="fe12"}});
//# sourceMappingURL=app.47f097f7.js.map