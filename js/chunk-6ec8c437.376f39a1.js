(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ec8c437"],{"1ea9":function(a,t,r){"use strict";r.d(t,"a",(function(){return e}));var e=function(a,t,r,e){return{labels:["Active","Deaths","Recovered"],datasets:[{backgroundColor:[a.info,a.dark,a.success],data:[t,r,e]}]}}},"63cd":function(a,t,r){"use strict";var e=r("9b2f"),s=r.n(e);s.a},"83b1":function(a,t,r){"use strict";r.r(t);var e,s=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"charts"},[r("div",{staticClass:"row"},[r("div",{staticClass:"flex md6 xs12"},[r("va-card",{staticClass:"chart-widget",attrs:{title:a.$t("charts.verticalBarChart")}},[r("va-chart",{attrs:{data:a.verticalBarChartData,type:"vertical-bar"}})],1)],1),r("div",{staticClass:"flex md6 xs12"},[r("va-card",{staticClass:"chart-widget",attrs:{title:a.$t("charts.horizontalBarChart")}},[r("va-chart",{attrs:{data:a.horizontalBarChartData,type:"horizontal-bar"}})],1)],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"flex md12 xs12"},[r("va-card",{staticClass:"chart-widget",attrs:{title:a.$t("charts.lineChart")}},[r("va-chart",{attrs:{data:a.lineChartData,type:"line"}})],1)],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"flex md6 xs12"},[r("va-card",{staticClass:"chart-widget",attrs:{title:a.$t("charts.pieChart")}},[r("va-chart",{attrs:{data:a.pieChartData,type:"pie"}})],1)],1),r("div",{staticClass:"flex md6 xs12"},[r("va-card",{staticClass:"chart-widget",attrs:{title:a.$t("charts.donutChart")}},[r("va-chart",{attrs:{data:a.donutChartData,type:"donut"}})],1)],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"flex md12 xs12"},[r("va-card",{staticClass:"chart-widget",attrs:{title:a.$t("charts.bubbleChart")}},[r("va-chart",{attrs:{data:a.bubbleChartData,type:"bubble"}})],1)],1)])])},o=[],n=r("9d2c"),c=function(){return Math.floor(100*Math.random())},l=function(){var a=!!Math.floor(2*Math.random());return a?["Debit","Credit"]:["Credit","Debit"]},i=function(a){return Array.from(Array(a),c)},d=function(){var a=400;return Math.max(a,(new Date).getMonth())},b=0,u=function(a,t){var r=d(),s=l();return e?(e.datasets[0].backgroundColor=Object(n["e"])(a.primary,.6).css,e.datasets[1].backgroundColor=Object(n["e"])(a.info,.6).css,t&&b!==t&&(e.labels.shift(),e.datasets.forEach((function(a){a.data.shift()})),b=t)):e={labels:["one,","two"],datasets:[{label:s[0],backgroundColor:Object(n["e"])(a.primary,.6).css,borderColor:"transparent",data:i(r-b)},{label:s[1],backgroundColor:Object(n["e"])(a.info,.6).css,borderColor:"transparent",data:i(r)}]},e},h=function(a){return{datasets:[{label:"USA",backgroundColor:Object(n["e"])(a.danger,.9).css,borderColor:"transparent",data:[{x:23,y:25,r:15},{x:40,y:10,r:10},{x:30,y:22,r:30},{x:7,y:43,r:40},{x:23,y:27,r:120},{x:20,y:15,r:11},{x:7,y:10,r:35},{x:10,y:20,r:40}]},{label:"Russia",backgroundColor:Object(n["e"])(a.primary,.9).css,borderColor:"transparent",data:[{x:0,y:30,r:15},{x:20,y:20,r:20},{x:15,y:15,r:50},{x:31,y:46,r:30},{x:20,y:14,r:25},{x:34,y:17,r:30},{x:44,y:44,r:10},{x:39,y:25,r:35}]},{label:"Canada",backgroundColor:Object(n["e"])(a.warning,.9).css,borderColor:"transparent",data:[{x:10,y:30,r:45},{x:10,y:50,r:20},{x:5,y:5,r:30},{x:40,y:30,r:20},{x:33,y:15,r:18},{x:40,y:20,r:40},{x:33,y:33,r:40}]},{label:"Belarus",backgroundColor:Object(n["e"])(a.info,.9).css,borderColor:"transparent",data:[{x:35,y:30,r:45},{x:25,y:40,r:35},{x:5,y:5,r:30},{x:5,y:20,r:40},{x:10,y:40,r:15},{x:3,y:10,r:10},{x:15,y:40,r:40},{x:7,y:15,r:10}]},{label:"Ukraine",backgroundColor:Object(n["e"])(a.success,.9).css,borderColor:"transparent",data:[{x:25,y:10,r:40},{x:17,y:40,r:40},{x:35,y:10,r:20},{x:3,y:40,r:10},{x:40,y:40,r:40},{x:20,y:10,r:10},{x:10,y:27,r:35},{x:7,y:26,r:40}]}]}},C=r("1ea9"),y=r("df73"),x=r("bb02"),f=function(a){return{labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"Vuestic Satisfaction Score",backgroundColor:a.warning,borderColor:"transparent",data:[80,90,50,70,60,90,50,90,80,40,72,93]},{label:"Bulma Satisfaction Score",backgroundColor:a.danger,borderColor:"transparent",data:[20,30,20,40,50,40,15,60,30,20,42,53]}]}},v={name:"charts",data:function(){return{bubbleChartData:h(this.$themes),lineChartData:u(this.$themes),pieChartData:Object(C["a"])(this.$themes),donutChartData:Object(y["a"])(this.$themes),verticalBarChartData:Object(x["a"])(this.$themes),horizontalBarChartData:f(this.$themes)}},methods:{refreshData:function(){this.lineChartData=u(this.$themes)}}},p=v,m=(r("63cd"),r("2877")),g=Object(m["a"])(p,s,o,!1,null,null,null);t["default"]=g.exports},"9b2f":function(a,t,r){},bb02:function(a,t,r){"use strict";r.d(t,"a",(function(){return e}));var e=function(a){return{labels:["January","February","March","April","May","June","July","August","September","October","November","ct1t1","ct1tc1t1","December"],datasets:[{label:"USA",backgroundColor:a.primary,borderColor:"transparent",data:[50,20,12,39,10,40,39,80,40,20,12,11,14,14]},{label:"USSR",backgroundColor:a.info,borderColor:"transparent",data:[50,10,22,39,15,20,85,32,60,50,20,30,25,36]},{label:"USSRa",backgroundColor:a.warning,borderColor:"transparent",data:[50,10,22,39,15,20,85,32,60,50,20,30,46,13]}]}}},df73:function(a,t,r){"use strict";var e;r.d(t,"a",(function(){return s}));var s=function(a){return e?e.datasets[0].backgroundColor=[a.danger,a.info,a.primary]:e={labels:["India","UO","ralia","khvhv"],datasets:[{label:"Population (millions)",backgroundColor:[a.danger,a.info,a.primary],data:[2478,2478,2478]}]},e}}}]);
//# sourceMappingURL=chunk-6ec8c437.376f39a1.js.map