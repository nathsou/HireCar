import { UpdateSignInEmailAction, UPDATE_SIGNIN_EMAIL_INPUT, UpdateSignInPasswordAction, UPDATE_SIGNIN_PASSWORD_INPUT, SubmitSignInAction, SUBMIT_SIGNIN_FORM, SignInSentAction, SIGNIN_FORM_SENT, SIGNIN_FORM_RECEIVED, SignInReceivedAction, SignInActionTypes, SignInFormDataState, UpdateSignInPasswordErrorAction, UPDATE_SIGNIN_PASSWORD_ERROR, UpdateSignInEmailErrorAction, UPDATE_SIGNIN_EMAIL_ERROR, ResetSignInAction, RESET_SIGNIN_FORM } from "./types";
import { Dispatch } from "react";
import Axios, { AxiosResponse, AxiosError } from "axios";
import bcrypt from "bcryptjs";
import { toggleShowModal } from "../navbar/actions";
import { setUserLogged } from "../user/actions";
import { UserDataState } from "../user/types";
import { setUserProfileInfo } from "../userProfile/userProfileInfoTab/actions";
import { UserProfileInfoFormDataState } from "../userProfile/userProfileInfoTab/types";
import { setUserProfileCarOwner } from "../userProfile/userProfileCarTab/actions";

export function updateSignInEmailInput(value: string): UpdateSignInEmailAction {
    return {
        type: UPDATE_SIGNIN_EMAIL_INPUT,
        value
    };
}

export function updateSignInPasswordInput(value: string): UpdateSignInPasswordAction {
    return {
        type: UPDATE_SIGNIN_PASSWORD_INPUT,
        value
    }
}

export function updateSignInEmailErrorInput(error: string): UpdateSignInEmailErrorAction {
    return {
        type: UPDATE_SIGNIN_EMAIL_ERROR,
        error
    }
}

export function updateSignInPasswordErrorInput(error: string): UpdateSignInPasswordErrorAction {
    return {
        type: UPDATE_SIGNIN_PASSWORD_ERROR,
        error
    }
}

export function submitSignInForm(): SubmitSignInAction {
    return {
        type: SUBMIT_SIGNIN_FORM
    }
}

export function signInFormSent(): SignInSentAction {
    return {
        type: SIGNIN_FORM_SENT
    };
}

export function signUpFormReceived(): SignInReceivedAction {
    return {
        type: SIGNIN_FORM_RECEIVED
    };
}

export function resetSignUpForm(): ResetSignInAction {
    return {
        type: RESET_SIGNIN_FORM
    }
}

export function postSignInForm(data: SignInFormDataState) {
    const salt = (process.env.REACT_APP_BCRYPT_SALT as string).replace(/_/g, '$');


    return (dispatch: Dispatch<SignInActionTypes>) => {
        dispatch(signInFormSent());

        bcrypt.hash(data.password, salt as string)
            .then(hashed_pwd => {

                const user_data: { [index: string]: string; } = {};

                Object.keys(data).forEach(key => {
                    user_data[key] = key === 'password' ? hashed_pwd : data[key];
                });

                Axios.post(`${process.env.REACT_APP_HIRECAR_API_URI}/login`, user_data)
                    .then((res: AxiosResponse) => {

                        const filtered_keys = Object.keys(res.data)
                            .filter(key => key !== "password");

                        const sent_data = {} as UserDataState;
                        filtered_keys.forEach(key => {
                            sent_data[key as keyof UserDataState] = res.data[key];
                        });

                        const user_profile_data = {} as UserProfileInfoFormDataState;
                        filtered_keys.forEach(key => {
                            user_profile_data[key as keyof UserProfileInfoFormDataState] = res.data[key];
                        });

                        dispatch(setUserLogged(sent_data));
                        dispatch(setUserProfileInfo(user_profile_data));
                        dispatch(setUserProfileCarOwner(user_profile_data.id));
                        dispatch(toggleShowModal(false));
                        dispatch(resetSignUpForm());
                        dispatch(signUpFormReceived());

                    }).catch((error: AxiosError) => {
                        const response = error.response;
                        if (response !== undefined && response.status === 400) {
                            const { email_error, password_error } = response.data;
                            if (email_error) {
                                dispatch(updateSignInEmailErrorInput(email_error));
                            }
                            if (password_error) {
                                dispatch(updateSignInPasswordErrorInput(password_error));
                            }
                        }
                    });
            })
    }
}