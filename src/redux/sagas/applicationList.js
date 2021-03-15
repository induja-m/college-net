import { takeEvery, call, put, cancelled, takeLatest, take, fork, cancel } from 'redux-saga/effects';
import { FETCH_STUDENTS_APPLICATION_LIST } from '../actions/actionTypes';
import { getData } from '../../components/api/api';
import { fetchStudentApplicationListSuccess, fetchStudentApplicationListError } from '../actions/studentsHomeActions';
import axios from 'axios';
//worker saga

export function* applicationWorkerSaga(action) {
    const source = axios.CancelToken.source();
    try {
        let response = yield call(getData, action.filterKey,{CancelToken: source.token});
        console.log("fetched appoinments list from sagas", response);
        if (response?.data.length) {
            yield put(fetchStudentApplicationListSuccess(response.data));
        } else {
            yield put(fetchStudentApplicationListSuccess([]));
        }
    } catch (err) {
        yield put(fetchStudentApplicationListError("error", err.message))
    } finally {
        if(yield cancelled()){
            console.log("cancelled");
            source.cancel("Cancelling");
        }
    }
}

//watcher saga

export function* applicationWatcherSaga() {
    // yield takeEvery(FETCH_STUDENTS_APPLICATION_LIST, applicationWorkerSaga)  //similar to thunk
    yield takeLatest(FETCH_STUDENTS_APPLICATION_LIST, applicationWorkerSaga)
}

// export function* applicationListSaga(){
//     while(true){
//         yield take(FETCH_STUDENTS_APPLICATION_LIST)
// const t1 = yield fork(applicationWatcherSaga); //yiles call(applictonWatcherSaga)

// const pageLeaveActip = yield take(PAGE_LEAVE_ACTION);
// if(pageLeaveAction.type == PAGE_LEAVE_ACTION){
// yield cancel(t1);
// }
//     }
// }