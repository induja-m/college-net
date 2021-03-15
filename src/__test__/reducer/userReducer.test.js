import userReducer from "../../redux/reducer/userReducer";

import { LOGGED_IN_USER } from "../../redux/actions/actionTypes";


describe("user reducer", () => {
    describe('when userReducer() called', () => {
        it('should return user', async () => {

            let action = {
                type: LOGGED_IN_USER, 
                payload: { name: "Emily" }
            }

            const initialState ={
                loggedInUser:null
            }

            let result = userReducer(initialState, action);  
            console.log("result****", result)      ;
            expect(result).toEqual({loggedInUser: action.payload});
        })

      
    })
})