(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{3798:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return n(887)}])},887:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return c},default:function(){return s}});var r=n(5893),i=n(2962),a=n(3726),o=n.n(a),c=!0;function s(t){var e=t.blog,n=o()(e.body).split("\u3002")[0];return(0,r.jsxs)("main",{children:[(0,r.jsx)(i.PB,{title:"".concat(e.title),description:n}),(0,r.jsx)(i.lX,{openGraph:{type:"website",title:e.title,description:n,url:"https://mt2m10.github.io/posts/".concat(e.id)}}),(0,r.jsx)("h1",{children:e.title}),(0,r.jsx)("small",{children:(0,r.jsx)("time",{datestring:e.publishedAt,children:e.publishedAt})}),(0,r.jsx)("article",{dangerouslySetInnerHTML:{__html:"".concat(e.body)}})]})}},3726:function(t,e,n){"use strict";var r;!function(i){if("function"!==typeof a){var a=function(t){return t};a.nonNative=!0}const o=a("plaintext"),c=a("html"),s=a("comment"),u=/<(\w*)>/g,f=/<\/?([^\s\/>]+)/;function l(t,e,n){return h(t=t||"",_(e=e||[],n=n||""))}function _(t,e){return{allowable_tags:t=function(t){let e=new Set;if("string"===typeof t){let n;for(;n=u.exec(t);)e.add(n[1])}else a.nonNative||"function"!==typeof t[a.iterator]?"function"===typeof t.forEach&&t.forEach(e.add,e):e=new Set(t);return e}(t),tag_replacement:e,state:o,tag_buffer:"",depth:0,in_quote_char:""}}function h(t,e){if("string"!=typeof t)throw new TypeError("'html' parameter must be a string");let n=e.allowable_tags,r=e.tag_replacement,i=e.state,a=e.tag_buffer,u=e.depth,f=e.in_quote_char,l="";for(let _=0,h=t.length;_<h;_++){let e=t[_];if(i===o)if("<"===e)i=c,a+=e;else l+=e;else if(i===c)switch(e){case"<":if(f)break;u++;break;case">":if(f)break;if(u){u--;break}f="",i=o,a+=">",n.has(p(a))?l+=a:l+=r,a="";break;case'"':case"'":f=e===f?"":f||e,a+=e;break;case"-":"<!-"===a&&(i=s),a+=e;break;case" ":case"\n":if("<"===a){i=o,l+="< ",a="";break}a+=e;break;default:a+=e}else if(i===s)if(">"===e)"--"==a.slice(-2)&&(i=o),a="";else a+=e}return e.state=i,e.tag_buffer=a,e.depth=u,e.in_quote_char=f,l}function p(t){let e=f.exec(t);return e?e[1].toLowerCase():null}l.init_streaming_mode=function(t,e){let n=_(t=t||[],e=e||"");return function(t){return h(t||"",n)}},void 0===(r=function(){return l}.call(e,n,e,t))||(t.exports=r)}()}},function(t){t.O(0,[774,888,179],(function(){return e=3798,t(t.s=e);var e}));var e=t.O();_N_E=e}]);