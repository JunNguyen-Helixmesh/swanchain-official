!function(e){function t(t){for(var o,a,s=t[0],c=t[1],l=t[2],u=0,h=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(d&&d(t);h.length;)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},i={app:0},r=[];function s(t){var n;return(o[t]||(n=o[t]={i:t,l:!1,exports:{}},e[t].call(n.exports,n,n.exports,s),n.l=!0,n)).exports}s.e=function(e){var t,n,o,r,c,l=[],u=(a[e]?l.push(a[e]):0!==a[e]&&{"chunk-1b363ea3":1,"chunk-3678076f":1,"chunk-3436df44":1,"chunk-581afb6c":1,"chunk-8aede50a":1,"chunk-197a911d":1,"chunk-493bbee4":1,"chunk-5793e4e8":1,"chunk-49c82a96":1,"chunk-63c4220a":1,"chunk-f8eb0b40":1,"chunk-04a0371f":1,"chunk-6db256eb":1}[e]&&l.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-1b363ea3":"6ec439a8","chunk-3678076f":"2986826c","chunk-6c5f5892":"31d6cfe0","chunk-659ceabe":"31d6cfe0","chunk-2d0d4442":"31d6cfe0","chunk-2d22d612":"31d6cfe0","chunk-3436df44":"ae43ed73","chunk-581afb6c":"6edde1d4","chunk-8aede50a":"19780668","chunk-929f085c":"31d6cfe0","chunk-197a911d":"a46d59df","chunk-493bbee4":"242359bc","chunk-5793e4e8":"36184cfb","chunk-49c82a96":"ac1ec0b6","chunk-63c4220a":"ef6d10e4","chunk-f8eb0b40":"348ad33e","chunk-04a0371f":"cb9f88dc","chunk-6db256eb":"01d9f7ab"}[e]+".css",i=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=(u=r[c]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===i))return t()}var u,d=document.getElementsByTagName("style");for(c=0;c<d.length;c++)if((l=(u=d[c]).getAttribute("data-href"))===o||l===i)return t();var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){t=t&&t.target&&t.target.src||i;var o=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=t,delete a[e],h.parentNode.removeChild(h),n(o)},h.href=i,document.getElementsByTagName("head")[0].appendChild(h)})).then((function(){a[e]=0}))),i[e]);return 0!==u&&(u?l.push(u[2]):(c=new Promise((function(t,n){u=i[e]=[t,n]})),l.push(u[2]=c),(t=document.createElement("script")).charset="utf-8",t.timeout=120,s.nc&&t.setAttribute("nonce",s.nc),t.src=s.p+"js/"+({}[c=e]||c)+"."+{"chunk-1b363ea3":"814bc6df","chunk-3678076f":"55f5a3db","chunk-6c5f5892":"084ce905","chunk-659ceabe":"ca394fe0","chunk-2d0d4442":"3a86f90d","chunk-2d22d612":"1f54c24f","chunk-3436df44":"8a9f088a","chunk-581afb6c":"cf314e8e","chunk-8aede50a":"03034b0f","chunk-929f085c":"514cbb68","chunk-197a911d":"024fe709","chunk-493bbee4":"38dd9f2d","chunk-5793e4e8":"e8fb9d2e","chunk-49c82a96":"bc99f5d3","chunk-63c4220a":"c22a5548","chunk-f8eb0b40":"9ba2e419","chunk-04a0371f":"2051e7b9","chunk-6db256eb":"90f71247"}[c]+".js",n=new Error,o=function(o){t.onerror=t.onload=null,clearTimeout(r);var a,s=i[e];0!==s&&(s&&(a=o&&("load"===o.type?"missing":o.type),o=o&&o.target&&o.target.src,n.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",n.name="ChunkLoadError",n.type=a,n.request=o,s[1](n)),i[e]=void 0)},r=setTimeout((function(){o({type:"timeout",target:t})}),12e4),t.onerror=t.onload=o,document.head.appendChild(t))),Promise.all(l)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw e};var c=(l=window.webpackJsonp=window.webpackJsonp||[]).push.bind(l);l.push=t;for(var l=l.slice(),u=0;u<l.length;u++)t(l[u]);var d=c;r.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){n("db4d"),e.exports=n("56d7")},"090b":function(e,t,n){"use strict";n.r(t),t.default={menu:{Ecosystem:"Ecosystem",Bridge:"Bridge",Developers:"Developers",Community:"Community","About-Us":"About Us",Blog:"Blog",Support:"Support",login:"Login",Company:"Company",TermsOfUse:"Terms of Use",PrivacyPolicy:"Privacy Policy"},main:{banner:{title:"The AI Computing Chain",describe:"Swan Chain is an Ethereum layer 2 AI computing blockchain built on OP Stack, helping Web3 and AI projects to integrate storage, computing, CDN, and payment into one suite."},clients:{"title-1":"Trusted by Cients","title-2":"Expand with Partners"}},about:{our_team_title:"Our team",our_team_desc:"Starting from 2018, Swan team has been dedicated to decentralized storage and computing solutions. Swan services are enhanced by edge computing, IPFS/Filecoin storage and decentralized ledger technologies. Our products are used by universities, VR/AR and other high performance computing companies. With Swan you could perform computing tasks at your nearest location at the lowest cost. We are building the largest fog computing network for metaverse. Since the start of Swan project, the team has received several development grants from Filecoin foundation and onboard community developers and companies to the Filecoin network.",our_team_desc01:" the founder of Swan, graduated from Fudan University in 2007 with a degree in Electrical Engineering and received his master's degree in Canada. He has more than 10 years of R&D and design experience in IBM, SAP, Autodesk and Expedia. Since he came across cloud computing ten years ago and Ethereum five years ago, he has been fascinated by the future of combining cloud computing and blockchain.  He is also the founder of Montreal IT association. After the filecoin mainnet launch, Charles Cao founded Swan team for building the ecosystem on top of Filecoin storage network.",our_work_title:"Our Work Within Filecoin",our_work_desc:"Swan is also an active community member in the IPFS/Filecoin ecosystem. We work closely with the Filecoin Foundation and have participated in many Filecoin events, such as Slingshot, Filecoin Plus Day, Space Race, etc. We have won 2* community champion during the orbit space race in 2020. We also hold several positions within the Filecoin community, such as MinerX & MinerX2 Fellow, Filecoin Global Ambassador, and a North American Notary.",module_1_title:"Build Web3 <br />Together with Us",module_1_desc:"Swan has a global team of dedicated, world-class talents who are committed to building the best Web3 infrastructure",module_1_desc01:"We are constantly looking for talents to join us to make Web3 better. Check below for current openings",module_1_btn:"Job Openings",about_Swan_title:"About Swan",about_Swan_desc:"At Swan, our mission is to build a powerful and easy-to-use storage and computing infrastructure layer for the Web3. Our team members are in Canada, the US, and China.",about_Swan_desc01:"Swan works closely with organizations such as Chainlink and Filecoin Foundation. We are honored to be an active contributor to the community and serve as a leading member of the FVM early builder and RETMKT builders program. Swan is also the leading Filecoin North America Notary, and an Orbit Spaceship Ambassador.",about_meet_title:"Meet the Founder",about_meet_desc:"Charles Cao has over 15 years working experience in information technology and fintech industry. His extensive expertise contributes to the team growth in crypto mining technologies and public relationships. Charles Cao is the ambassador of Filecoin, mentor of Techstars accelerator, and Filecoin community champion. He is working closely with hardware providers, government, Web3 blockchain communities, analysts, and investors in the industry.",about_meet_desc_1:"Swan works closely with organizations such as Chainlink and Filecoin Foundation. We are honored to be an active contributor to the community and serve as a leading member of the FVM early builder and RETMKT builders program. Swan is also the leading Filecoin North America Notary, and an Orbit Spaceship Ambassador."},dashboard:{join_today_title:"Accelerating",join_today_title01:"STORAGE AND COMPUTING ON WEB3",join_today_title02:"view product demo",join_today_btn:"Learn More",join_today_btn01:"Dev Docs",join_today_btn02:"Get Started",join_today_btn03:"Docs",join_today_tips:"MCS is sill under beta development and available on Polygon Mumbai TestNet",benefits_list:"Why Use the Swan Platform",benefits_list_p1:"Large data transfer",benefits_list_p2:"Fast data storage and distribution",benefits_list_p3:"Complete storage provider reputation evaluation system",benefits_list_p4:"Multi-coin storage solution, billing report support",benefits_list_p5:"S3 compatible SDK, First Choice for global users",benefits_list_p6:"Auto Bidding system，automaket maker",features_title:"Features",features_list_p1:"Store large quantities of data",features_list_p2:"Send encrypted files",features_list_p3:"Storage Provider Ratings",features_list_p4:"Supports multiple payment methods.(NBAl,FIL)",features_list_p5:"Syncs with Multi-Currency wallet",features_list_p6:"Compatible with machine learning programs",features_list_p7:"Provided network statistics for price and storage comparisons",features_list_p8:"API Access",person_p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."',person_p1:"Charles Cao",person_p2:"CEO of Nebula AI",person_title:"Funded By",person_title_desc01:"Universities/ Research Institution",person_title_desc02:" VR/AR and other high performance computing companies",ourserve_h1:"Welcome to Swan",ourserve_p:"Swan is a leading provider of cross-chain cloud computing solutions. Its suite of tools revolutionizes how developers access resources across multiple chains. ",ourserve_title:"Suite of tools for Web3 Storage and Computing",ourserve_title1:"FS3 - Amazon S3 Gateway",ourserve_content1:"FS3 is a Filecoin network gateway for Enterprise Amazon S3 users. It makes migrating large-scale data from S3 to Filecoin network possible without redesigning the system.",ourserve_content1_1:"FS3 enables Amazon S3 users to be entitled to decentralized storage with a minimum of cost, effort, and resources.",ourserve_title2:"Swan Provider & Client For Filecoin",ourserve_content2:"Swan Provider makes it easy for miners to manage tasks, import deals, and synchronize deals with Swan platform.",ourserve_content2_1:"The Swan Client makes it easy for Filecoin users to send deals. It supports CAR file generation, deal proposing, deal creation, and automatic deal sending.",ourserve_title3:"Global Access",ourserve_content3:"100+ access points",ourserve_content3_1:"700 service nodes",ourserve_content3_2:"Cross continent, multi regions support",ourserve_title4:"Compatible with machine learning programs",ourserve_content4:"",ourserve_title5:"Swan Platform",ourserve_content5:"Swan platform helps Filecoin users find reputable storage providers and send online/offline deals with ease. ",ourserve_content5_1:"It features automatic deal making, provider reputation ranking, and task management - all under one package.",ourserve_title6:"Multichain Storage",ourserve_content6:"Multichain Storage is a complete solution that integrates decentralized storage with your existing projects across multiple blockchains.",ourserve_content6_1:"MCS helps to decentralize and democratize the way data is stored on the web. It enables the integration of stablecoin payment, oracle technology and smart contract in your Web3 projects.",ourserve_title7:"Supports multiple payment methods",ourserve_content7:"Users can pay for storage using multiple different cryptocurrencies, such as NBAl and FIL.",ourserve_title8:"API Access",ourserve_content8:"User has access to a list of multipie different APls.",join_title:"Join Swan's Global Community",content_us_title:"Contact Us",content_us_send:"SEND",content_us_h4:"Swan is headquartered in Montreal and has partnerships across the US, Canada, and China.",faq_title:"FAQ",Stay_Informed:"Stay Informed",Stay_Informed_desc:"Sign up to receive the latest news about our services, current projects, portfolio companies, and upcoming events. ",hassle_title:"Turn-key solutions for Filecoin Users and Storage Providers",hassle_btn:"Start Building with Swan",hassle_btn01:"Access Swan Platform",hassle_module_title1:"Data storage on multiple blockchains",hassle_module_title2:"Automated Filecoin Deal Maker",hassle_module_title3:"Amazon S3 Filecoin Gateway",hassle_module_title4:"Petabyte Scale Data Transportation",hassle_module_content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",hassle_module_content1:"Swan offers cutting-edge blockchain storage solutions  for decentralized data storage needs.",hassle_module_content2:"Swan reduces queueing time by automatically matching providers and users in need.",hassle_module_content3:"Swan offers an alternative to the current mainstream cloud storage that bridges Filecoin and S3.",hassle_module_content4:"Swan migrates petabytes of data while ensuring efficiency and cost-effectiveness.",hassle_Swan_title:"Swan in the news",hassle_Swan_cont1:"Swan is the highest scoring Filecoin+ Notary!",hassle_Swan_cont2:"Swan officially joins the Filecoin Virtual Machine Early Builders Program",hassle_Swan_cont3:"Swan Client v 0.1.0 rc1 is live now!",hassle_Swan_cont4:"Swan's Multichain Storage Competition was in full swing!",hassle_Swan_btn:"Read More"},careers:{module_title_left:"We are building the foundation",module_title_right:"that powers tomorrow",module_careers_desc:"Swan is supported by a global team of dedicated, world-class talents who are comitted to building the best web3 infrastructure for edge storage and computing.",module_1_btn:"See Current Openings",current_openings_title:"Current Openings",hassle_Swan_title:"Walk with the Pioneers",hassle_module_content1:"We are constantly challanging ourselves and hold ourselves to the highest standards.",hassle_module_content2:"Experience hyper growth with access to the brightest minds in the field and industry.",hassle_module_content3:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",hassle_module_content4:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",filecoin_netowork:"Proud Partner of the Filecoin Network",filecoin_netowork_desc:"Swan is an active community member in the IPFS/Filecoin ecosystem. We work closely with the Filecoin Foundation and have participated in many Filecoin events, such as Slingshot, Filecoin Plus Day, Space Race, etc. We are a two-time community champion during the orbit space race in 2020. We also hold several positions within the Filecoin community, such as MinerX & MinerX2 Fellow, ",filecoin_netowork_desc_span01:"Filecoin Global Ambassador",filecoin_netowork_desc_span02:", and ",filecoin_netowork_desc_span03:"North American Notary"},footer:{"Privacy-Policy":"Privacy Policy",copy:"© 2023 SWAN.ALL RIGHTS RESERVED.","Follow-Us":"Follow Us"},public:{"Learn-More":"Learn More","Contact-Us":"Contact Us","Get-Started":"Get Started","Reserve-Now":"Reserve Now"}}},4790:function(e,t,n){var o={"./en.js":"090b","./zh-cn.js":"5eea"};function a(e){return e=i(e),n(e)}function i(e){if(n.o(o,e))return o[e];throw(e=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",e}a.keys=function(){return Object.keys(o)},a.resolve=i,(e.exports=a).id="4790"},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("f2bf");const a={class:"landing"};t={name:"app"};var i=(n("dfe1"),n("b9a6")),r=(i=n.n(i)()(t,[["render",function(e,t,n,i,r,s){var c=Object(o.resolveComponent)("router-view");return Object(o.openBlock)(),Object(o.createElementBlock)("div",a,[Object(o.createVNode)(c)])}]]),t=n("6605"),n("14d9"),[{path:"/",component:()=>Promise.all([n.e("chunk-6c5f5892"),n.e("chunk-659ceabe"),n.e("chunk-2d0d4442"),n.e("chunk-2d22d612"),n.e("chunk-3436df44")]).then(n.bind(null,"57da")),children:[{path:"/",name:"dashboard",component:()=>Promise.all([n.e("chunk-6c5f5892"),n.e("chunk-659ceabe"),n.e("chunk-929f085c"),n.e("chunk-2d0d4442"),n.e("chunk-5793e4e8")]).then(n.bind(null,"50f9")),meta:{keepAlive:!0,title:"Swan Chain | The Layer 2 Blockchain for AI Computing"}},{path:"/about-us",name:"aboutUs",component:()=>Promise.all([n.e("chunk-6c5f5892"),n.e("chunk-659ceabe"),n.e("chunk-2d0d4442"),n.e("chunk-581afb6c")]).then(n.bind(null,"d8a6")),meta:{keepAlive:!0,title:"Swan Chain | About Us"}},{path:"/faucet",name:"faucet",component:()=>Promise.all([n.e("chunk-6c5f5892"),n.e("chunk-659ceabe"),n.e("chunk-929f085c"),n.e("chunk-2d22d612"),n.e("chunk-63c4220a")]).then(n.bind(null,"567f")),meta:{keepAlive:!0,title:"Faucet"}},{path:"/block-explorer",name:"blockExplorer",component:()=>Promise.all([n.e("chunk-6c5f5892"),n.e("chunk-659ceabe"),n.e("chunk-929f085c"),n.e("chunk-2d22d612"),n.e("chunk-f8eb0b40")]).then(n.bind(null,"21ec")),meta:{keepAlive:!0,title:"Block Explorer"}},{path:"/event",name:"event",component:()=>Promise.all([n.e("chunk-6c5f5892"),n.e("chunk-659ceabe"),n.e("chunk-2d0d4442"),n.e("chunk-8aede50a")]).then(n.bind(null,"4c60")),meta:{keepAlive:!0,title:"Event"}},{path:"/help-center",name:"helpCenter",component:()=>Promise.all([n.e("chunk-6c5f5892"),n.e("chunk-929f085c"),n.e("chunk-2d22d612"),n.e("chunk-04a0371f")]).then(n.bind(null,"6e42")),meta:{keepAlive:!0,title:"Help Center"}},{path:"/bridge",name:"bridge",component:()=>Promise.all([n.e("chunk-6c5f5892"),n.e("chunk-659ceabe"),n.e("chunk-929f085c"),n.e("chunk-2d22d612"),n.e("chunk-49c82a96")]).then(n.bind(null,"05f3")),meta:{keepAlive:!0,title:"Bridge"}},{path:"/blog",name:"blog",component:()=>Promise.all([n.e("chunk-6c5f5892"),n.e("chunk-659ceabe"),n.e("chunk-929f085c"),n.e("chunk-2d0d4442"),n.e("chunk-197a911d")]).then(n.bind(null,"138b")),meta:{keepAlive:!0,title:"Blog"}},{path:"/ecosystem",name:"ecosystem",component:()=>Promise.all([n.e("chunk-6c5f5892"),n.e("chunk-659ceabe"),n.e("chunk-929f085c"),n.e("chunk-2d0d4442"),n.e("chunk-493bbee4")]).then(n.bind(null,"6a7b")),meta:{keepAlive:!0,title:"Ecosystem"}},{path:"/privacy-policy",name:"privacy-policy",component:()=>n.e("chunk-1b363ea3").then(n.bind(null,"6e49")),meta:{keepAlive:!0,title:"Swan Chain | Privacy Policy"}},{path:"/terms",name:"terms",component:()=>n.e("chunk-6db256eb").then(n.bind(null,"f6d8")),meta:{keepAlive:!0,title:"Swan Chain | Terms of Use"}}]},{path:"/:pathMatch(.*)*",redirect:"/"}]),s=(t=Object(t.a)({history:Object(t.b)("/"),routes:r}),r=n("5502"),Object(r.a)({state:{},mutations:{},actions:{},modules:{}})),c=(r=n("d899"),r=Object(r.createI18n)({locale:"en",fallbackLocale:"en",messages:function(){const e=n("4790"),t={};return e.keys().forEach(n=>{var o=n.match(/([A-Za-z0-9-_]+)\./i);o&&1<o.length&&(o=o[1],t[o]=e(n).default)}),t}(),silentTranslationWarn:!0,globalInjection:!0,silentFallbackWarn:!0,legacy:!1}),n("7437"),n("50b4"),n("bc3a")),l=n.n(c),u=n("3ef4"),d=n("90b1");let h,m=0;async function p(e,t,n,o){l.a.defaults.headers.common.Authorization="Bearer "+s.state.accessToken,l.a.defaults.headers.common["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8";try{let o;switch(t){case"post":return(o=await l.a.post(e,n)).data;case"put":return(o=await l.a.put(e,n)).data;case"get":return(o=await l.a.get(e)).data;case"delete":return(o=await l.a.delete(e,{data:n})).data}}catch(o){return f("error",o.response?o.response.data.detail||o.response.data.message:"Request failed. Please try again later!"),o.response?(401===o.response.status&&g(),o.response.data):o}}async function f(e,t){Object(u.a)({showClose:!0,message:t,type:e})}async function g(){s.state.accessToken&&await p("/api/v1/logout","post",{}),s.dispatch("setAccessToken",""),s.dispatch("setEmailAddress","")}c={sendRequest:p,timeout:async function(e){return new Promise(t=>setTimeout(t,e))},messageTip:f,copyContent:function(e,t){var n=document.createElement("textarea");n.id="txt",n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.opacity="0",n.value=e,document.body.appendChild(n),n.select();try{var o=document.execCommand("copy");if(o)return f("success",t),!0}catch(e){}finally{document.body.removeChild(n)}return!1},goLink:function(e){e&&window.open(e)},contactUsMethod:function(){s.dispatch("setContactUs",!0)},signOut:g,showLoading:()=>{0===m&&(h=d.a.service({lock:!0,text:"loading...",background:"rgba(255, 255, 255, 0.6)"})),m+=1},hideLoading:()=>{m<=0||0===--m&&h.close()},categoryMethod:async function(e){let t=[];return e=await p(`/api/v1/product/default-variant-option-by-category/${e}/lang/${"zh-cn"===s.state.languageNB?26:36}?offset=0&limit=100`,"get"),e&&"success"===e.status?e.data||[]:t},hourMethod:function(e){return e?parseFloat(e/30/24).toFixed(4):"-"},NumFormat:function(e){var t;return"0"===String(e)?"0":e?(t=(e=String(e).split("."))[0].toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"),e[1]?t+"."+e[1]:t):"-"},calculateDiffTime:function(e){var t=31536e3<(e=Math.round(new Date/1e3)-e)?parseInt(e/86400/365):0,n=2592e3<e?parseInt(e/86400/30):0,o=parseInt(e/86400),a=parseInt(e%86400/3600),i=parseInt(e%3600/60);e=parseInt(e%60);return 0<t?`about ${t}${1<t?" years":" year"} ago`:0<n?n+` ${1<n?" months":" month"} ago`:0<o?o+` ${1<o?" days":" day"} ago`:0<a?a+` ${1<a?" hours":" hour"} ago`:0<i?i+` ${1<i?" minutes":" minute"} ago`:0<e?e+` ${1<e?" seconds":" second"} ago`:"-"},hiddAddress:function(e){return e?e.substring(0,5)+"..."+e.substring(e.length-5):"-"}};var _=(n("5cfb"),"");t.beforeEach((e,t,n)=>{e.meta.title&&(document.title=e.meta.title),e.path!=_&&(window.scrollTo(0,0),document.documentElement.scrollTop=0),_=e.path,n()}),i=Object(o.createApp)(i);i.config.globalProperties.$commonFun=c,i.use(r).use(s).use(t),i.mount("#app")},"5eea":function(e,t,n){"use strict";n.r(t),t.default={menu:{Ecosystem:"Ecosystem",Bridge:"Bridge",Developers:"Developers",Community:"Community","About-Us":"About Us",Blog:"Blog",Support:"Support",login:"Login",Company:"Company",TermsOfUse:"Terms of Use",PrivacyPolicy:"Privacy Policy"},main:{banner:{title:"The AI Computing Chain",describe:"Swan Chain is an Ethereum layer 2 AI computing blockchain built on OP Stack, helping Web3 and AI projects to integrate storage, computing, CDN, and payment into one suite."},clients:{"title-1":"Trusted by Cients","title-2":"Expand with Partners"}},about:{our_team_title:"Our team",our_team_desc:"Starting from 2018, Swan team has been dedicated to decentralized storage and computing solutions. Swan services are enhanced by edge computing, IPFS/Filecoin storage and decentralized ledger technologies. Our products are used by universities, VR/AR and other high performance computing companies. With Swan you could perform computing tasks at your nearest location at the lowest cost. We are building the largest fog computing network for metaverse. Since the start of Swan project, the team has received several development grants from Filecoin foundation and onboard community developers and companies to the Filecoin network.",our_team_desc01:" the founder of Swan, graduated from Fudan University in 2007 with a degree in Electrical Engineering and received his master's degree in Canada. He has more than 10 years of R&D and design experience in IBM, SAP, Autodesk and Expedia. Since he came across cloud computing ten years ago and Ethereum five years ago, he has been fascinated by the future of combining cloud computing and blockchain.  He is also the founder of Montreal IT association. After the filecoin mainnet launch, Charles Cao founded Swan team for building the ecosystem on top of Filecoin storage network.",our_work_title:"Our Work Within Filecoin",our_work_desc:"Swan is also an active community member in the IPFS/Filecoin ecosystem. We work closely with the Filecoin Foundation and have participated in many Filecoin events, such as Slingshot, Filecoin Plus Day, Space Race, etc. We have won 2* community champion during the orbit space race in 2020. We also hold several positions within the Filecoin community, such as MinerX & MinerX2 Fellow, Filecoin Global Ambassador, and a North American Notary.",module_1_title:"Build Web3 <br />Together with Us",module_1_desc:"Swan has a global team of dedicated, world-class talents who are committed to building the best Web3 infrastructure",module_1_desc01:"We are constantly looking for talents to join us to make Web3 better. Check below for current openings",module_1_btn:"Job Openings",about_Swan_title:"About Swan",about_Swan_desc:"At Swan, our mission is to build a powerful and easy-to-use storage and computing infrastructure layer for the Web3. Our team members are in Canada, the US, and China.",about_Swan_desc01:"Swan works closely with organizations such as Chainlink and Filecoin Foundation. We are honored to be an active contributor to the community and serve as a leading member of the FVM early builder and RETMKT builders program. Swan is also the leading Filecoin North America Notary, and an Orbit Spaceship Ambassador.",about_meet_title:"Meet the Founder",about_meet_desc:"Charles Cao has over 15 years working experience in information technology and fintech industry. His extensive expertise contributes to the team growth in crypto mining technologies and public relationships. Charles Cao is the ambassador of Filecoin, mentor of Techstars accelerator, and Filecoin community champion. He is working closely with hardware providers, government, Web3 blockchain communities, analysts, and investors in the industry.",about_meet_desc_1:"Swan works closely with organizations such as Chainlink and Filecoin Foundation. We are honored to be an active contributor to the community and serve as a leading member of the FVM early builder and RETMKT builders program. Swan is also the leading Filecoin North America Notary, and an Orbit Spaceship Ambassador."},dashboard:{join_today_title:"Accelerating",join_today_title01:"STORAGE AND COMPUTING ON WEB3",join_today_title02:"view product demo",join_today_btn:"Learn More",join_today_btn01:"Dev Docs",join_today_btn02:"Get Started",join_today_btn03:"Docs",join_today_tips:"MCS is sill under beta development and available on Polygon Mumbai TestNet",benefits_list:"Why Use the Swan Platform",benefits_list_p1:"Large data transfer",benefits_list_p2:"Fast data storage and distribution",benefits_list_p3:"Complete storage provider reputation evaluation system",benefits_list_p4:"Multi-coin storage solution, billing report support",benefits_list_p5:"S3 compatible SDK, First Choice for global users",benefits_list_p6:"Auto Bidding system，automaket maker",features_title:"Features",features_list_p1:"Store large quantities of data",features_list_p2:"Send encrypted files",features_list_p3:"Storage Provider Ratings",features_list_p4:"Supports multiple payment methods.(NBAl,FIL)",features_list_p5:"Syncs with Multi-Currency wallet",features_list_p6:"Compatible with machine learning programs",features_list_p7:"Provided network statistics for price and storage comparisons",features_list_p8:"API Access",person_p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."',person_p1:"Charles Cao",person_p2:"CEO of Nebula AI",person_title:"Funded By",person_title_desc01:"Universities/ Research Institution",person_title_desc02:" VR/AR and other high performance computing companies",ourserve_h1:"Welcome to Swan",ourserve_p:"Swan is a leading provider of cross-chain cloud computing solutions. Its suite of tools revolutionizes how developers access resources across multiple chains. ",ourserve_title:"Suite of tools for Web3 Storage and Computing",ourserve_title1:"FS3 - Amazon S3 Gateway",ourserve_content1:"FS3 is a Filecoin network gateway for Enterprise Amazon S3 users. It makes migrating large-scale data from S3 to Filecoin network possible without redesigning the system.",ourserve_content1_1:"FS3 enables Amazon S3 users to be entitled to decentralized storage with a minimum of cost, effort, and resources.",ourserve_title2:"Swan Provider & Client For Filecoin",ourserve_content2:"Swan Provider makes it easy for miners to manage tasks, import deals, and synchronize deals with Swan platform.",ourserve_content2_1:"The Swan Client makes it easy for Filecoin users to send deals. It supports CAR file generation, deal proposing, deal creation, and automatic deal sending.",ourserve_title3:"Global Access",ourserve_content3:"100+ access points",ourserve_content3_1:"700 service nodes",ourserve_content3_2:"Cross continent, multi regions support",ourserve_title4:"Compatible with machine learning programs",ourserve_content4:"",ourserve_title5:"Swan Platform",ourserve_content5:"Swan platform helps Filecoin users find reputable storage providers and send online/offline deals with ease. ",ourserve_content5_1:"It features automatic deal making, provider reputation ranking, and task management - all under one package.",ourserve_title6:"Multichain Storage",ourserve_content6:"Multichain Storage is a complete solution that integrates decentralized storage with your existing projects across multiple blockchains.",ourserve_content6_1:"MCS helps to decentralize and democratize the way data is stored on the web. It enables the integration of stablecoin payment, oracle technology and smart contract in your Web3 projects.",ourserve_title7:"Supports multiple payment methods",ourserve_content7:"Users can pay for storage using multiple different cryptocurrencies, such as NBAl and FIL.",ourserve_title8:"API Access",ourserve_content8:"User has access to a list of multipie different APls.",join_title:"Join Swan's Global Community",content_us_title:"Contact Us",content_us_send:"SEND",content_us_h4:"Swan is headquartered in Montreal and has partnerships across the US, Canada, and China.",faq_title:"FAQ",Stay_Informed:"Stay Informed",Stay_Informed_desc:"Sign up to receive the latest news about our services, current projects, portfolio companies, and upcoming events. ",hassle_title:"Turn-key solutions for Filecoin Users and Storage Providers",hassle_btn:"Start Building with Swan",hassle_btn01:"Access Swan Platform",hassle_module_title1:"Data storage on multiple blockchains",hassle_module_title2:"Automated Filecoin Deal Maker",hassle_module_title3:"Amazon S3 Filecoin Gateway",hassle_module_title4:"Petabyte Scale Data Transportation",hassle_module_content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",hassle_module_content1:"Swan offers cutting-edge blockchain storage solutions  for decentralized data storage needs.",hassle_module_content2:"Swan reduces queueing time by automatically matching providers and users in need.",hassle_module_content3:"Swan offers an alternative to the current mainstream cloud storage that bridges Filecoin and S3.",hassle_module_content4:"Swan migrates petabytes of data while ensuring efficiency and cost-effectiveness.",hassle_Swan_title:"Swan in the news",hassle_Swan_cont1:"Swan is the highest scoring Filecoin+ Notary!",hassle_Swan_cont2:"Swan officially joins the Filecoin Virtual Machine Early Builders Program",hassle_Swan_cont3:"Swan Client v 0.1.0 rc1 is live now!",hassle_Swan_cont4:"Swan's Multichain Storage Competition was in full swing!",hassle_Swan_btn:"Read More"},careers:{module_title_left:"We are building the foundation",module_title_right:"that powers tomorrow",module_careers_desc:"Swan is supported by a global team of dedicated, world-class talents who are comitted to building the best web3 infrastructure for edge storage and computing.",module_1_btn:"See Current Openings",current_openings_title:"Current Openings",hassle_Swan_title:"Walk with the Pioneers",hassle_module_content1:"We are constantly challanging ourselves and hold ourselves to the highest standards.",hassle_module_content2:"Experience hyper growth with access to the brightest minds in the field and industry.",hassle_module_content3:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",hassle_module_content4:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",filecoin_netowork:"Proud Partner of the Filecoin Network",filecoin_netowork_desc:"Swan is an active community member in the IPFS/Filecoin ecosystem. We work closely with the Filecoin Foundation and have participated in many Filecoin events, such as Slingshot, Filecoin Plus Day, Space Race, etc. We are a two-time community champion during the orbit space race in 2020. We also hold several positions within the Filecoin community, such as MinerX & MinerX2 Fellow, ",filecoin_netowork_desc_span01:"Filecoin Global Ambassador",filecoin_netowork_desc_span02:", and ",filecoin_netowork_desc_span03:"North American Notary"},footer:{"Privacy-Policy":"Privacy Policy",copy:"© 2023 SWAN.ALL RIGHTS RESERVED.","Follow-Us":"Follow Us"},public:{"Learn-More":"Learn More","Contact-Us":"Contact Us","Get-Started":"Get Started","Reserve-Now":"Reserve Now"}}},a8e0:function(e,t,n){},dfe1:function(e,t,n){"use strict";n("a8e0")}});