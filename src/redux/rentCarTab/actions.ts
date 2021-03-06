import { SET_RENT_CAR_SEARCH_INPUT, SetCarSearchAction, SET_RENT_CAR_SEARCH_START_DAY, SET_RENT_CAR_SEARCH_END_DAY, SetRentCarSearchStartDayAction, SetRentCarSearchEndDayAction, SetRentCarSearchStartTimeAction, SetRentCarSearchEndTimeAction, SET_RENT_CAR_SEARCH_END_TIME, SET_RENT_CAR_SEARCH_START_TIME } from "./types";

export function setCarSearchInput(value: string): SetCarSearchAction {
    return {
        type: SET_RENT_CAR_SEARCH_INPUT,
        value
    };
}

export function setRentCarSearchStartDay(day: string): SetRentCarSearchStartDayAction {
    return {
        type: SET_RENT_CAR_SEARCH_START_DAY,
        day
    };
}

export function setRentCarSearchEndDay(day: string): SetRentCarSearchEndDayAction {
    return {
        type: SET_RENT_CAR_SEARCH_END_DAY,
        day
    };
}

export function setRentCarSearchStartTime(time: string): SetRentCarSearchStartTimeAction {
    return {
        type: SET_RENT_CAR_SEARCH_START_TIME,
        time
    };
}

export function setRentCarSearchEndTime(time: string): SetRentCarSearchEndTimeAction {
    return {
        type: SET_RENT_CAR_SEARCH_END_TIME,
        time
    };
}