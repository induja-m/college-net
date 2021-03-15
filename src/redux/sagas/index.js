import {all} from 'redux-saga/effects';
import {applicationWatcherSaga} from './applicationList';

export function* rootSaga(){
    yield all([
        applicationWatcherSaga()
    ])
}