import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */const l="feedback-form-state",t={email:"",message:""},a=document.querySelector(".feedback-form"),{email:o,message:r}=a.elements;a.addEventListener("input",m);a.addEventListener("submit",i);function m(e){const s=e.target.name;t[s]=e.target.value.trim(),localStorage.setItem(l,JSON.stringify(t))}function n(){const e=JSON.parse(localStorage.getItem(l));e&&(o.value=e.email,r.value=e.message,t.email=e.email,t.message=e.message)}n();function i(e){if(e.preventDefault(),r.value===""||o.value===""){alert("Please fill in all the fields");return}console.log(t),localStorage.removeItem(l),a.reset()}
//# sourceMappingURL=commonHelpers2.js.map