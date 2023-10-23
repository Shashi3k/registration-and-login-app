function LoginValidation(values){
    let error ={}

    if (values.email === ""){
        error.email = "Email cannot be empty"
    }
    else{
        error.email = ""
    }

    if (values.password === ""){
        error.password = "Password cannot be empty"
    }
    else{
        error.password = ""
    }

    return error;
}

export default LoginValidation;