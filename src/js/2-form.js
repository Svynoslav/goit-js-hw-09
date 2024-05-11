"use strict";

const LSform = "feedback-form-state";
const formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");
const { email, message } = form.elements;
form.addEventListener("input", inputHandler);
form.addEventListener("submit", submitHandler);

function inputHandler(event) {
    const key = event.target.name;
    formData[key] = event.target.value.trim();
    localStorage.setItem (LSform, JSON.stringify(formData));
}

function popForm() {
    const data = JSON.parse(localStorage.getItem(LSform));
    
    if(!data) {
        return;
    }

    email.value = data.email;
    message.value = data.message;
}
popForm();

function submitHandler(event) {
    event.preventDefault();

    if(message.value === "" || email.value === "") {
        alert("Please fill in all the fields");
        return;
    }

    console.log(formData);
    localStorage.removeItem(LSform);
    form.reset();
}

