exports.validateUserSignup = (signupData) => {
    let {
        firstname,
        lastname,
        email,
        phone,
        city,
        password,
        role
    } = signupData;

    let validationErrors = [];

    if(!firstname || !lastname || !email || !phone || !city || !password || !role) {
        if(!firstname) {
            validationErrors.push('Firstname is required.');
        }

        if(!lastname) {
            validationErrors.push('Lastname is required.');
        }

        if(!email) {
            validationErrors.push('Email is required.');
        }

        if(!phone) {
            validationErrors.push('Phone number is required.');
        }

        if(!city) {
            validationErrors.push('City is required.');
        }

        if(!password) {
            validationErrors.push('Password is required.');
        }

        if(!role) {
            validationErrors.push('Please choose if you want a driver account or a rider account.');
        }
    }

    if(firstname.length < 3) {
        validationErrors.push('Your firstname must have at leat 3 characters.');
    }

    if(lastname.length < 3) {
        validationErrors.push('Your lastname must have at leat 3 characters.');
    }

    const regularExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regularExp.test(email)) {
        validationErrors.push('Please enter a valid email.');
    }

    if(phone.length !== 8) {
        validationErrors.push('Your phone number is less than 8 numbers.');
    }

    const validPhoneinitials = ['9', '2', '3', '5' , '4'];
    if(!validPhoneinitials.includes(phone.substring(0, 1))) {
        validationErrors.push('Please enter a valid phone number.');
    }

    return validationErrors;
}