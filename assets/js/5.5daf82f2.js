(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("VERSION NOTE")]),a("p",[t._v("This is the documentation for Rollup Plugin Vue v4 and above. If you are upgrading from v2 or an earlier version, check out the "),a("router-link",{attrs:{to:"./migrating.html"}},[t._v("Migration Guide")]),t._v(". If you are using an older version, the old docs are "),a("a",{attrs:{href:"https://github.com/vuejs/rollup-plugin-vue/tree/2.2/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")],1)]),t._m(1),a("p",[a("code",[t._v("rollup-plugin-vue")]),t._v(" is a plugin for "),a("a",{attrs:{href:"https://rollupjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("rollup"),a("OutboundLink")],1),t._v(" that allows you to author Vue components in a format called "),a("a",{attrs:{href:"https://vue-loader.vuejs.org/spec.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Single-File Components (SFCs)"),a("OutboundLink")],1),t._v(":")]),t._m(2),t._m(3),a("ul",[a("li",[t._v("Feature parity with "),a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-loader"),a("OutboundLink")],1)]),t._m(4),t._m(5),a("li",[t._v("Simulate scoped CSS for each component.")])]),t._m(6)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"what-is-rollup-plugin-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-rollup-plugin-vue","aria-hidden":"true"}},[this._v("#")]),this._v(" What is Rollup Plugin Vue?")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("example"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ msg }}"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello world!'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v(".example")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("There are many cool features provided by "),s("code",[this._v("rollup-plugin-vue")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("Allows custom blocks in a "),s("code",[this._v(".vue")]),this._v(" file;")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("Treat static assets referenced in "),s("code",[this._v("<style>")]),this._v(" and "),s("code",[this._v("<template>")]),this._v(" as module dependencies;")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Rollup is a module bundler which makes "),s("code",[this._v("rollup-plugin-vue")]),this._v(" ideal for packaging Vue plugins and UI component libraries.")])}],!1,null,null,null);s.default=e.exports}}]);