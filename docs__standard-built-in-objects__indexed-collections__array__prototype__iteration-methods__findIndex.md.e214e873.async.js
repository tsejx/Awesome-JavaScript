(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[304],{"3CTk":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(r);t("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"arrayprototypefindindex"},l.a.createElement("a",{"aria-hidden":"true",href:"#arrayprototypefindindex"},l.a.createElement("span",{className:"icon icon-link"})),"Array.prototype.findIndex()"),l.a.createElement("p",null,l.a.createElement("code",null,"findIndex()"),"\u65b9\u6cd5\u8fd4\u56de\u6570\u7ec4\u4e2d\u6ee1\u8db3\u63d0\u4f9b\u7684\u6d4b\u8bd5\u51fd\u6570\u7684",l.a.createElement("strong",null,"\u7b2c\u4e00\u4e2a\u5143\u7d20"),"\u7684",l.a.createElement("strong",null,"\u7d22\u5f15"),"\u3002\u5426\u5219\u8fd4\u56de-1\u3002"),l.a.createElement("h2",{id:"\u8bed\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),l.a.createElement(c.a,{code:"arr.findIndex( callbackFunc [, thisArg ])\n\ncallbackFunc = function (currentValue, index, array) {\n    // do something to\n}\n",lang:"js"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5b9e\u4f8b\u65b9\u6cd5\u53c2\u6570"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u8bf4\u660e"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"callback")),l.a.createElement("td",null,"\u7528\u4e8e\u5224\u5b9a\u6570\u7ec4\u6210\u5458\u7684\u56de\u8c03\u51fd\u6570"),l.a.createElement("td",null,"function")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"thisArg")),l.a.createElement("td",null,"\u6267\u884c\u56de\u8c03\u51fd\u6570\u7684 ",l.a.createElement("code",null,"this")," \u503c"),l.a.createElement("td",null)))),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u56de\u8c03\u51fd\u6570\u53c2\u6570"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u8bf4\u660e"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"currentValue")),l.a.createElement("td",null,"\u5f53\u524d\u904d\u5386\u7684\u6570\u7ec4\u6210\u5458"),l.a.createElement("td",null,"any")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"index")),l.a.createElement("td",null,"\u5f53\u524d\u904d\u5386\u7684\u6570\u7ec4\u6210\u5458\u7684\u7d22\u5f15"),l.a.createElement("td",null,"number")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"array")),l.a.createElement("td",null,"\u539f\u6570\u7ec4"),l.a.createElement("td",null,"array")))),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement("h3",{id:"\u6807\u51c6\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u6807\u51c6\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u6807\u51c6\u793a\u4f8b"),l.a.createElement(c.a,{code:"const arr = [1, 2, 3, 4, 5, 12, 22, 2, 2, 2];\n\nconst foo = arr.findIndex(function(currentValue, index, array) {\n  return currentValue === 2;\n});\n\nconsole.log(foo);\n// 1\n",lang:"js"}),l.a.createElement("h3",{id:"\u67e5\u627e\u8d28\u6570"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u67e5\u627e\u8d28\u6570"},l.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u627e\u8d28\u6570"),l.a.createElement("p",null,"\u67e5\u627e\u6570\u7ec4\u4e2d\u9996\u4e2a\u8d28\u6570\u5143\u7d20\u7684\u7d22\u5f15\u3002"),l.a.createElement(c.a,{code:"function isPrime(element, index, array) {\n  var start = 2;\n  while (start <= Math.sqrt(element)) {\n    if (element % start++ < 1) {\n      return false;\n    }\n  }\n  return element > 1;\n}\n\nconsole.log([4, 6, 8, 12].findIndex(isPrime));\n// -1\nconsole.log([4, 6, 7, 12].findIndex(isPrime));\n// 2\n",lang:"js"})))}}}]);