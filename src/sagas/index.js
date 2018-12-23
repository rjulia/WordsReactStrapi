import wordsSaga from './wordsSaga';
import {all} from 'redux-saga/effects';

export default function* rootSaga(){
	yield all([
		...wordsSaga
	]);
}