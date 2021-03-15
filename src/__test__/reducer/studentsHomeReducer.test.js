import studentsHomeReducer from "../../redux/reducer/studentsHomeReducer";

import { FETCH_STUDENTS_APPLICATION_LIST_SUCCESS, FETCH_STUDENTS_APPLICATION_LIST_ERROR } from "../../redux/actions/actionTypes";


describe("students home reducer", () => {
    describe('when studentsHomeReducer() called', () => {
        it('should get students application list successfully', async () => {

            let action = {
                type: FETCH_STUDENTS_APPLICATION_LIST_SUCCESS, 
                payload: [{ studentname: "Emily" }]
            }

            const initialState = {
                applicationList: action.payload,
                error: '',
                isLoading: false
            }
            let result = studentsHomeReducer(initialState, action);            
            expect(result).toEqual(initialState);
        })

        it('should get college application list returns error', async () => {

            let action = {
                type: FETCH_STUDENTS_APPLICATION_LIST_ERROR,
                payload: "Error"
            }
            
            const initialState = {
                applicationList: action.payload,
                error: '',
                isLoading: false
            }
            let result = studentsHomeReducer(initialState, action);   
            console.log("result*****", result)         ;
            expect(result.error).toEqual(action.payload);
        })

    })
})