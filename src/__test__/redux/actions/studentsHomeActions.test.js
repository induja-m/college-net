import { fetchStudentApplicationsList,fetchStudentApplicationListSuccess,fetchStudentApplicationListError } from "../../../redux/actions/studentsHomeActions"
import { FETCH_STUDENTS_APPLICATION_LIST_ERROR, FETCH_STUDENTS_APPLICATION_LIST_SUCCESS, FETCH_STUDENTS_APPLICATION_LIST } from '../../../redux/actions/actionTypes';



describe('when fetchStudentApplicationsList() is called', () => {
    it('should return correct action obj', () => {
        let filterKey = 'doctors';
        let fetchStudentApplicationsListResponse = fetchStudentApplicationsList(filterKey);
        expect(fetchStudentApplicationsListResponse).toEqual({ type: FETCH_STUDENTS_APPLICATION_LIST, filterKey });
    })
})

describe('when fetchStudentApplicationsList() is called', () => {
    it('should return correct action obj', () => {
        let payload = {name: "indu"};
        let fetchStudentApplicationsListSuccessResponse = fetchStudentApplicationListSuccess(payload);
        expect(fetchStudentApplicationsListSuccessResponse).toEqual({ type: FETCH_STUDENTS_APPLICATION_LIST_SUCCESS, payload });
    })
})

describe('when fetchStudentApplicationsList() is called', () => {
    it('should return correct action obj', () => {
        let payload = "error";
        let fetchStudentApplicationsListErrorResponse = fetchStudentApplicationListError(payload);
        expect(fetchStudentApplicationsListErrorResponse).toEqual({ type: FETCH_STUDENTS_APPLICATION_LIST_ERROR, payload });
    })
})
