(function(e){function t(t){for(var n,i,s=t[0],l=t[1],c=t[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assignment2/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"19a0":function(e,t,r){"use strict";r("f3a1")},5221:function(e,t,r){e.exports=r.p+"img/error.566e6925.jpg"},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2909"),o=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("159b"),r("2b0e")),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],s={name:"App"},l=s,c=(r("034f"),r("2877")),u=Object(c["a"])(l,a,i,!1,null,null,null),p=u.exports,d=r("bc3a"),f=r.n(d),m=r("2106"),h=r.n(m),v=r("8c4f"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"homePage container-fluid"},[r("div",{staticClass:"row justify-content-around mb-3"},[r("ButtonFilter",{attrs:{filterTxt:"Female count:",active:"female"===e.activeFilter,filteredAmount:e.femaleCount},on:{filterAction:e.filterFemales}}),r("ButtonFilter",{attrs:{filterTxt:"Male count:",active:"male"===e.activeFilter,filteredAmount:e.maleCount},on:{filterAction:e.filterMales}}),r("ButtonFilter",{attrs:{filterTxt:"Other gender count:",active:"other"===e.activeFilter,filteredAmount:e.otherGenderCount},on:{filterAction:e.filterOther}}),r("ButtonFilter",{attrs:{filterTxt:"People count:",active:"all"===e.activeFilter,filteredAmount:e.peopleCount},on:{filterAction:e.filterAll}})],1),e._l(e.peopleCurList,(function(e,t){return r("Card",{key:t,staticClass:"mb-3",attrs:{person:e}})})),e.isPeopleListEmpty?e._e():r("div",{staticClass:"spinner-border text-info"})],2)},b=[],_=r("1da1"),y=(r("4de4"),r("b0c0"),r("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card shadow"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-3"},[r("img",{staticClass:"card-img-top",attrs:{src:e.personPicUrl,alt:"person avatar"}})]),r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[e.personName?r("h5",{staticClass:"card-title",style:{color:e.eyeColor}},[e._v(" "+e._s(e.personName)+" ")]):e._e(),e.personBmi?r("font-awesome-layers",{staticClass:"fa-1x weight-indicator ml-auto mr-5"},[r("font-awesome-icon",{staticClass:"fa-2x scale-icon",attrs:{icon:["fas",e.scaleEmoji]}}),r("span",{class:["badge-"+e.weightBadgeColor,"badge"]},[e._v(e._s(e.realAndIdealMassDifference))])],1):e._e()],1),r("ul",{staticClass:"list-group list-group-flush text-left"},[r("li",{staticClass:"list-group-item"},[e._v("skin color: "+e._s(e.person.skin_color))]),r("li",{staticClass:"list-group-item"},[e._v("eye color: "+e._s(e.person.eye_color))]),r("li",{staticClass:"list-group-item"},[e._v("birth year: "+e._s(e.person.birth_year))])])]),r("div",{staticClass:"card-body text-right pt-0 pb-0"},[r("BaseButton",{staticClass:"text-left",attrs:{buttonTxt:"edit",buttonType:"primary"},on:{click:e.goToEditPage}})],1)])])])}),w=[],C=r("9558"),x=(r("99af"),r("466d"),r("ac1f"),r("5319"),r("d747")),P=r.n(x),B={name:"Card",props:{person:{type:Object,required:!0}},data:function(){return{avatarsEndpoint:"https://avatars.dicebear.com/api/"}},mounted:function(){},methods:{isNumPositive:function(e){return e>=0},goToEditPage:function(){this.$router.push({name:"PersonPage",params:{id:this.personId}})}},computed:{personGender:function(){var e=this,t=["n/a","hermaphrodite","none"];return t.some((function(t){return t===e.person.gender}))?"identicon":this.person.gender.toLowerCase()},personPicUrl:function(){return"".concat(this.avatarsEndpoint).concat(this.personGender,"/").concat(this.personId,".svg")},personId:function(){var e,t,r,n=null===(e=this.person)||void 0===e||null===(t=e.url)||void 0===t?void 0:t.match(Object(C["a"])(/\/([0-9]+?)\/$/,{id:1}));return(null===n||void 0===n||null===(r=n.groups)||void 0===r?void 0:r.id)||"0"},personName:function(){var e;return null===(e=this.person)||void 0===e?void 0:e.name},personMass:function(){var e;return parseInt(null===(e=this.person)||void 0===e?void 0:e.mass.replace(/,/g,""))},personHeight:function(){var e;return parseInt(null===(e=this.person)||void 0===e?void 0:e.height.replace(/,/g,""))/100},personBmi:function(){return isNaN(this.personMass)||isNaN(this.personHeight)?0:this.personMass/Math.pow(this.personHeight,2)},idealPersonMass:function(){var e=21;return parseInt(e*Math.pow(this.personHeight,2))},realAndIdealMassDifference:function(){return this.personMass-this.idealPersonMass},weightBadgeColor:function(){return this.isNumPositive(this.realAndIdealMassDifference)?"danger":"warning"},scaleEmoji:function(){return this.personBmi<=18?"balance-scale-left":this.personBmi<=25?"balance-scale":"balance-scale-right"},eyeColor:function(){for(var e in P.a)if(this.person.eye_color===e)return P.a[e];return"black"}}},D=B,T=(r("b21a"),Object(c["a"])(D,y,w,!1,null,"0bd42f18",null)),k=T.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BaseButton",{attrs:{buttonTxt:e.filterTxt,badgeTxt:e.filteredAmount,buttonType:e.active?"success":"secondary"},on:{click:e.emitFilteringAction}})},E=[],j=(r("a9e3"),{name:"ButtonFilter",props:{filterTxt:{type:String,required:!0},filteredAmount:{type:Number,default:0},active:{type:Boolean,default:!1}},data:function(){return{filterActive:!1}},methods:{emitFilteringAction:function(){this.$emit("filterAction")}}}),A=j,F=Object(c["a"])(A,O,E,!1,null,"2875980f",null),M=F.exports,N={name:"HomePage",components:{Card:k,ButtonFilter:M},data:function(){return{endpoint:"https://swapi.dev/api/people/?page=",peopleResult:[],peopleCurList:[],activeFilter:"all"}},mounted:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getAllPeople();case 2:e.peopleResult=t.sent,e.peopleCurList=e.peopleResult;case 4:case"end":return t.stop()}}),t)})))()},methods:{getAllPeople:function(){return Object(_["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[{edited:"2014-12-20T21:17:56.891Z",name:"Luke Skywalker",created:"2014-12-09T13:50:51.644Z",gender:"male",skin_color:"fair",hair_color:"blond",height:"172",eye_color:"blue",mass:"77",homeworld:1,birth_year:"19BBY",url:"https://swapi.dev/api/people/1/"},{edited:"2014-12-20T21:17:50.309Z",name:"C-3PO",created:"2014-12-10T15:10:51.357Z",gender:"n/a",skin_color:"gold",hair_color:"n/a",height:"167",eye_color:"yellow",mass:"75",homeworld:1,birth_year:"112BBY",url:"https://swapi.dev/api/people/2/"},{edited:"2014-12-20T21:17:50.311Z",name:"R2-D2",created:"2014-12-10T15:11:50.376Z",gender:"n/a",skin_color:"white, blue",hair_color:"n/a",height:"96",eye_color:"red",mass:"32",homeworld:8,birth_year:"33BBY",url:"https://swapi.dev/api/people/5/"},{edited:"2014-12-20T21:17:50.317Z",name:"Owen Lars",created:"2014-12-10T15:52:14.024Z",gender:"none",skin_color:"light",hair_color:"brown, grey",height:"178",eye_color:"blue",mass:"50",homeworld:1,birth_year:"52BBY",url:"https://swapi.dev/api/people/12/"},{edited:"2014-12-20T21:17:50.319Z",name:"Beru Whitesun lars",created:"2014-12-10T15:53:41.121Z",gender:"female",skin_color:"light",hair_color:"brown",height:"165",eye_color:"blue, green",mass:"65",homeworld:1,birth_year:"47BBY",url:"https://swapi.dev/api/people/9/"},{edited:"2014-12-20T21:17:50.330Z",name:"BWilhuff Tarkin",created:"2014-12-10T16:26:56.138Z",gender:"female",skin_color:"fair",hair_color:"auburn, grey",height:"180",eye_color:"blue",mass:"unknown",homeworld:21,birth_year:"19BBY",url:"https://swapi.dev/api/people/5/"},{edited:"2014-12-20T21:17:50.338Z",name:"AJabba Desilijic Tiure",created:"2014-12-10T17:11:31.638Z",gender:"hermaphrodite",skin_color:"green-tan, brown",hair_color:"n/a",height:"175",eye_color:"orange",mass:"1,358",homeworld:24,birth_year:"600BBY",url:"https://swapi.dev/api/people/13/"}],e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))()},filterFemales:function(){this.peopleCurList=this.filteredFemales,this.activeFilter="female"},filterMales:function(){this.peopleCurList=this.filteredMales,this.activeFilter="male"},filterOther:function(){this.peopleCurList=this.filteredOthers,this.activeFilter="other"},filterAll:function(){this.peopleCurList=this.peopleResult,this.activeFilter="all"}},computed:{filteredFemales:function(){var e;return null===(e=this.peopleResult)||void 0===e?void 0:e.filter((function(e){return"female"===e.gender}))},filteredMales:function(){var e;return null===(e=this.peopleResult)||void 0===e?void 0:e.filter((function(e){return"male"===e.gender}))},filteredOthers:function(){var e;return null===(e=this.peopleResult)||void 0===e?void 0:e.filter((function(e){return"male"!==e.gender&&"female"!==e.gender}))},femaleCount:function(){var e;return null===(e=this.filteredFemales)||void 0===e?void 0:e.length},maleCount:function(){var e;return null===(e=this.filteredMales)||void 0===e?void 0:e.length},otherGenderCount:function(){var e;return null===(e=this.filteredOthers)||void 0===e?void 0:e.length},peopleCount:function(){var e;return null===(e=this.peopleResult)||void 0===e?void 0:e.length},peopleFilteredByLetters:function(){var e=["a","b","c"];return this.peopleResult.filter((function(t){return e.some((function(e){return e===t.name.charAt(0).toLowerCase()}))}))},isPeopleListEmpty:function(){var e;return null===(e=this.peopleCurList)||void 0===e?void 0:e.length}}},$=N,R=(r("19a0"),Object(c["a"])($,g,b,!1,null,"1a899850",null)),L=R.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"errorPage"},[n("div",{staticClass:"content"},[n("h3",[e._v(" You have made some mistake when typing url, this route does not exist... ")]),n("img",{attrs:{src:r("5221"),alt:""}}),n("router-link",{staticClass:"mt-4",attrs:{to:"/"}},[n("BaseButton",{attrs:{buttonTxt:"go back to home",buttonType:"primary"}})],1)],1)])},S=[],H={name:"ErrorPage"},I=H,Y=(r("a2ce"),Object(c["a"])(I,Z,S,!1,null,"b5f5ce58",null)),G=Y.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"personPage"},[r("h3",[e._v("Edit "+e._s(e.personData.name))]),r("form",{staticClass:"text-left col-10 offset-1 col-md-6 offset-md-3 justify-content-center",on:{submit:function(t){return t.preventDefault(),e.editPerson(t)}}},[r("div",{staticClass:"form-group mt-3"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.personData.name,expression:"personData.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter name"},domProps:{value:e.personData.name},on:{input:function(t){t.target.composing||e.$set(e.personData,"name",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"height"}},[e._v("Height")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.personData.height,expression:"personData.height"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter height"},domProps:{value:e.personData.height},on:{input:function(t){t.target.composing||e.$set(e.personData,"height",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"mass"}},[e._v("Mass")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.personData.mass,expression:"personData.mass"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter mass"},domProps:{value:e.personData.mass},on:{input:function(t){t.target.composing||e.$set(e.personData,"mass",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"hair_color"}},[e._v("Hair color")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.personData.hair_color,expression:"personData.hair_color"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter hair color"},domProps:{value:e.personData.hair_color},on:{input:function(t){t.target.composing||e.$set(e.personData,"hair_color",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"skin color"}},[e._v("Skin color")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.personData.skin_color,expression:"personData.skin_color"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter skin color"},domProps:{value:e.personData.skin_color},on:{input:function(t){t.target.composing||e.$set(e.personData,"skin_color",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"eye_color"}},[e._v("Eye color")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.personData.eye_color,expression:"personData.eye_color"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter eye color"},domProps:{value:e.personData.eye_color},on:{input:function(t){t.target.composing||e.$set(e.personData,"eye_color",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"birth_year"}},[e._v("Birth year")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.personData.birth_year,expression:"personData.birth_year"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter birth year"},domProps:{value:e.personData.birth_year},on:{input:function(t){t.target.composing||e.$set(e.personData,"birth_year",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"gender"}},[e._v("Gender")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.personData.gender,expression:"personData.gender"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter gender"},domProps:{value:e.personData.gender},on:{input:function(t){t.target.composing||e.$set(e.personData,"gender",t.target.value)}}})]),r("div",{staticClass:"mt-4 mb-4 form-group d-flex justify-content-around"},[r("BaseButton",{attrs:{buttonTxt:"submit",buttonType:"success"}}),r("router-link",{attrs:{to:"/"}},[r("BaseButton",{attrs:{buttonTxt:"go back to home",buttonType:"primary"}})],1)],1)])])},J=[],U={name:"PersonPage",data:function(){return{endpoint:"https://swapi.dev/api/people/",personData:{}}},props:["id"],beforeRouteEnter:function(e,t,r){r(function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getPerson(t.id);case 2:t.personData=e.sent,t.isPersonEditable||r("/");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},methods:{getPerson:function(e){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.axios.get("".concat(t.endpoint).concat(e,"/"));case 3:return n=r.sent,r.abrupt("return",n.data);case 7:r.prev=7,r.t0=r["catch"](0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()}},editPerson:function(){console.log("edited person: ",this.personData)},computed:{isPersonEditable:function(){return"male"===this.personData.gender&&"blue"===this.personData.eye_color&&"19BBY"===this.personData.birth_year}}},W=U,z=Object(c["a"])(W,q,J,!1,null,"0258c0be",null),K=z.exports;o["a"].use(v["a"]);var Q=[{path:"/",redirect:{name:"HomePage"}},{path:"/person/:id",name:"PersonPage",component:K,props:!0},{path:"/home",name:"HomePage",component:L},{path:"*",name:"ErrorPage",component:G}],V=new v["a"]({routes:Q}),X=V,ee=(r("4989"),r("ab8b"),r("ecee")),te=r("c074"),re=r("ad3d"),ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{class:["btn","btn-"+e.buttonType],attrs:{type:"button"},on:{click:e.btnClicked}},[e._v(" "+e._s(e.buttonTxt)+" "),e.badgeTxt?r("span",{staticClass:"badge badge-light"},[e._v(e._s(e.badgeTxt))]):e._e()])},oe=[],ae={name:"BaseButton",props:{buttonTxt:{type:String,required:!0},badgeTxt:{type:[String,Number]},buttonType:{type:String,default:"secondary"}},methods:{btnClicked:function(){this.$emit("click")}}},ie=ae,se=Object(c["a"])(ie,ne,oe,!1,null,"7f0ded66",null),le=se.exports;o["a"].config.productionTip=!1,ee["c"].add(te["a"],te["b"],te["c"]),o["a"].component("font-awesome-icon",re["a"]),o["a"].component("font-awesome-layers",re["b"]),o["a"].component("BaseButton",le),[[h.a,f.a]].forEach((function(e){return o["a"].use.apply(o["a"],Object(n["a"])(e))})),new o["a"]({router:X,render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,r){},a2ce:function(e,t,r){"use strict";r("afa6")},afa6:function(e,t,r){},b1a1:function(e,t,r){},b21a:function(e,t,r){"use strict";r("b1a1")},d747:function(e,t,r){e.exports={blue:"#3876fc",red:"#f56642",orange:"#f0a326",yellow:"#f0d826",green:"#56de37",brown:"#964b00",pink:"hotpink",hazel:"#cbce86",gold:"gold",black:"#000"}},f3a1:function(e,t,r){}});
//# sourceMappingURL=app.f368193c.js.map