(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={appWrapper:"App_appWrapper__1Jb1a"}},2:function(t,e,n){t.exports={form:"ContactForm_form__2WA3Y",label:"ContactForm_label__2GXv4",text:"ContactForm_text__3NlnY",form__btn:"ContactForm_form__btn__34sqC"}},22:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(10),s=n.n(c),o=(n(22),n(16)),i=n(9),l=n(11),u=n.n(l),b=n(12),m=n(6),j=n(13),d=n(14),p=n(17),f=n(15),h=n(2),_=n.n(h),O=n(0),x=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(m.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact(Object(b.a)({},t.state)),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("form",{className:_.a.form,onSubmit:this.handleSubmit,children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsxs)("label",{className:_.a.label,children:[Object(O.jsx)("span",{className:_.a.text,children:"Name"}),Object(O.jsx)("input",{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(O.jsxs)("label",{className:_.a.label,children:[Object(O.jsx)("span",{className:_.a.text,children:"Number"}),Object(O.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(O.jsx)("button",{className:_.a.form__btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=x,v=n(4),g=n.n(v),N=function(t){var e=t.contacts,n=t.onDelete;return Object(O.jsx)("ul",{className:g.a.list,children:e.map((function(t){var e=t.name,a=t.number,r=t.id;return Object(O.jsxs)("li",{className:g.a.items,children:[Object(O.jsxs)("p",{className:g.a.text,children:[e,": ",a]}),Object(O.jsx)("button",{className:g.a.delete_btn,type:"button",onClick:function(){return n(r)},children:"Delete"})]},r)}))})},w=n(26),S=n(8),y=n.n(S),k=function(t){var e=t.value,n=t.onChange;return Object(O.jsxs)("label",{className:y.a.filter,children:[Object(O.jsx)("span",{children:"Find contacts by name"}),Object(O.jsx)("input",{className:y.a.filter__input,type:"text",value:e,onChange:n})]})};var A=function(){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:[]})),e=Object(i.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),l=s[0],b=s[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var m=function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)||e.number.includes(l)}))}();return Object(O.jsxs)("div",{className:u.a.appWrapper,children:[Object(O.jsx)(C,{addContact:function(t){var e=t.name,a=t.number,c={id:Object(w.a)(),name:e,number:a},s=e.toLowerCase();n.some((function(t){return t.name.toLowerCase()===s}))?alert("".concat(e," is already in contacts.")):r((function(t){return[c].concat(Object(o.a)(t))}))}}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(k,{value:l,onChange:function(t){b(t.currentTarget.value)}}),Object(O.jsx)(N,{contacts:m,onDelete:function(t){r((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(A,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={list:"ContactList_list__NSthV",items:"ContactList_items__ZgNWB",text:"ContactList_text__kW4xd",delete_btn:"ContactList_delete_btn__oYjmf"}},8:function(t,e,n){t.exports={filter:"Filter_filter__3doo_",filter__input:"Filter_filter__input__3VkXO"}}},[[24,1,2]]]);
//# sourceMappingURL=main.9de595c1.chunk.js.map