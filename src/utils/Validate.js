import React from 'react'

export const Validate = (email,password,isSignInForm,name) => {

    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isValidEmail) return "Email is not valid";
    if(!isPasswordValidation) return "Password is not valid";

    if(!isSignInForm){
        const isNameVlidation = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
        if(!isNameVlidation) return "Username is not valid"
    }
    
    return null;

}
