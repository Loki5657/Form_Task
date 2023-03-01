import * as Constants from './constants'

export function isEmailValid(email) {
    let emailRegex = Constants.EMAIL_REGEX;
        return emailRegex.test(email);
}


