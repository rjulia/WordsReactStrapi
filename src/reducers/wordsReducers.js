import {Types} from '../actions/wordsActions';

const INITIAL_STATE = {
    items: []
};

export default function words(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_WORDS_SUCCESS: {
            return {
                items: action.payload.items
            }
        }
        default: {
            return state;
        }
    }
}