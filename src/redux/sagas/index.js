import { takeEvery, put, call, fork } from 'redux-saga/effects';

async function swapiGet(query) {
    const request = await fetch(`https://www.swapi.tech/api/${query}`);
    return  await request.json();

}

// export function* workerSaga() {
//     const people = yield call(swapiGet, 'people');
//     const planets = yield call(swapiGet, 'planets');
//
//     yield put({type: 'SET_PEOPLE', payload: people.results});
//     yield put({type: 'SET_PLANETS', payload: planets.results});
//
// }
export function* loadPeople() {
    const people = yield call(swapiGet, 'people');
    yield put({type: 'SET_PEOPLE', payload: people.results});
}

export function* loadPlanets() {
    const planets = yield call(swapiGet, 'planets');
    yield put({type: 'SET_PLANETS', payload: planets.results});
}
export function* workerSaga() {
    yield fork(loadPeople);
    yield fork(loadPlanets)
}

export function* watchClickSaga() {
yield takeEvery('LOAD_DATA', workerSaga);


}

export default function* rootSaga() {
    yield watchClickSaga()

}