(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-user-edit"],{"125f":function(t,a,e){var s=e("d6c1");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=e("4f06").default;n("63794729",s,!0,{sourceMap:!1,shadowMode:!1})},"43b5":function(t,a,e){"use strict";e.r(a);var s=e("fa80"),n=e.n(s);for(var r in s)"default"!==r&&function(t){e.d(a,t,(function(){return s[t]}))}(r);a["default"]=n.a},"4f39":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={username:{rules:[{required:!0,errorMessage:"{label}必填"},{format:"string"},{minLength:2}],label:"用户名"},password:{rules:[{required:!0,errorMessage:"{label}必填"},{format:"string"},{minLength:6}],label:"密码"},mobile:{rules:[{format:"string"},{pattern:"^\\+?[0-9-]{3,20}$"}],label:"手机号"},email:{rules:[{format:"string"},{format:"email"}],label:"邮箱"},role:{rules:[{format:"array"}]}};a.default=s},"59f7":function(t,a,e){"use strict";e.r(a);var s=e("bea5"),n=e("43b5");for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("b509");var o,i=e("f0c5"),l=Object(i["a"])(n["default"],s["b"],s["c"],!1,null,"24a44b63",null,!1,s["a"],o);a["default"]=l.exports},b509:function(t,a,e){"use strict";var s=e("125f"),n=e.n(s);n.a},bea5:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return s}));var s={uniForms:e("a876").default,uniFormsItem:e("8396").default,uniEasyinput:e("743d").default,uniDataCheckbox:e("4e12").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{rules:t.rules,validateTrigger:"bind"},on:{submit:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}},model:{value:t.formData,callback:function(a){t.formData=a},expression:"formData"}},[e("uni-forms-item",{attrs:{name:"username",label:"用户名",required:!0}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入用户名"},model:{value:t.formData.username,callback:function(a){t.$set(t.formData,"username",a)},expression:"formData.username"}})],1),e("uni-forms-item",{attrs:{name:t.showPassword?"password":"",label:"重置密码"}},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.showPassword,expression:"!showPassword"}],staticClass:"reset-password-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.trigger.apply(void 0,arguments)}}},[t._v("点击重置密码")]),e("uni-easyinput",{directives:[{name:"show",rawName:"v-show",value:t.showPassword,expression:"showPassword"}],attrs:{clearable:!1,placeholder:"请输入重置密码"},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}},[e("v-uni-view",{staticClass:"cancel-reset-password-btn",attrs:{slot:"right"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.trigger.apply(void 0,arguments)}},slot:"right"},[t._v("取消")])],1)],1),e("uni-forms-item",{attrs:{name:"role",label:"角色列表"}},[e("uni-data-checkbox",{attrs:{multiple:!0,localdata:t.roles},model:{value:t.formData.role,callback:function(a){t.$set(t.formData,"role",a)},expression:"formData.role"}})],1),e("uni-forms-item",{attrs:{name:"mobile",label:"手机号"}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入手机号"},model:{value:t.formData.mobile,callback:function(a){t.$set(t.formData,"mobile",a)},expression:"formData.mobile"}})],1),e("uni-forms-item",{attrs:{name:"email",label:"邮箱"}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入邮箱"},model:{value:t.formData.email,callback:function(a){t.$set(t.formData,"email",a)},expression:"formData.email"}})],1),e("uni-forms-item",{attrs:{name:"status",label:"用户状态"}},[Number(t.formData.status)<2?e("v-uni-switch",{attrs:{checked:t.formData.status},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.binddata("status",a.detail.value)}}}):e("v-uni-view",{staticClass:"uni-form-item-empty"},[t._v(t._s(t.parseUserStatus(t.formData.status)))])],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submitForm.apply(void 0,arguments)}}},[t._v("提交")]),e("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},r=[]},d6c1:function(t,a,e){var s=e("24fb");a=s(!1),a.push([t.i,".reset-password-btn[data-v-24a44b63]{\n\t/* height: 100%; */line-height:36px;color:#007aff;text-decoration:underline;cursor:pointer}.cancel-reset-password-btn[data-v-24a44b63]{color:#007aff;padding-right:10px;cursor:pointer}",""]),t.exports=a},fa80:function(t,a,e){"use strict";(function(t){var s=e("4ea4");e("caad"),e("c975"),e("d81d"),e("a9e3"),e("d3b7"),e("2532"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=s(e("5530")),r=s(e("4f39")),o=t.database(),i=(o.command,"uni-id-users");function l(t){var a={};for(var e in r.default)t.includes(e)&&(a[e]=r.default[e]);return a}var u={data:function(){return{showPassword:!1,formData:{username:"",password:"",role:[],mobile:"",email:"",status:!1},rules:(0,n.default)((0,n.default)({},l(["username","password","role","mobile","email"])),{},{status:{rules:[{format:"bool"}]}}),roles:[]}},onLoad:function(t){var a=t.id;this.formDataId=a,this.getDetail(a),this.loadroles()},methods:{trigger:function(){this.showPassword=!this.showPassword},submitForm:function(t){this.$refs.form.submit()},submit:function(t){var a=this,e=t.detail,s=e.value,n=e.errors;if(!n){uni.showLoading({title:"修改中...",mask:!0}),"boolean"===typeof s.status&&(s.status=Number(!s.status));var r={uid:this.formDataId,password:s.password};delete s.password,o.collection(i).where({_id:this.formDataId}).update(s).then((function(t){a.showPassword&&r.password&&a.resetPWd(r),uni.showToast({title:"修改成功"}),a.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}},resetPWd:function(t){this.$request("system/user/resetPwd",t).then().catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally()},getDetail:function(t){var a=this;uni.showLoading({mask:!0}),o.collection(i).doc(t).field("username,role,mobile,email,status").get().then((function(t){var e=t.result.data[0];e&&(void 0===e.status&&(e.status=!0),0===e.status&&(e.status=!0),1===e.status&&(e.status=!1),a.formData=e)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},loadroles:function(){var t=this;o.collection("uni-id-roles").limit(500).get().then((function(a){var e=[];t.roles=a.result.data.map((function(t){return e.push(t.role_id),{value:t.role_id,text:t.role_name}})),-1===e.indexOf("admin")&&t.roles.unshift({value:"admin",text:"超级管理员"})})).catch((function(t){uni.showModal({title:"提示",content:t.message,showCancel:!1})}))},parseUserStatus:function(t){return 0===t?"启用":1===t?"禁用":2===t?"审核中":3===t?"审核拒绝":"启用"}}};a.default=u}).call(this,e("a9ff")["default"])}}]);