

import { getData } from '../../components/api/api';
import { FETCH_COLLEGE_APPLICATION_LIST_SUCCESS, FETCH_COLLEGE_APPLICATION_LIST_ERROR } from './actionTypes';

export const fetchCollegeApplicationsList = (loggedUser) => {
    return (async (dispatch) => {
        try {
            let response = await getData(`applications?collegename=${loggedUser}&status=Applied`);
            console.log("response",response);
            dispatch(fetchCollegeApplicationsListSuccess(response.data))
        } catch (error) {
            dispatch(fetchCollegeApplicationsListError(error.message))
        } finally {
            console.log("finally");
        }
    })
}

export const fetchCollegeApplicationsListSuccess = (payload) => {
    return {
        type: FETCH_COLLEGE_APPLICATION_LIST_SUCCESS,
        payload
    }
}

export const fetchCollegeApplicationsListError = (payload) => {
    return {
        type: FETCH_COLLEGE_APPLICATION_LIST_ERROR,
        payload
    }
}

// export const setLoader = (isLoading) => {
//     return {
//         type: SET_LOADER,
//         isLoading
//     }
// }