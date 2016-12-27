import {
    DRAWER_OPEN,
    DRAWER_CLOSE
} from './types';

export const openDrawer = () => (dispatch) => {
    dispatch({
        type: DRAWER_OPEN
    });
};

export const closeDrawer = () => (dispatch) => {
    dispatch({
        type: DRAWER_CLOSE
    });
};
