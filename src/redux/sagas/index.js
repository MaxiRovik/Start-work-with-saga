import { takeEvery, put, call, spawn, join} from 'redux-saga/effects';

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

    return people;
}

export function* loadPlanets() {
    const planets = yield call(swapiGet, 'planets');
    yield put({type: 'SET_PLANETS', payload: planets.results});
}
export function* workerSaga() {
    const task = yield spawn(loadPeople);
    yield spawn(loadPlanets);
    const people = yield join(task);
    console.log('finish parallel tasks', people)
}

export function* watchLoadDataSaga() {
yield takeEvery('LOAD_DATA', workerSaga);


}

export default function* rootSaga() {
    yield watchLoadDataSaga()

}