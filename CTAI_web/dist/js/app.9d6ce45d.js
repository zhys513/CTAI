(function(t){function e(e){for(var i,r,l=e[0],o=e[1],c=e[2],p=0,u=[];p<l.length;p++)r=l[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},s=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"240b":function(t,e,a){"use strict";var i=a("a81d"),n=a.n(i);n.a},3170:function(t,e,a){},3760:function(t,e,a){},"3cd63":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-header"),a("app-content"),a("app-footer")],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Header"}},[t._m(0),a("div",{attrs:{id:"word"}},[a("h1",[t._v(t._s(t.msg))])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-left-edition"},[a("span",{staticStyle:{color:"#21b3b9","font-weight":"bold"}},[a("i",{staticClass:"el-icon-phone-outline",staticStyle:{"font-size":"23px"}}),t._v("免费咨询：010-56732656\n      ")]),a("span",[a("i",{staticClass:"el-icon-time",staticStyle:{"font-size":"23px"}}),t._v("工作时间：9:00-18:00\n      ")])])}],o={name:"Header",data:function(){return{msg:"肿瘤辅助诊断系统",activeIndex:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)}}},c=o,d=(a("7d07"),a("2877")),p=Object(d["a"])(c,r,l,!1,null,"088f1bfc",null),u=p.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Footer"}},[a("p",[t._v(t._s(t.msg))])])},f=[],h={name:"Footer",data:function(){return{msg:"Copyright 2019"}}},g=h,y=(a("240b"),Object(d["a"])(g,m,f,!1,null,"307ba396",null)),v=y.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Content"}},[a("el-dialog",{attrs:{id:"hello",title:"肿瘤辅助诊断系统使用须知",visible:t.centerDialogVisible,width:"65%","before-close":t.handleClose},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[a("el-steps",{attrs:{active:5,"finish-status":"process "}},[a("el-step",{staticStyle:{width:"280px","padding-left":"50px"},attrs:{title:"步骤1"}},[a("template",{slot:"description"},[a("p",{staticStyle:{"font-size":"16px"}},[t._v("下载测试CT文件文件")]),a("br"),a("br")])],2),a("el-step",{staticStyle:{width:"260px","margin-left":"-5px"},attrs:{title:"步骤2"}},[a("template",{slot:"description"},[a("p",[t._v("上传CT图像至服务器")]),a("p",[t._v("使用训练的模型预测肿瘤区域")]),a("p",[t._v("并返回肿瘤区域特征")])])],2),a("el-step",{staticStyle:{width:"260px","margin-left":"-5px"},attrs:{title:"步骤3"}},[a("template",{slot:"description"},[a("div",[a("p",[t._v("根据预测的肿瘤区域和特征")]),a("p",[t._v("进行辅助诊断")]),a("br")])])],2)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.welcome}},[t._v("下载测试CT图像")])],1)],1),a("el-dialog",{attrs:{title:"AI预测中",visible:t.dialogTableVisible,"show-close":!1,"close-on-press-escape":!1,"append-to-body":!0,"close-on-click-modal":!1,center:!0},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[a("el-progress",{attrs:{percentage:t.percentage}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t._v("非GPU学生服务器性能有限，请耐心等待约一分钟")])],1),a("div",{attrs:{id:"aside"}},[a("el-card",{staticClass:"box-card",staticStyle:{width:"250px",height:"350px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("病人信息")])]),t._l(t.patient,function(e,i){return a("div",{key:i,staticClass:"text item"},[a("h3",{staticStyle:{"font-weight":"normal"}},[t._v(t._s(i)+":"+t._s(e))])])})],2),a("el-card",{staticClass:"box-card",staticStyle:{width:"250px",height:"500px","margin-top":"50px"},attrs:{"body-style":"padding: 15px 5px 15px 10px"}},[a("div",{staticClass:"clearfix",staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"steps",staticStyle:{"letter-spacing":"7px"}},[t._v("诊断测试步骤")])]),a("div",{staticClass:"step_1",staticStyle:{height:"600px"}},[a("el-steps",{attrs:{direction:"vertical",active:t.active,"finish-status":"success"}},[a("el-step",{staticStyle:{height:"120px"},attrs:{title:"步骤 1"}},[a("template",{staticStyle:{"font-size":"10px!important"},slot:"description"},[t._v("\n                            下载测试CT文件\n                            "),a("el-button",{staticClass:"download_bt",attrs:{type:"primary",icon:"el-icon-download"},on:{click:t.downTemplate}},[t._v("下载\n                            ")])],1)],2),a("el-step",{staticStyle:{height:"150px"},attrs:{title:"步骤 2"}},[a("template",{slot:"description"},[t._v("\n                            上传CT图像至服务器，使用训练的模型预测肿瘤区域并返回肿瘤区域特征\n                            "),a("el-button",{staticClass:"download_bt",attrs:{type:"primary",icon:"el-icon-upload"}},[t._v("上传")]),a("input",{staticClass:"file",attrs:{name:"file",type:"file"},on:{change:t.update}})],1)],2),a("el-step",{staticStyle:{height:"200px"},attrs:{title:"获得图像及特征"}},[a("template",{slot:"description"})],2)],1)],1)])],1),a("div",{attrs:{id:"CT"}},[a("div",{attrs:{id:"CT_image"}},[a("el-card",{staticClass:"box-card",staticStyle:{"border-radius":"8px",width:"800px",height:"360px","margin-bottom":"-30px"},attrs:{id:"CT_image_1"}},[a("div",{staticClass:"demo-image__preview1"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"上传图片中","element-loading-spinner":"el-icon-loading"}},[a("el-image",{staticClass:"image_1",staticStyle:{"border-radius":"3px 3px 0 0"},attrs:{src:t.url_1,"preview-src-list":t.srcList}},[a("div",{attrs:{slot:"error"},slot:"error"},[a("div",{staticClass:"error",attrs:{slot:"placeholder"},slot:"placeholder"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showbutton,expression:"showbutton"}],staticClass:"download_bt",attrs:{type:"primary",icon:"el-icon-upload"},on:{click:t.true_upload}},[t._v("\n                                        上传dcm文件\n                                        "),a("input",{ref:"upload",staticStyle:{display:"none"},attrs:{name:"file",type:"file"},on:{change:t.update}})])],1)])])],1),a("div",{staticClass:"img_info_1",staticStyle:{"border-radius":"0 0 5px 5px"}},[a("span",{staticStyle:{color:"white","letter-spacing":"6px"}},[t._v("原CT图像")])])]),a("div",{staticClass:"demo-image__preview2"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"处理中,请耐心等待","element-loading-spinner":"el-icon-loading"}},[a("el-image",{staticClass:"image_1",staticStyle:{"border-radius":"3px 3px 0 0"},attrs:{src:t.url_2,"preview-src-list":t.srcList1}},[a("div",{attrs:{slot:"error"},slot:"error"},[a("div",{staticClass:"error",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(t._s(t.wait_return))])])])],1),a("div",{staticClass:"img_info_1",staticStyle:{"border-radius":"0 0 5px 5px"}},[a("span",{staticStyle:{color:"white","letter-spacing":"4px"}},[t._v("标出肿瘤的CT图像")])])])])],1),a("div",{attrs:{id:"info_patient"}},[a("el-card",{staticStyle:{"border-radius":"8px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("肿瘤区域特征值")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.showbutton,expression:"!showbutton"}],staticClass:"download_bt",staticStyle:{"margin-left":"35px"},attrs:{type:"primary",icon:"el-icon-upload"},on:{click:t.true_upload2}},[t._v("\n                        重新选择图像\n                        "),a("input",{ref:"upload2",staticStyle:{display:"none"},attrs:{name:"file",type:"file"},on:{change:t.update}})])],1),a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"肿瘤区域特征值",name:"first"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"750px","text-align":"center"},attrs:{data:t.feature_list,height:"390",border:"","element-loading-text":"数据正在处理中，请耐心等待","element-loading-spinner":"el-icon-loading",lazy:""}},[a("el-table-column",{attrs:{label:"Feature",width:"250px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row[2]))])]}}])}),a("el-table-column",{attrs:{label:"特征名",width:"250px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row[0]))])]}}])}),a("el-table-column",{attrs:{label:"特征值",width:"250px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row[1]))])]}}])})],1)],1),a("el-tab-pane",{staticStyle:{width:"750px",height:"390px"},attrs:{label:"面积对比",name:"second"}},[a("div",{attrs:{id:"areaCompare"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"750px","text-align":"center"},attrs:{data:t.feature_list,height:"390",border:"","element-loading-text":"数据正在处理中，请耐心等待","element-loading-spinner":"el-icon-loading"}},[a("el-table-column",{attrs:{label:"Feature",width:"250px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row[2]))])]}}])}),a("el-table-column",{attrs:{label:"特征名",width:"250px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row[0]))])]}}])}),a("el-table-column",{attrs:{label:"特征值",width:"250px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row[1]))])]}}])})],1)],1),a("div",{staticStyle:{width:"750px",height:"400px","margin-bottom":"20px"},attrs:{id:"area"}})]),a("el-tab-pane",{staticStyle:{width:"750px",height:"390px"},attrs:{label:"周长对比",name:"third"}},[a("div",{attrs:{id:"perimeterCompare"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"750px","text-align":"center"},attrs:{data:t.feature_list,height:"390",border:"","element-loading-text":"数据正在处理中，请耐心等待","element-loading-spinner":"el-icon-loading"}},[a("el-table-column",{attrs:{label:"Feature",width:"250px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row[2]))])]}}])}),a("el-table-column",{attrs:{label:"特征名",width:"250px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row[0]))])]}}])}),a("el-table-column",{attrs:{label:"特征值",width:"250px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row[1]))])]}}])})],1)],1),a("div",{staticStyle:{width:"750px",height:"400px","margin-bottom":"20px"},attrs:{id:"perimeter"}})])],1)],1)],1)])],1)},_=[],x=(a("ac6a"),a("456d"),a("7f7f"),a("bd86")),w=a("bc3a"),S=a.n(w),C={name:"Content",data:function(){var t;return t={server_url:"http://127.0.0.1:5003",perimeter_picture_data:0,area_picture_data:0,activeName:"first",active:0,centerDialogVisible:!0,url_1:"",url_2:"",textarea:"",srcList:[],srcList1:[],feature_list:[],feature_list_1:[],feat_list:[],url:"",visible:!1},Object(x["a"])(t,"activeName","second"),Object(x["a"])(t,"wait_return","等待上传"),Object(x["a"])(t,"wait_upload","等待上传"),Object(x["a"])(t,"loading",!1),Object(x["a"])(t,"table",!1),Object(x["a"])(t,"isNav",!1),Object(x["a"])(t,"showbutton",!0),Object(x["a"])(t,"percentage",0),Object(x["a"])(t,"fullscreenLoading",!1),Object(x["a"])(t,"opacitys",{opacity:0}),Object(x["a"])(t,"dialogTableVisible",!1),Object(x["a"])(t,"patient",{ID:"20190001","姓名":"李明","性别":"男","年龄":"29","电话":"13220986785","部位":"直肠"}),t},created:function(){document.title="肿瘤辅助诊断系统"},methods:{true_upload:function(){this.$refs.upload.click()},true_upload2:function(){this.$refs.upload2.click()},handleClose:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},next:function(){this.active++},getObjectURL:function(t){var e=null;return void 0!=window.createObjcectURL?e=window.createOjcectURL(t):void 0!=window.URL?e=window.URL.createObjectURL(t):void 0!=window.webkitURL&&(e=window.webkitURL.createObjectURL(t)),e},handleClick:function(t,e){if("second"==t.name){this.drawChart();var a=this.$echarts.init(document.getElementById("area"));a.setOption({xAxis:{type:"category",data:["1","2","3","4","5","6","7","8"]},yAxis:{type:"value",name:"面积"},areaStyle:{},legend:{data:[""]},series:[{name:"面积",type:"line",data:[1300,1290,1272,1123.5,1123,1092,1086,this.area_picture_data]}]})}else if("third"==t.name){this.drawChart();var i=this.$echarts.init(document.getElementById("perimeter"));i.setOption({xAxis:{type:"category",data:["1","2","3","4","5","6","7","8"]},yAxis:{type:"value",name:"周长"},areaStyle:{},series:[{name:"周长",type:"line",data:[250,243,227,201,197,170,159,this.perimeter_picture_data]}]})}},update:function(t){var e=this;this.percentage=0,this.dialogTableVisible=!0,this.url_1="",this.url_2="",this.srcList=[],this.srcList1=[],this.wait_return="",this.wait_upload="",this.feature_list=[];var a=this.$echarts.init(document.getElementById("area"));a.setOption({series:[{data:[""]}]}),this.feat_list=[],this.fullscreenLoading=!0,this.loading=!0,this.showbutton=!1;var i=t.target.files[0];this.url_1=this.$options.methods.getObjectURL(i);var n=new FormData;n.append("file",i,i.name);var s=setInterval(function(){e.myFunc()},30),r={headers:{"Content-Type":"multipart/form-data"}};S.a.post(this.server_url+"/upload",n,r).then(function(t){e.percentage=100,clearInterval(s),e.url_1=t.data.image_url,e.srcList.push(e.url_1),e.url_2=t.data.draw_url,e.srcList1.push(e.url_2),e.fullscreenLoading=!1,e.loading=!1,e.feat_list=Object.keys(t.data.image_info);for(var a=0;a<e.feat_list.length;a++)t.data.image_info[e.feat_list[a]][2]=e.feat_list[a],e.feature_list.push(t.data.image_info[e.feat_list[a]]);e.feature_list.push(t.data.image_info),e.feature_list_1=e.feature_list[0],JSON.stringify(t.data.image_info,function(t,e){console.log(t),console.log(e)}),e.dialogTableVisible=!1,e.percentage=0,e.notice1();var i=document.getElementById("areaCompare");i.style.display="none";i=document.getElementById("perimeterCompare");i.style.display="none";var n=e.$echarts.init(document.getElementById("area")),r=e.$echarts.init(document.getElementById("perimeter"));e.perimeter_picture_data=parseInt(t.data.image_info["perimeter"][1]),e.area_picture_data=parseInt(t.data.image_info["area"][1]),n.setOption({xAxis:{type:"category",data:["1","2","3","4","5","6","7","8"]},yAxis:{type:"value",name:"面积"},areaStyle:{},legend:{data:[""]},series:[{name:"面积",type:"line",data:[1300,1290,1272,1123.5,1123,1092,1086,t.data.image_info["area"][1]]}]}),r.setOption({xAxis:{type:"category",data:["1","2","3","4","5","6","7","8"]},yAxis:{type:"value",name:"周长"},areaStyle:{},series:[{name:"周长",type:"line",data:[250,243,227,201,197,170,159,t.data.image_info["perimeter"]]}]})})},downTemplate:function(){var t=this;S()({method:"get",url:"https://cso1-1254043908.cos.ap-beijing.myqcloud.com/ct/testfile.7z",responseType:"blob"}).then(function(e){t.downloads(e.data,e.headers.filename),200===e.status?(t.$message({message:"下载成功",type:"success"}),0==t.active&&t.next()):t.$message({showClose:!0,message:"下载失败，请重试",type:"error"})})},myFunc:function(){this.percentage+33<99?(this.percentage=this.percentage+33,console.log(this.percentage)):this.percentage=99},drawChart:function(){var t=this.$echarts.init(document.getElementById("area")),e=this.$echarts.init(document.getElementById("perimeter"));t.setOption({title:{text:"肿瘤面积变化",subtext:"Tumor Area Change",left:"center"},legend:{data:[""]},tooltip:{},grid:{x:50,y:55,x2:50,y2:60,borderWidth:1},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["1","2","3","4","5","6","7","8"],name:"治疗时间（周）",nameLocation:"middle",nameTextStyle:{padding:14,fontSize:14}},yAxis:{type:"value",name:"肿瘤面积",nameTextStyle:{padding:4,fontSize:14},max:1800},series:[{name:"面积",type:"bar",data:[]}]}),e.setOption({title:{text:"肿瘤周长变化",subtext:"Tumor Circumference Change",left:"center"},legend:{data:[""]},tooltip:{},grid:{x:50,y:55,x2:50,y2:60,borderWidth:1},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["1","2","3","4","5","6","7","8"],name:"治疗时间（周）",nameLocation:"middle",nameTextStyle:{padding:14,fontSize:14}},yAxis:{type:"value",name:"肿瘤周长",nameTextStyle:{padding:4,fontSize:14},max:400},series:[{name:"周长",type:"bar",data:[]}]})},downloads:function(t,e){if(t){var a=window.URL.createObjectURL(new Blob([t])),i=document.createElement("a");i.style.display="none",i.href=a,i.setAttribute("download","肿瘤CT图文件.zip"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(a)}},welcome:function(){var t=this;S()({method:"get",url:"https://cso1-1254043908.cos.ap-beijing.myqcloud.com/ct/testfile.7z",responseType:"blob"}).then(function(e){t.downloads(e.data,e.headers.filename),200===e.status?(t.$message({message:"下载成功",type:"success"}),t.centerDialogVisible=!1,t.next()):t.$message({showClose:!0,message:"下载失败，请重试",type:"error"})})},notice1:function(){this.$notify({title:"预测成功",message:"点击图片可以查看大图，图片下方会显示肿瘤区域的一些特征值来供医生参考，辅助诊断",duration:0,type:"success"})}},mounted:function(){this.drawChart()}},O=C,j=(a("b318"),a("c098"),Object(d["a"])(O,b,_,!1,null,"244a41a5",null)),T=j.exports,k={name:"肿瘤辅助诊断系统",data:function(){return{}},components:{"app-header":u,"app-footer":v,"app-content":T},methods:{}},L=k,$=Object(d["a"])(L,n,s,!1,null,null,null),A=$.exports,I=a("8c4f"),E=a("5c96"),U=a.n(E),N=a("313e"),R=a.n(N);a("0fae"),a("7d05"),a("3cd63");i["default"].prototype.$echarts=R.a,i["default"].use(U.a),i["default"].config.productionTip=!1,i["default"].use(I["a"]),i["default"].prototype.$http=S.a;var z=new I["a"]({routes:[{path:"/App",component:A,meta:{title:"肿瘤辅助诊断系统"}}],mode:"history"});i["default"].component("App",A),new i["default"]({el:"#app",router:z,render:function(t){return t(A)}})},"7d05":function(t,e,a){},"7d07":function(t,e,a){"use strict";var i=a("3760"),n=a.n(i);n.a},"82e2":function(t,e,a){},a81d:function(t,e,a){},b318:function(t,e,a){"use strict";var i=a("3170"),n=a.n(i);n.a},c098:function(t,e,a){"use strict";var i=a("82e2"),n=a.n(i);n.a}});
//# sourceMappingURL=app.9d6ce45d.js.map