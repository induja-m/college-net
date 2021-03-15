import {  FETCH_COLLEGE_APPLICATION_LIST_ERROR, FETCH_COLLEGE_APPLICATION_LIST_SUCCESS , SET_LOADER} from "../actions/actionTypes";

const initialState = {
    collegeList: [ ],
    error: '',
    isLoading: false
}

const collegeHomeReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_COLLEGE_APPLICATION_LIST_SUCCESS:
            return { ...state, collegeList: action.payload };
        case FETCH_COLLEGE_APPLICATION_LIST_ERROR:
            return { ...state, error: action.payload };
        // case SET_LOADER:
        //     return { ...state, isLoading: action.isLoading }; 
        default: return state
    }
}

export default collegeHomeReducer;