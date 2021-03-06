import { RawCar } from "../../../Utils";
import { Car, Fuel, Gearbox } from "../../carSearch/types";

export interface UserProfileCarFeaturesState {
    fuel: Fuel[],
    gearbox: Gearbox[]
}

export interface UserProfileCarsState {
    cars: Car[],
    fetching: boolean,
    selected_car_id: number
}

export interface UserProfileTabCarState {
    form_data: RawCar,
    form_errors: {
        model_error: string,
        price_error: string,
        [key: string]: string
    },
    car_features: UserProfileCarFeaturesState,
    cars_data: UserProfileCarsState,
    show_form: boolean,
    valid_form: boolean,
    submit_form: boolean,
    sending: boolean,
    saving: boolean,
    editing: boolean,
    show_delete_car_modal: boolean,
    deleting: boolean
}

export const defaultUserProfileTabCarState: UserProfileTabCarState = {
    form_data: {
        id: '',
        owner_id: '',
        model: '',
        price_per_day: '',
        gearbox: {
            id: '1',
            type: "Automatique"
        },
        fuel: {
            id: '1',
            type: "Essence"
        },
        seats: '2',
        doors: '2'
    },
    form_errors: {
        model_error: '',
        price_error: '',
    },
    car_features: {
        fuel: [
            {
                id: 1,
                type: 'Essence'
            },
            {
                id: 2,
                type: 'Diesel'
            },
            {
                id: 3,
                type: 'GPL'
            },
            {
                id: 4,
                type: 'Électrique'
            },
            {
                id: 5,
                type: 'Hybride'
            }
        ],
        gearbox: [
            {
                id: 1,
                type: 'automatique'
            },
            {
                id: 2,
                type: 'manuelle'
            }
        ]
    },
    cars_data: {
        cars: [],
        fetching: false,
        selected_car_id: 0,
    },
    show_form: false,
    valid_form: false,
    submit_form: false,
    sending: false,
    saving: false,
    editing: false,
    show_delete_car_modal: false,
    deleting: false
}

export const USER_PROFILE_CAR_FEATURES_SENT = "USER_PROFILE_CAR_FEATURES_SENT";
export interface UserProfileCarFeaturesSentAction {
    type: typeof USER_PROFILE_CAR_FEATURES_SENT
}

export const USER_PROFILE_CAR_FEATURES_RECEIVED = "USER_PROFILE_CAR_FEATURES_RECEIVED";
export interface UserProfileCarFeaturesReceivedAction {
    type: typeof USER_PROFILE_CAR_FEATURES_RECEIVED,
    data: UserProfileCarFeaturesState
}

export const UPDATE_USER_PROFILE_CAR_MODEL_INPUT = "UPDATE_USER_PROFILE_CAR_MODEL_INPUT";
export interface UpdateUserProfileCarModelAction {
    type: typeof UPDATE_USER_PROFILE_CAR_MODEL_INPUT,
    value: string
}

export const UPDATE_USER_PROFILE_CAR_PRICE_INPUT = "UPDATE_USER_PROFILE_CAR_PRICE_INPUT";
export interface UpdateUserProfileCarPriceAction {
    type: typeof UPDATE_USER_PROFILE_CAR_PRICE_INPUT,
    value: string
}

export const UPDATE_USER_PROFILE_CAR_GEARBOX_SELECT = "UPDATE_USER_PROFILE_CAR_GEARBOX_SELECT";
export interface UpdateUserProfileCarGearboxAction {
    type: typeof UPDATE_USER_PROFILE_CAR_GEARBOX_SELECT,
    value: number
}

export const UPDATE_USER_PROFILE_CAR_FUEL_SELECT = "UPDATE_USER_PROFILE_CAR_FUEL_SELECT";
export interface UpdateUserProfileCarFuelAction {
    type: typeof UPDATE_USER_PROFILE_CAR_FUEL_SELECT,
    value: number
}

export const UPDATE_USER_PROFILE_CAR_SEATS_SELECT = "UPDATE_USER_PROFILE_CAR_SEATS_SELECT";
export interface UpdateUserProfileCarSeatsAction {
    type: typeof UPDATE_USER_PROFILE_CAR_SEATS_SELECT,
    value: number
}

export const UPDATE_USER_PROFILE_CAR_DOORS_SELECT = "UPDATE_USER_PROFILE_CAR_DOORS_SELECT";
export interface UpdateUserProfileCarDoorsAction {
    type: typeof UPDATE_USER_PROFILE_CAR_DOORS_SELECT,
    value: number
}

export const SUMBIT_USER_PROFILE_CAR = "SUMBIT_USER_PROFILE_CAR";
export interface SubmitUserProfileCarAction {
    type: typeof SUMBIT_USER_PROFILE_CAR
}

export const TOGGLE_USER_PROFILE_CAR_FORM = "TOGGLE_USER_PROFILE_CAR_FORM";
export interface ToggleUserProfileCarFormAction {
    type: typeof TOGGLE_USER_PROFILE_CAR_FORM
}

export const USER_PROFILE_CAR_FORM_SENT = "USER_PROFILE_CAR_FORM_SENT";
export interface UserProfileCarSentAction {
    type: typeof USER_PROFILE_CAR_FORM_SENT
}

export const USER_PROFILE_CAR_FORM_RECEIVED = "USER_PROFILE_CAR_FORM_RECEIVED";
export interface UserProfileCarReceivedAction {
    type: typeof USER_PROFILE_CAR_FORM_RECEIVED,
    data: Car,
    id: number
}

export const SET_USER_PROFILE_CAR_OWNER = "SET_USER_PROFILE_CAR_OWNER";
export interface SetUserProfileCarOwnerAction {
    type: typeof SET_USER_PROFILE_CAR_OWNER,
    id: string
}

export const USER_PROFILE_CAR_SAVED = "USER_PROFILE_CAR_SAVED";
export interface UserProfileCarSavedAction {
    type: typeof USER_PROFILE_CAR_SAVED
}

export const RESET_USER_PROFILE_CAR_FORM = "RESET_USER_PROFILE_CAR_FORM";
export interface ResetUserProfileCarFormAction {
    type: typeof RESET_USER_PROFILE_CAR_FORM
}

export const USER_PROFILE_CARS_SENT = "USER_PROFILE_CARS_SENT";
export interface UserProfileCarsSentAction {
    type: typeof USER_PROFILE_CARS_SENT
}

export const USER_PROFILE_CARS_RECEIVED = "USER_PROFILE_CARS_RECEIVED";
export interface UserProfileCarsReceivedAction {
    type: typeof USER_PROFILE_CARS_RECEIVED,
    cars: Car[]
}

export const UPDATE_USER_PROFILE_CAR = "UPDATE_USER_PROFILE_CAR";
export interface UpdateUserProfileCarAction {
    type: typeof UPDATE_USER_PROFILE_CAR,
    id: number
}

export const UPDATE_USER_PROFILE_CAR_SENT = "UPDATE_USER_PROFILE_CAR_SENT";
export interface UpdateUserProfileCarSentAction {
    type: typeof UPDATE_USER_PROFILE_CAR_SENT
}

export const UPDATE_USER_PROFILE_CAR_RECEIVED = "UPDATE_USER_PROFILE_CAR_RECEIVED";
export interface UpdateUserProfileCarReceivedAction {
    type: typeof UPDATE_USER_PROFILE_CAR_RECEIVED,
    data: Car
}

export const DELETE_USER_PROFILE_CAR = "DELETE_USER_PROFILE_CAR";
export interface DeleteUserProfileCarAction {
    type: typeof DELETE_USER_PROFILE_CAR,
    id: number
}

export const CANCEL_DELETE_USER_PROFILE_CAR = "CANCEL_DELETE_USER_PROFILE_CAR";
export interface CancelDeleteUserProfileCarAction {
    type: typeof CANCEL_DELETE_USER_PROFILE_CAR
}

export const DELETE_USER_PROFILE_CAR_SENT = "DELETE_USER_PROFILE_CAR_SENT";
export interface DeleteUserProfileCarSentAction {
    type: typeof DELETE_USER_PROFILE_CAR_SENT
}

export const DELETE_USER_PROFILE_CAR_RECEIVED = "DELETE_USER_PROFILE_CAR_RECEIVED";
export interface DeleteUserProfileCarReceivedAction {
    type: typeof DELETE_USER_PROFILE_CAR_RECEIVED,
    id: number
}

export const TOGGLE_USER_PROFILE_CAR_MODAL = "TOGGLE_USER_PROFILE_CAR_MODAL";
export interface ToggleUserProfileCarModalAction {
    type: typeof TOGGLE_USER_PROFILE_CAR_MODAL,
    show: boolean
}

export type UserProfileCarActionTypes =
    ToggleUserProfileCarFormAction |
    UpdateUserProfileCarModelAction |
    UpdateUserProfileCarPriceAction |
    UpdateUserProfileCarGearboxAction |
    UpdateUserProfileCarFuelAction |
    UpdateUserProfileCarSeatsAction |
    UpdateUserProfileCarDoorsAction |
    SubmitUserProfileCarAction |
    UserProfileCarSentAction |
    UserProfileCarReceivedAction |
    SetUserProfileCarOwnerAction |
    UserProfileCarFeaturesSentAction |
    UserProfileCarFeaturesReceivedAction |
    UserProfileCarSavedAction |
    ResetUserProfileCarFormAction |
    UserProfileCarsSentAction |
    UserProfileCarsReceivedAction |
    UpdateUserProfileCarAction |
    UpdateUserProfileCarSentAction |
    UpdateUserProfileCarReceivedAction |
    DeleteUserProfileCarAction |
    DeleteUserProfileCarSentAction |
    DeleteUserProfileCarReceivedAction |
    CancelDeleteUserProfileCarAction |
    ToggleUserProfileCarModalAction;