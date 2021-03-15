import {  FETCH_STUDENTS_APPLICATION_LIST_ERROR, FETCH_STUDENTS_APPLICATION_LIST_SUCCESS } from '../actions/actionTypes';

const initialState = {
    applicationList: [ ],
    error: '',
    isLoading: false
}

const studentsHomeReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_STUDENTS_APPLICATION_LIST_SUCCESS:
            return { ...state, applicationList: action.payload };
        case FETCH_STUDENTS_APPLICATION_LIST_ERROR:
            return { ...state, error: action.payload };
        // case SET_LOADER:
        //     return { ...state, isLoading: action.isLoading }; 
        default: return state
    }
}

export default studentsHomeReducer;