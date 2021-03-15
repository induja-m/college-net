import { fetchCollegeApplicationsList, fetchCollegeApplicationsListSuccess, fetchCollegeApplicationsListError } from "../../../redux/actions/collegeHomeActions";
import { FETCH_COLLEGE_APPLICATION_LIST_ERROR, FETCH_COLLEGE_APPLICATION_LIST, FETCH_COLLEGE_APPLICATION_LIST_SUCCESS } from '../../../redux/actions/actionTypes';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe("given product actions", () => {
    describe('when fetchCollegeApplicationsList() called', () => {
        let mock;
        beforeEach(() => {
            mock = new MockAdapter(axios);
        })
        it('should get application list successfully', async () => {
            const apiResponse = { data: [{ id: 1, studentname: 'emily' }] };
            const loggedUser = "loyola"
            mock.onGet(`http://localhost:3000/applications?collegename=${loggedUser}&status=Applied`).reply(200, apiResponse);
            let actionfn = fetchCollegeApplicationsList(loggedUser);
            let dispatch = jest.fn();
            await actionfn(dispatch);

            expect(dispatch).toHaveBeenCalled();
            expect(dispatch).toHaveBeenCalledTimes(1);

            let mockCallFirstReponse = dispatch.mock.calls[0];
            expect(mockCallFirstReponse[0]).toEqual({ type: FETCH_COLLEGE_APPLICATION_LIST_SUCCESS, payload: apiResponse });
        })
    })


    describe('should return error', () => {
        let mock;
        beforeEach(() => {
            mock = new MockAdapter(axios);
        })
        it('should return error', async () => {
            const payload = "Request failed with status code 404";
            const error = new Error("network error")
            mock.onGet('http://localhost:3000/applications').networkError(error);
            const loggedUser = "loyola";
            let actionfn = fetchCollegeApplicationsList(loggedUser);
            let dispatch = jest.fn();            
            await actionfn(dispatch);
            expect(dispatch).toHaveBeenCalled();
            expect(dispatch).toHaveBeenCalledTimes(1);
            let mockCallFirstReponse = dispatch.mock.calls[0];
            expect(mockCallFirstReponse[0]).toEqual(fetchCollegeApplicationsListError(payload));
        })
    })

    

    describe('when fetchCollegeApplicationsListSuccess() is called', () => {
        it('should return correct action obj', () => {
            const payload = [{ name: "indu" }];
            const fetchStudentApplicationsListSuccessResponse = fetchCollegeApplicationsListSuccess(payload);
            expect(fetchStudentApplicationsListSuccessResponse).toEqual({ type: FETCH_COLLEGE_APPLICATION_LIST_SUCCESS, payload });
        })
    })

    describe('when fetchCollegeApplicationsListError() is called', () => {
        it('should return correct action obj', () => {
            let payload = "error";
            let fetchStudentApplicationsListErrorResponse = fetchCollegeApplicationsListError(payload);
            expect(fetchStudentApplicationsListErrorResponse).toEqual({ type: FETCH_COLLEGE_APPLICATION_LIST_ERROR, payload });
        })
    })
})

