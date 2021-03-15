import { cancel, takeLatest } from "redux-saga/effects";
import { FETCH_STUDENTS_APPLICATION_LIST } from "../../redux/actions/actionTypes";
import { applicationWatcherSaga, applicationWorkerSaga } from "../../redux/sagas/applicationList"
import * as api from '../../components/api/api';
import { runSaga } from "redux-saga";
import { fetchStudentApplicationListError,fetchStudentApplicationListSuccess } from "../../redux/actions/studentsHomeActions";
// import {} from '@redux-saga/testing-utils';

describe('given application saga', () => {
    describe('when watchersaga ', () => {
        let gen
        beforeEach(() => {
            gen = applicationWatcherSaga();
        })
        it('should return correct return', () => {
            // const gen = applicationWatcherSaga();   // instead of using this repeatedly can decleare in beforeEach and use it inside
            expect(gen.next().value).toEqual(takeLatest(FETCH_STUDENTS_APPLICATION_LIST, applicationWorkerSaga))
        });
        it('should return done is true or false', () => {
            // const gen = applicationWatcherSaga();
            expect(gen.next().done).toBeFalsy();
        })
    })
})

describe('when applicationWorkerSaga() called', () => {
    describe('AND when it is success', () => {
        it('should dispatch success action creator', async () => {
            //creating a mock. In thunk axios mock adapter was used. in saga spyon is used
            let response = { data: [{ id: 1, name: "indu" }, { id: 2, name: 'induja' }] };
            let getDataSpy = jest.spyOn(api, 'getData').mockImplementation(() => Promise.resolve(response));
            let dispatched = [];
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, applicationWorkerSaga,{filterKey: "url"})
            expect(getDataSpy).toHaveBeenCalled();
            expect(getDataSpy).toHaveBeenCalledTimes(1);
            expect(dispatched[0]).toEqual(fetchStudentApplicationListSuccess(response.data));
        });
    })
    describe('AND when it is success', () => {
        it('should dispatch success action creator', async () => {
            //creating a mock. In thunk axios mock adapter was used. in saga spyon is used
            let response = { data: [] };
            let getDataSpy = jest.spyOn(api, 'getData').mockImplementation(() => Promise.resolve(response));
            let dispatched = [];
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, applicationWorkerSaga,{filterKey: "url"})
            expect(getDataSpy).toHaveBeenCalled();
            expect(getDataSpy).toHaveBeenCalledTimes(1);
            expect(dispatched[0]).toEqual(fetchStudentApplicationListSuccess([]));
        });
    })
    describe('AND when it is failure', () => {
        it('should dispatch error action', async () => {
            const error = { message: "No applciations found" }
            const getDataSpy = jest.spyOn(api, 'getData').mockImplementation(() => Promise.reject(error));
            const dispatched = [];
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, applicationWorkerSaga,{filterKey: "url"});
            expect(getDataSpy).toHaveBeenCalled();
            expect(getDataSpy).toHaveBeenCalledTimes(1);
            expect(dispatched.length).toBe(1);
            expect(dispatched[0]).toEqual(fetchStudentApplicationListError("error",error.message));
        })
    })
    // describe("when applicationList()",()=>{
    //     it('should dispatch action correctly',()=>{
    //         const gen = applicationListSaga();
    //         expect(gen.next().value).toEqual(take(FETCH_STUDENTS_APPLICATION_LIST));
    //         expect(gen.next().value).toEqual(fork(applicationWorkerSaga));
    //         const task = createMockTask();
    //         expect(gen.next(task).value).toEqual(take(PAGE_LEAVE_ACTION));

    //         let pageLeaveAction = {type:PAGE_LEAVE_ACTION };
    //         expect(gen.next(pageLeaveAction).value).toEqual(cancel(task));
    //     })
    // })
})