export interface UserProfileFormDataState {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    password: string,
    confirm_password: string
}

export interface UserProfileTabState {
    form_data: UserProfileFormDataState,
    form_errors: {
        firstname_error: string,
        lastname_error: string,
        email_error: string,
        phone_error: string,
        password_error: string,
        confirm_password_error: string,
        [key: string]: string
    },
    valid_form: boolean,
    sending: boolean,
    editing: boolean
}

export const defaultUserProfileTabState: UserProfileTabState = {
    form_data: {
        id: 0,
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        confirm_password: ''
    },
    form_errors: {
        firstname_error: '',
        lastname_error: '',
        email_error: '',
        phone_error: '',
        password_error: '',
        confirm_password_error: '',
    },
    valid_form: false,
    sending: false,
    editing: false
}

export const SET_USER_PROFILE = "SET_USER_PROFILE";
export interface SetUserProfileAction {
    type: typeof SET_USER_PROFILE,
    user: UserProfileFormDataState
}

export const UPDATE_USER_PROFILE_FIRSTNAME_INPUT = "UPDATE_USER_PROFILE_FIRSTNAME_INPUT";
export interface UpdateUserProfileFirstnameAction {
    type: typeof UPDATE_USER_PROFILE_FIRSTNAME_INPUT,
    value: string
}

export const UPDATE_USER_PROFILE_LASTNAME_INPUT = "UPDATE_USER_PROFILE_LASTNAME_INPUT";
export interface UpdateUserProfileLastnameAction {
    type: typeof UPDATE_USER_PROFILE_LASTNAME_INPUT,
    value: string
}

export const UPDATE_USER_PROFILE_EMAIL_INPUT = "UPDATE_USER_PROFILE_EMAIL_INPUT";
export interface UpdateUserProfileEmailAction {
    type: typeof UPDATE_USER_PROFILE_EMAIL_INPUT,
    value: string
}

export const UPDATE_USER_PROFILE_PHONE_INPUT = "UPDATE_USER_PROFILE_PHONE_INPUT";
export interface UpdateUserProfilePhoneAction {
    type: typeof UPDATE_USER_PROFILE_PHONE_INPUT,
    value: string
}

export const UPDATE_USER_PROFILE_PASSWORD_INPUT = "UPDATE_USER_PROFILE_PASSWORD_INPUT";
export interface UpdateUserProfilePasswordAction {
    type: typeof UPDATE_USER_PROFILE_PASSWORD_INPUT,
    value: string
}

export const UPDATE_USER_PROFILE_CONFIRMPASSWORD_INPUT = "UPDATE_USER_PROFILE_CONFIRMPASSWORD_INPUT";
export interface UpdateUserProfileConfirmPasswordAction {
    type: typeof UPDATE_USER_PROFILE_CONFIRMPASSWORD_INPUT,
    value: string
}

export const SUMBIT_USER_PROFILE = "SUMBIT_USER_PROFILE";
export interface SubmitUserProfileAction {
    type: typeof SUMBIT_USER_PROFILE
}

export const USER_PROFILE_FORM_SENT = "USER_PROFILE_FORM_SENT";
export interface UserProfileSentAction {
    type: typeof USER_PROFILE_FORM_SENT
}

export const USER_PROFILE_FORM_RECEIVED = "USER_PROFILE_FORM_RECEIVED";
export interface UserProfileReceivedAction {
    type: typeof USER_PROFILE_FORM_RECEIVED
}


export type UserProfileActionTypes = SetUserProfileAction | UpdateUserProfileFirstnameAction | UpdateUserProfileLastnameAction | UpdateUserProfileEmailAction | UpdateUserProfilePhoneAction | UpdateUserProfilePasswordAction | UpdateUserProfileConfirmPasswordAction | SubmitUserProfileAction | UserProfileSentAction | UserProfileReceivedAction;
