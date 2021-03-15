import { FETCH_STUDENTS_APPLICATION_LIST_ERROR, FETCH_STUDENTS_APPLICATION_LIST_SUCCESS,SET_LOADER,FETCH_STUDENTS_APPLICATION_LIST } from './actionTypes';

export const fetchStudentApplicationsList = (filterKey) => {
    return {
        type: FETCH_STUDENTS_APPLICATION_LIST,
        filterKey
    }
  
}

export const fetchStudentApplicationListSuccess = (payload) => {
    return {
        type: FETCH_STUDENTS_APPLICATION_LIST_SUCCESS,
        payload
    }
}

export const fetchStudentApplicationListError = (payload) => {
    return {
        type: FETCH_STUDENTS_APPLICATION_LIST_ERROR,
        payload
    }
}

// export const setLoader = (isLoading) => {
//     return {
//         type: SET_LOADER,
//         isLoading
//     }
// }