webpackJsonp([0xd2a57dc1d883],{239:function(n,e,t){"use strict";function o(n,e,t){var o=a.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return a.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var a=[{plugin:t(621),options:{plugins:[]}},{plugin:t(624),options:{plugins:[],color:"#744c9e"}},{plugin:t(623),options:{plugins:[],trackingId:"UA-88472320-3",head:!1,anonymize:!0,respectDNT:!0}},{plugin:t(622),options:{plugins:[],appId:"999308006884630",includeInDevelopment:!1,debug:!1,language:"en_US"}},{plugin:t(626),options:{plugins:[]}}]},445:function(n,e,t){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(584),"component---src-templates-post-jsx":t(590),"component---src-templates-index-jsx":t(589),"component---src-templates-tags-jsx":t(591),"component---src-pages-about-jsx":t(586),"component---src-pages-search-jsx":t(587),"component---src-pages-tags-jsx":t(588)},e.json={"layout-index.json":t(592),"offline-plugin-app-shell-fallback.json":t(606),"im-not-a-witch.json":t(603),"hey-luke-may-the-force-be-with-you.json":t(600),"you-dont-like-your-job-you-dont-strike.json":t(619),"i-hate-yogurt-its-just-stuff-with-bits-in.json":t(601),"im-half-machine-im-a-monster.json":t(602),"you-can-crush-me-but-you-cant-crush-my-spirit.json":t(618),"cops-another-community-im-not-part-of.json":t(597),"inventore-veritatis-et-quasi-architecto-beatae-vitae-dicta-sunt-explicabo.json":t(605),"architecto-beatae-vitae-dicta-sunt-explicabo.json":t(596),"excepteur-sint-occaecat-cupidatat-non-proident-sunt-in-culpa.json":t(599),"et-harum-quidem-rerum-facilis-est-et-expedita-distinctio.json":t(598),"index.json":t(604),"2.json":t(593),"3.json":t(594),"tags-monty-python.json":t(614),"tags-lorem-ipsum.json":t(613),"tags-star-wars.json":t(617),"tags-placeholder.json":t(615),"tags-simpsons.json":t(616),"tags-doctor-who.json":t(611),"tags-arrested-development.json":t(609),"tags-futurama.json":t(612),"tags-dexter.json":t(610),"about.json":t(595),"search.json":t(607),"tags.json":t(608)},e.layouts={"layout---index":t(585)}},446:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(1),c=o(i),l=t(2),p=o(l),f=t(315),d=o(f),m=t(198),h=o(m),g=t(239),y=t(974),x=o(y),v=function(n){var e=n.children;return c.default.createElement("div",null,e())},j=function(n){function e(t){r(this,e);var o=a(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=s({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,x.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);j.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=j,n.exports=e.default},198:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(846),a=o(r),u=(0,a.default)();n.exports=u},447:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(211),a=t(316),u=o(a),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),s[a])return s[a];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(a,{path:n.path})||(0,r.matchPath)(a,{path:n.matchPath}))return i=n,s[a]=n,!0}else{if((0,r.matchPath)(a,{path:n.path,exact:!0}))return i=n,s[a]=n,!0;if((0,r.matchPath)(a,{path:n.path+"index.html"}))return i=n,s[a]=n,!0}return!1}),i}}},448:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(274),a=o(r),u=t(239),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,a.default)();n.exports=c},593:function(n,e,t){t(4),n.exports=function(n){return t.e(0x8f0ce58d3892,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(658)})})}},594:function(n,e,t){t(4),n.exports=function(n){return t.e(0xa66b96fba949,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(659)})})}},595:function(n,e,t){t(4),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(660)})})}},596:function(n,e,t){t(4),n.exports=function(n){return t.e(0xbb6755b0f039,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(661)})})}},597:function(n,e,t){t(4),n.exports=function(n){return t.e(0xc5950a5494a1,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(662)})})}},598:function(n,e,t){t(4),n.exports=function(n){return t.e(36456679927294,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(663)})})}},599:function(n,e,t){t(4),n.exports=function(n){return t.e(0x64d6c2d2cfe8,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(664)})})}},600:function(n,e,t){t(4),n.exports=function(n){return t.e(0xc15ded774fa9,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(665)})})}},601:function(n,e,t){t(4),n.exports=function(n){return t.e(0xae37bf6652cc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(666)})})}},602:function(n,e,t){t(4),n.exports=function(n){return t.e(0xe17047ab134,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(667)})})}},603:function(n,e,t){t(4),n.exports=function(n){return t.e(0x951fe003aab8,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(668)})})}},604:function(n,e,t){t(4),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(669)})})}},605:function(n,e,t){t(4),n.exports=function(n){return t.e(58476350253896,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(670)})})}},592:function(n,e,t){t(4),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(278)})})}},606:function(n,e,t){t(4),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(671)})})}},607:function(n,e,t){t(4),n.exports=function(n){return t.e(0xe7884ae5879b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(672)})})}},609:function(n,e,t){t(4),n.exports=function(n){return t.e(0x926011680435,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(673)})})}},610:function(n,e,t){t(4),n.exports=function(n){return t.e(87043365804883,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(674)})})}},611:function(n,e,t){t(4),n.exports=function(n){return t.e(6419212100129,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(675)})})}},612:function(n,e,t){t(4),n.exports=function(n){return t.e(0x897714128da3,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(676)})})}},613:function(n,e,t){t(4),n.exports=function(n){return t.e(0xc42905159583,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(677)})})}},614:function(n,e,t){t(4),n.exports=function(n){return t.e(0x652ebecfaaea,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(678)})})}},615:function(n,e,t){t(4),n.exports=function(n){return t.e(0xe5d3b4965d9f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(679)})})}},616:function(n,e,t){t(4),n.exports=function(n){return t.e(0xd1b13c23ee24,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(680)})})}},617:function(n,e,t){t(4),n.exports=function(n){return t.e(0x5b921fe6e030,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(681)})})}},608:function(n,e,t){t(4),n.exports=function(n){return t.e(55702396619907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(682)})})}},618:function(n,e,t){t(4),n.exports=function(n){return t.e(93686858590261,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(683)})})}},619:function(n,e,t){t(4),n.exports=function(n){return t.e(0x9cc4cd23ae59,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(684)})})}},585:function(n,e,t){t(4),n.exports=function(n){return t.e(79611799117203,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(449)})})}},315:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(1),a=(o(r),t(447)),u=o(a),s=t(198),i=o(s),c=t(316),l=o(c),p=void 0,f={},d={},m={},h={},g={},y=[],x=[],v={},j="",b=[],k={},C=function(n){return n&&n.default||n},N=void 0,w=!0,R=[],_={},P={},E=5;N=t(450)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){b=b.filter(function(e){return e!==n}),N.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){N.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){N.onPostLoadPageResources(n)});var S=function(n,e){return k[n]>k[e]?1:k[n]<k[e]?-1:0},O=function(n,e){return v[n]>v[e]?1:v[n]<v[e]?-1:0},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){t(null,h[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){h[e]=o,R.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),R=R.slice(-E),t(n,o)})}},T=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):P[e]?n.nextTick(function(){t(P[e])}):L(e,function(n,o){if(n)t(n);else{var r=C(o());g[e]=r,t(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=R.find(function(n){return n.succeeded});return!!e},U=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},D=1,M={empty:function(){x=[],v={},k={},b=[],y=[],j=""},addPagesArray:function(n){y=n,j="",p=(0,u.default)(n,j)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return x.pop()},enqueue:function(n){var e=(0,l.default)(n,j);if(!y.some(function(n){return n.path===e}))return!1;var t=1/D;D+=1,v[e]?v[e]+=1:v[e]=1,M.has(e)||x.unshift(e),x.sort(O);var o=p(e);return o.jsonName&&(k[o.jsonName]?k[o.jsonName]+=1+t:k[o.jsonName]=1+t,b.indexOf(o.jsonName)!==-1||h[o.jsonName]||b.unshift(o.jsonName)),o.componentChunkName&&(k[o.componentChunkName]?k[o.componentChunkName]+=1+t:k[o.componentChunkName]=1+t,b.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||b.unshift(o.componentChunkName)),b.sort(S),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:k}},getPages:function(){return{pathArray:x,pathCount:v}},getPage:function(n){return p(n)},has:function(n){return x.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),w=!1;if(_[e])return U(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return U(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,s=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return T(o.componentChunkName,function(n,e){n&&U(o.path,"Loading the component for "+o.path+" failed"),r=e,s()}),T(o.jsonName,function(n,e){n&&U(o.path,"Loading the JSON for "+o.path+" failed"),a=e,s()}),void(o.layoutComponentChunkName&&T(o.layout,function(n,e){n&&U(o.path,"Loading the Layout for "+o.path+" failed"),u=e,s()}))},peek:function(n){return x.slice(-1)[0]},length:function(){return x.length},indexOf:function(n){return x.length-x.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,t(13))},685:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"im-not-a-witch.json",path:"/i'm-not-a-witch"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"hey-luke-may-the-force-be-with-you.json",path:"/hey-luke!-may-the-force-be-with-you."},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"you-dont-like-your-job-you-dont-strike.json",path:"/you-don't-like-your-job-you-don't-strike"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"i-hate-yogurt-its-just-stuff-with-bits-in.json",path:"/i-hate-yogurt-its-just-stuff-with-bits-in"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"im-half-machine-im-a-monster.json",path:"/im-half-machine-im-a-monster."},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"you-can-crush-me-but-you-cant-crush-my-spirit.json",path:"/you-can-crush-me-but-you-can't-crush-my-spirit"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"cops-another-community-im-not-part-of.json",path:"/cops-another-community-i'm-not-part-of"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"inventore-veritatis-et-quasi-architecto-beatae-vitae-dicta-sunt-explicabo.json",path:"/inventore-veritatis-et-quasi-architecto-beatae-vitae-dicta-sunt-explicabo"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"architecto-beatae-vitae-dicta-sunt-explicabo.json",path:"/architecto-beatae-vitae-dicta-sunt-explicabo"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"excepteur-sint-occaecat-cupidatat-non-proident-sunt-in-culpa.json",path:"/excepteur-sint-occaecat-cupidatat-non-proident-sunt-in-culpa."},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"et-harum-quidem-rerum-facilis-est-et-expedita-distinctio.json",path:"/et-harum-quidem-rerum-facilis-est-et-expedita-distinctio"},{componentChunkName:"component---src-templates-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-templates-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"2.json",path:"/2"},{componentChunkName:"component---src-templates-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"3.json",path:"/3"},{componentChunkName:"component---src-templates-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-monty-python.json",path:"/tags/monty-python/"},{componentChunkName:"component---src-templates-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-lorem-ipsum.json",path:"/tags/lorem-ipsum/"},{componentChunkName:"component---src-templates-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-star-wars.json",path:"/tags/star-wars/"},{componentChunkName:"component---src-templates-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-placeholder.json",path:"/tags/placeholder/"},{componentChunkName:"component---src-templates-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-simpsons.json",path:"/tags/simpsons/"},{componentChunkName:"component---src-templates-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-doctor-who.json",path:"/tags/doctor-who/"},{componentChunkName:"component---src-templates-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-arrested-development.json",path:"/tags/arrested-development/"},{componentChunkName:"component---src-templates-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-futurama.json",path:"/tags/futurama/"},{componentChunkName:"component---src-templates-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-dexter.json",path:"/tags/dexter/"},{componentChunkName:"component---src-pages-about-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-search-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"search.json",path:"/search/"},{componentChunkName:"component---src-pages-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags.json",path:"/tags/"}]},450:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(239),u=t(1),s=o(u),i=t(414),c=o(i),l=t(211),p=t(630),f=t(574),d=o(f),m=t(276),h=t(448),g=o(h),y=t(198),x=o(y),v=t(685),j=o(v),b=t(686),k=o(b),C=t(446),N=o(C),w=t(445),R=o(w),_=t(315),P=o(_);t(487),window.___history=g.default,window.___emitter=x.default,P.default.addPagesArray(j.default),P.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=k.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),S=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};S(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){S(n.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(451);var o=function(n){function e(n){n.page.path===P.default.getPage(o).path&&(x.default.off("onPostLoadPageResources",e),clearTimeout(u),window.___history.push(t))}var t=(0,m.createLocation)(n,null,null,g.default.location),o=t.pathname,r=E[o];r&&(o=r.toPath);var a=window.location;if(a.pathname!==t.pathname||a.search!==t.search||a.hash!==t.hash){var u=setTimeout(function(){x.default.off("onPostLoadPageResources",e),x.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);P.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(t)):x.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return s.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(N.default,r({page:!0},o)):(0,u.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},686:function(n,e){n.exports=[]},451:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(198),a=o(r),u="/";u="/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},316:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},574:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},4:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var s=!1,i=!0,c=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void c(!0):(r(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},620:function(n,e,t){"use strict";var o=t(23);n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,r=n.target;r.parentNode;r=r.parentNode)if("A"===r.nodeName){t=r;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var a=document.createElement("a");a.href=t.href;var u=document.createElement("a");if(u.href=window.location.href,a.host!==u.host)return!0;var s=new RegExp("^"+u.host+(0,o.withPrefix)("/"));return!s.test(""+a.host+a.pathname)||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},621:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(23),a=t(620),u=o(a);e.onClientEntry=function(){(0,u.default)(window,function(n){(0,r.navigateTo)(n)})}},622:function(n,e,t){"use strict";e.onRouteUpdate=function(){"function"==typeof FB&&window.FB.AppEvents.logPageView()}},623:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;if("function"==typeof ga){if(e&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(n){return n.test(e.pathname)}))return;window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview")}}},624:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(318),a=o(r),u=t(848),s=o(u),i={color:"#29d"};e.onClientEntry=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,a.default)({},i,e);window.___emitter.on("onDelayedLoadPageResources",function(){s.default.configure(t),s.default.start()}),window.___emitter.on("onPostLoadPageResources",function(){s.default.done()});var o="\n    #nprogress {\n     pointer-events: none;\n    }\n    #nprogress .bar {\n      background: "+t.color+";\n      position: fixed;\n      z-index: 1031;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 2px;\n    }\n    #nprogress .peg {\n      display: block;\n      position: absolute;\n      right: 0px;\n      width: 100px;\n      height: 100%;\n      box-shadow: 0 0 10px "+t.color+", 0 0 5px "+t.color+";\n      opacity: 1.0;\n      -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n      transform: rotate(3deg) translate(0px, -4px);\n    }\n    #nprogress .spinner {\n      display: block;\n      position: fixed;\n      z-index: 1031;\n      top: 15px;\n      right: 15px;\n    }\n    #nprogress .spinner-icon {\n      width: 18px;\n      height: 18px;\n      box-sizing: border-box;\n      border: solid 2px transparent;\n      border-top-color: "+t.color+";\n      border-left-color: "+t.color+";\n      border-radius: 50%;\n      -webkit-animation: nprogress-spinner 400ms linear infinite;\n      animation: nprogress-spinner 400ms linear infinite;\n    }\n    .nprogress-custom-parent {\n      overflow: hidden;\n      position: relative;\n    }\n    .nprogress-custom-parent #nprogress .spinner,\n    .nprogress-custom-parent #nprogress .bar {\n      position: absolute;\n    }\n    @-webkit-keyframes nprogress-spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n      }\n    }\n    @keyframes nprogress-spinner {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n",r=document.createElement("style");r.id="nprogress-styles",r.innerHTML=o,document.head.appendChild(r)}},584:function(n,e,t){t(4),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(625)})})}},626:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},846:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},848:function(n,e,t){var o,r;!function(a,u){o=u,r="function"==typeof o?o.call(e,t,e,n):o,!(void 0!==r&&(n.exports=r))}(this,function(){function n(n,e,t){return n<e?e:n>t?t:n}function e(n){return 100*(-1+n)}function t(n,t,o){var r;return r="translate3d"===c.positionUsing?{transform:"translate3d("+e(n)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+e(n)+"%,0)"
}:{"margin-left":e(n)+"%"},r.transition="all "+t+"ms "+o,r}function o(n,e){var t="string"==typeof n?n:u(n);return t.indexOf(" "+e+" ")>=0}function r(n,e){var t=u(n),r=t+e;o(t,e)||(n.className=r.substring(1))}function a(n,e){var t,r=u(n);o(n,e)&&(t=r.replace(" "+e+" "," "),n.className=t.substring(1,t.length-1))}function u(n){return(" "+(n.className||"")+" ").replace(/\s+/gi," ")}function s(n){n&&n.parentNode&&n.parentNode.removeChild(n)}var i={};i.version="0.2.0";var c=i.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};i.configure=function(n){var e,t;for(e in n)t=n[e],void 0!==t&&n.hasOwnProperty(e)&&(c[e]=t);return this},i.status=null,i.set=function(e){var o=i.isStarted();e=n(e,c.minimum,1),i.status=1===e?null:e;var r=i.render(!o),a=r.querySelector(c.barSelector),u=c.speed,s=c.easing;return r.offsetWidth,l(function(n){""===c.positionUsing&&(c.positionUsing=i.getPositioningCSS()),p(a,t(e,u,s)),1===e?(p(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){p(r,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){i.remove(),n()},u)},u)):setTimeout(n,u)}),this},i.isStarted=function(){return"number"==typeof i.status},i.start=function(){i.status||i.set(0);var n=function(){setTimeout(function(){i.status&&(i.trickle(),n())},c.trickleSpeed)};return c.trickle&&n(),this},i.done=function(n){return n||i.status?i.inc(.3+.5*Math.random()).set(1):this},i.inc=function(e){var t=i.status;return t?("number"!=typeof e&&(e=(1-t)*n(Math.random()*t,.1,.95)),t=n(t+e,0,.994),i.set(t)):i.start()},i.trickle=function(){return i.inc(Math.random()*c.trickleRate)},function(){var n=0,e=0;i.promise=function(t){return t&&"resolved"!==t.state()?(0===e&&i.start(),n++,e++,t.always(function(){e--,0===e?(n=0,i.done()):i.set((n-e)/n)}),this):this}}(),i.render=function(n){if(i.isRendered())return document.getElementById("nprogress");r(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=c.template;var o,a=t.querySelector(c.barSelector),u=n?"-100":e(i.status||0),l=document.querySelector(c.parent);return p(a,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),c.showSpinner||(o=t.querySelector(c.spinnerSelector),o&&s(o)),l!=document.body&&r(l,"nprogress-custom-parent"),l.appendChild(t),t},i.remove=function(){a(document.documentElement,"nprogress-busy"),a(document.querySelector(c.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&s(n)},i.isRendered=function(){return!!document.getElementById("nprogress")},i.getPositioningCSS=function(){var n=document.body.style,e="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";return e+"Perspective"in n?"translate3d":e+"Transform"in n?"translate":"margin"};var l=function(){function n(){var t=e.shift();t&&t(n)}var e=[];return function(t){e.push(t),1==e.length&&n()}}(),p=function(){function n(n){return n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(n,e){return e.toUpperCase()})}function e(n){var e=document.body.style;if(n in e)return n;for(var t,o=r.length,a=n.charAt(0).toUpperCase()+n.slice(1);o--;)if(t=r[o]+a,t in e)return t;return n}function t(t){return t=n(t),a[t]||(a[t]=e(t))}function o(n,e,o){e=t(e),n.style[e]=o}var r=["Webkit","O","Moz","ms"],a={};return function(n,e){var t,r,a=arguments;if(2==a.length)for(t in e)r=e[t],void 0!==r&&e.hasOwnProperty(t)&&o(n,t,r);else o(n,a[1],a[2])}}();return i})},974:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},586:function(n,e,t){t(4),n.exports=function(n){return t.e(0x83323ebd9d39,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(466)})})}},587:function(n,e,t){t(4),n.exports=function(n){return t.e(71337070933838,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(467)})})}},588:function(n,e,t){t(4),n.exports=function(n){return t.e(36530248567819,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(468)})})}},589:function(n,e,t){t(4),n.exports=function(n){return t.e(0xb7522136ec57,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(469)})})}},590:function(n,e,t){t(4),n.exports=function(n){return t.e(0xc1d74b0851a0,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(470)})})}},591:function(n,e,t){t(4),n.exports=function(n){return t.e(0x5e2ecaeed82a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(471)})})}}});
//# sourceMappingURL=app-34b06526365564c3f334.js.map