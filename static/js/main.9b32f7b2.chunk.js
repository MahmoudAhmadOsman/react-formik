(this["webpackJsonpreact-formik"]=this["webpackJsonpreact-formik"]||[]).push([[0],{14:function(e,a,n){e.exports=n(26)},19:function(e,a,n){},20:function(e,a,n){},21:function(e,a,n){},26:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(10),o=n.n(l),m=(n(19),n(20),n(21),n(13));var i=function(){var e=Object(m.a)({initialValues:{name:"",email:"",phone:""},onSubmit:function(e){alert(JSON.stringify(e)),console.log(e)},validate:function(e){var a={};return e.name?e.name.length<3&&(a.name="Name must be more than 3 characters!"):a.name="Name is required!",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address!"):a.email="Email is required!",e.phone?e.phone.length<10&&(a.phone="Phone number should be at least 10 digit numbers!"):a.phone="Phone is required!",a}});return console.log("form errors",e.errors),r.a.createElement("section",{className:"main_formik"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("h1",{className:"text-primary"},"Contact Us")," ",r.a.createElement("hr",null),r.a.createElement("label",{htmlFor:"name"},"Full Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",id:"name",placeholder:"Enter your name",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.name}),e.touched.name&&e.errors.name?r.a.createElement("div",{className:"text-danger"},e.errors.name):null,r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{type:"text",className:"form-control",name:"email",id:"email",placeholder:"Enter your email address",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email}),e.touched.email&&e.errors.email?r.a.createElement("div",{className:"text-danger"},e.errors.email):null,r.a.createElement("label",{htmlFor:"phone"},"Phone Number"),r.a.createElement("input",{type:"text",className:"form-control",name:"phone",id:"phone",placeholder:"Enter your phone number ex. (555)-555-5555",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.phone}),e.touched.phone&&e.errors.phone?r.a.createElement("div",{className:"text-danger"},e.errors.phone):null,r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},r.a.createElement("b",null,"SUBMIT"))))),r.a.createElement("p",{className:"copy-right"},"\xa9 Copyright ",(new Date).getFullYear(),". All Rights Reserved. Mahmoud Osman")))};var c=function(){return r.a.createElement("div",null,r.a.createElement(i,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.9b32f7b2.chunk.js.map