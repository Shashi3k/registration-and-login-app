function SignupValidation(values){
    let error ={}

    if (values.name === ""){
        error.name = "Name cannot be empty"
    }
    else{
        error.name = ""
    }

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

export default SignupValidation;