import { ActionConst } from 'react-native-router-flux';

const INITIAL = {
    scene: {}
};
export default (state = INITIAL, action) => {
    switch (action.type) {
        case ActionConst.FOCUS:
            return { ...state, scene: action.scene };
        default:
            return state;
    }
};
