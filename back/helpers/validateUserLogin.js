validateUserLogin = (LoginData) => {

    let {
        email,
        password,
        role
    } = LoginData;

    let validationErrors = [];

    if(!email) {
        validationErrors.push('Email is required');
    } else {
        const regularExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(!regularExp.test(email)) {
            validationErrors.push('Please enter a valid email.');
        }
    }

    if(!password) {
        validationErrors.push('Password is required');
    }

    if(!role) {
        validationErrors.push('The account type is missing');
    } else {
        if(role != 'rider' && role != 'driver') {
            validationErrors.push('The account type is invalid');
        }
    }

    return validationErrors;
}

module.exports = validateUserLogin;
