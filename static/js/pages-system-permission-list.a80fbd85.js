(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-permission-list"],{2040:function(n,e,t){"use strict";t.r(e);var i=t("ce76"),a=t.n(i);for(var s in i)"default"!==s&&function(n){t.d(e,n,(function(){return i[n]}))}(s);e["default"]=a.a},"5e1e":function(n,e,t){var i=t("24fb");e=i(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""]),n.exports=e},"76af":function(n,e,t){"use strict";var i=t("8b4b"),a=t.n(i);a.a},"8b4b":function(n,e,t){var i=t("5e1e");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=t("4f06").default;a("55258261",i,!0,{sourceMap:!1,shadowMode:!1})},a4bd:function(n,e,t){"use strict";t.r(e);var i=t("cb1e"),a=t("2040");for(var s in a)"default"!==s&&function(n){t.d(e,n,(function(){return a[n]}))}(s);t("76af");var r,o=t("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"133cc739",null,!1,i["a"],r);e["default"]=u.exports},cb1e:function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return s})),t.d(e,"a",(function(){return i}));var i={downloadExcel:t("d463").default,unicloudDb:t("960d").default,uniTable:t("f7b5").default,uniTr:t("c62f").default,uniTh:t("04f7").default,uniTd:t("07ed").default,uniIcons:t("fde7").default,uniPagination:t("dbea").default},a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",[t("v-uni-view",{staticClass:"uni-header"},[t("v-uni-view",{staticClass:"uni-group hide-on-phone"},[t("v-uni-view",{staticClass:"uni-title"},[n._v("权限管理")]),t("v-uni-view",{staticClass:"uni-sub-title"})],1),t("v-uni-view",{staticClass:"uni-group"},[t("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"权限标识/名称"},on:{confirm:function(e){arguments[0]=e=n.$handleEvent(e),n.search.apply(void 0,arguments)}},model:{value:n.query,callback:function(e){n.query=e},expression:"query"}}),t("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.search.apply(void 0,arguments)}}},[n._v("搜索")]),t("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.navigateTo("./add")}}},[n._v("新增")]),t("v-uni-button",{staticClass:"uni-button",attrs:{type:"warn",size:"mini",disabled:!n.selectedIndexs.length},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.delTable.apply(void 0,arguments)}}},[n._v("批量删除")]),t("download-excel",{staticClass:"hide-on-phone",attrs:{fields:n.expExcel.json_fields,data:n.expData,type:n.expExcel.type,name:n.expExcel.filename}},[t("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[n._v("导出 Excel")])],1)],1)],1),t("v-uni-view",{staticClass:"uni-container"},[t("unicloud-db",{ref:"udb",attrs:{collection:"uni-id-permissions",options:n.options,where:n.where,"page-data":"replace",orderby:n.orderby,getcount:!0,"page-size":n.options.pageSize,"page-current":n.options.pageCurrent},on:{load:function(e){arguments[0]=e=n.$handleEvent(e),n.onqueryload.apply(void 0,arguments)}},scopedSlots:n._u([{key:"default",fn:function(e){var i=e.data,a=e.pagination,s=e.loading,r=e.error;return[t("uni-table",{attrs:{loading:s,emptyText:r.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(e){arguments[0]=e=n.$handleEvent(e),n.selectionChange.apply(void 0,arguments)}}},[t("uni-tr",[t("uni-th",{attrs:{width:"250",align:"center"}},[n._v("权限标识")]),t("uni-th",{attrs:{width:"150",align:"center"}},[n._v("权限名称")]),t("uni-th",{attrs:{align:"center"}},[n._v("备注")]),t("uni-th",{attrs:{width:"170",align:"center"}},[n._v("创建时间")]),t("uni-th",{attrs:{width:"160",align:"center"}},[n._v("操作")])],1),n._l(i,(function(e,i){return t("uni-tr",{key:i},[t("uni-td",{attrs:{align:"center"}},[n._v(n._s(e.permission_id))]),t("uni-td",{attrs:{align:"center"}},[n._v(n._s(e.permission_name))]),t("uni-td",{attrs:{align:"center"}},[n._v(n._s(e.comment))]),t("uni-td",{attrs:{align:"center"}},[n._v(n._s(e.create_date))]),t("uni-td",{attrs:{align:"center"}},[t("v-uni-view",{staticClass:"uni-group"},[t("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.navigateTo("./edit?id="+e._id,!1)}}},[n._v("修改")]),t("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.confirmDelete(e)}}},[n._v("删除")])],1)],1)],1)}))],2),t("v-uni-view",{staticClass:"uni-pagination-box"},[t("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:n.pageSizeIndex,range:n.pageSizeOption},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.changeSize.apply(void 0,arguments)}}},[t("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[t("v-uni-text",[n._v(n._s(n.pageSizeOption[n.pageSizeIndex])+" 条/页")]),t("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1),t("uni-pagination",{attrs:{"show-icon":!0,"page-size":a.size,total:a.count},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.onPageChanged.apply(void 0,arguments)}},model:{value:a.current,callback:function(e){n.$set(a,"current",e)},expression:"pagination.current"}})],1)]}}])})],1)],1)},s=[]},ce76:function(n,e,t){"use strict";(function(n){t("a15b"),t("d81d"),t("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n.database();var i="create_date desc",a=["permission_id","permission_name"],s=20,r=1,o={data:function(){return{query:"",where:"",orderby:i,options:{pageSize:s,pageCurrent:r},selectedIndexs:[],pageSizeIndex:0,pageSizeOption:[20,50,100,500],expData:[],expExcel:{filename:"权限.xls",type:"xls",json_fields:{"权限标识":"permission_id","权限名称":"permission_name","备注":"comment","创建时间":"create_date"}}}},watch:{pageSizeIndex:{immediate:!0,handler:function(n,e){this.options.pageSize=this.pageSizeOption[n],this.options.pageCurrent=1}}},methods:{onqueryload:function(n){for(var e=0;e<n.length;e++){var t=n[e];t.create_date=this.$formatDate(t.create_date)}this.expData=n},changeSize:function(n){this.pageSizeIndex=n.detail.value},getWhere:function(){var n=this.query.trim();if(!n)return"";var e="/".concat(n,"/i");return a.map((function(n){return e+".test("+n+")"})).join(" || ")},search:function(){var n=this.getWhere(),e=n===this.where;this.where=n,e&&this.loadData()},loadData:function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:n})},onPageChanged:function(n){this.options.pageCurrent=n.current},navigateTo:function(n,e){var t=this;uni.navigateTo({url:n,events:{refreshData:function(){t.loadData(e)}}})},selectedItems:function(){var n=this.$refs.udb.dataList;return this.selectedIndexs.map((function(e){return n[e]._id}))},delTable:function(){this.$refs.udb.remove(this.selectedItems())},selectionChange:function(n){this.selectedIndexs=n.detail.index},confirmDelete:function(n){this.$refs.udb.remove(n._id)}}};e.default=o}).call(this,t("a9ff")["default"])}}]);