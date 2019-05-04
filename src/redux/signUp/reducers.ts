import { defaultSignUpState, SignUpState, UPDATE_FIRSTNAME_INPUT, SignUpActionTypes, UPDATE_LASTNAME_INPUT, UPDATE_EMAIL_INPUT, UPDATE_PHONE_INPUT, UPDATE_PASSWORD_INPUT, SUBMIT_SIGNUP_FORM } from "./types";


export function signUpReducer(
    state = defaultSignUpState,
    action: SignUpActionTypes
): SignUpState {

    let isValid = true;

    switch (action.type) {
        case UPDATE_FIRSTNAME_INPUT:
            isValid = action.value.length >= 2;
            return {
                ...state,
                firstname: action.value,
                formErrors: { ...state.formErrors, firstnameError: isValid ? '' : 'Le prénom doit contenir au moins 2 caractères' }
            };
        case UPDATE_LASTNAME_INPUT:
            isValid = action.value.length >= 2;
            return {
                ...state,
                lastname: action.value,
                formErrors: { ...state.formErrors, lastnameError: isValid ? '' : 'Le nom doit contenir au moins 2 caractères' }
            };
        case UPDATE_EMAIL_INPUT:
            isValid = /[A-Za-z0-9._-]*@[A-Za-z0-9]*.[A-Za-z]{2,4}/.test(action.value);
            return {
                ...state,
                email: action.value,
                formErrors: { ...state.formErrors, emailError: isValid ? '' : 'Veuillez entrer une adresse email valide' }
            };
        case UPDATE_PHONE_INPUT:
            isValid = /(\d\d){4}\d\d/.test(action.value);
            return {
                ...state,
                phone: action.value,
                formErrors: { ...state.formErrors, phoneError: isValid ? '' : 'Veuillez entrer un numéro valide' }
            };
        case UPDATE_PASSWORD_INPUT:
            isValid = action.value.length >= 3;
            return {
                ...state,
                password: action.value,
                formErrors: { ...state.formErrors, passwordError: isValid ? '' : 'Le mot de passe doit contenir au moins 3 caractères' }
            };
        case SUBMIT_SIGNUP_FORM:
            const { firstname, lastname, email, phone, password } = state;
            isValid = (Object
                .keys(state.formErrors)
                .every(key => state.formErrors[key] === '')) &&
                ([
                    firstname,
                    lastname,
                    email,
                    phone,
                    password
                ].every(field => field !== ''));

            return {
                ...state,
                validForm: isValid ? true : false
            };
        default:
            return state;
    }

}