import collegeHomeReducer from "../../redux/reducer/collegeHomeReducer";

import { FETCH_COLLEGE_APPLICATION_LIST_ERROR, FETCH_COLLEGE_APPLICATION_LIST_SUCCESS } from "../../redux/actions/actionTypes";


describe("college home reducer", () => {
    describe('when collegeHomeReducer() called', () => {
        it('should get college application list successfully', async () => {

            let action = {
                type: FETCH_COLLEGE_APPLICATION_LIST_SUCCESS,
                payload: [{ name: "Loyola" }]
            }

            const initialState = {
                collegeList: action.payload,
                error: '',
                isLoading: false
            }
            let result = collegeHomeReducer(initialState, action);            
            expect(result).toEqual(initialState);
        })

        it('should get college application list returns error', async () => {

            let action = {
                type: FETCH_COLLEGE_APPLICATION_LIST_ERROR,
                payload: [{ name: "Loyola" }]
            }

            const initialState = {
                collegeList: action.payload,
                error: '',
                isLoading: false
            }
            let result = collegeHomeReducer(initialState, action);            
            expect(result.error).toEqual(action.payload);
        })

    })
})