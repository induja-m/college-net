import { saveUser } from "../../../redux/actions/userActions"


describe('when saveUser() is called', ()=>{
    it('should return correct action obj',()=>{
        let studentobj =  {
            "id": 1,
            "name": "Emily",
            "age": "28",
            "username": "emily",
            "password": "emily",
            "gender": "female",
            "contact": 9876543210
          }
        let saveUserResponse = saveUser(studentobj)
        expect(saveUserResponse.payload).toEqual(studentobj)
    })
})