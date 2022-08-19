import {
    SET_MARGIN
} from "./types";

export const changeMargin = (margin) => {
    return {
        type: SET_MARGIN,
        payload: margin
    };
};