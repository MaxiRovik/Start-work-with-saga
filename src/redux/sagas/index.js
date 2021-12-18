import {take, takeEvery} from 'redux-saga/effects';

export function* workerSaga() {
    console.log('click has been fixed')
}

export function* watchClickSaga() {
yield takeEvery('CLICK', workerSaga);


}

export default function* rootSaga() {
    yield watchClickSaga()

}