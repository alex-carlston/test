export const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
};

export const validateNewsletterForm = (email) => {
    if (!email) {
        return 'Please enter your email address.';
    }
    if (!isValidEmail(email)) {
        return 'Please enter a valid email address.';
    }
    return null; // No errors
};