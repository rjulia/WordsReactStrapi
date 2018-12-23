import {combineReducers} from 'redux';
import WordsReducer from './wordsReducers';

export default combineReducers({
	words: WordsReducer
});