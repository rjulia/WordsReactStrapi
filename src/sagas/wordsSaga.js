import {takeEvery, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/wordsActions';
import * as api from '../api/wordsApi';

function* getWords(){
	try{
		const result = yield call(api.getWords);
		console.log(result.data)
		yield put(actions.getUsersSuccess({
			items: result.data
		}));
	}catch(e){
		console.log(e);
	}
}

function* watchGetWordsRequest(){
	yield takeEvery(actions.Types.GET_WORDS_REQUEST, getWords);
}

const wordsSagas = [
	fork(watchGetWordsRequest)
];

export default wordsSagas;