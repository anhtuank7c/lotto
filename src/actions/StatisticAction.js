import {
    STATISTIC_UPDATE
} from './types';

export const updateStatistic = ({ win, play }) => {
    return (dispatch) => {
        dispatch({
            type: STATISTIC_UPDATE,
            win,
            play
        });
    };
};
