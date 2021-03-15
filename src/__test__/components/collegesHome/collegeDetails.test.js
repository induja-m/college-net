import CollegeDetails from "../../../components/collegesHome/collegeDetails"
import { mount } from 'enzyme';
import userReducer from "../../../redux/reducer/userReducer";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom'

const clickFn = jest.fn();

describe('CollegeDetails', () => {

  let Wrapper, mockStore, useParamSpy;

  beforeEach(() => {
    mockStore = createStore(userReducer, {
      user: {
        "id": 1,
        "name": "Emily",
        "age": "28",
        "username": "emily",
        "password": "emily",
        "gender": "female",
        "contact": 9876543210
      }
    });
    mockStore.dispatch = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
      useParams: () => ({
        code: 'BP57'        
      }),
      useRouteMatch: () => ({ url: '/colleges/BP57' }),
    }));

    // jest.mock('react-router', () => ({
    //   useParams: jest.fn().mockReturnValue({ code: "BP57",match: {}}),
    //   }));        
    Wrapper = mount(<Provider store={mockStore}><BrowserRouter><Route path="colleges/:BP57"><CollegeDetailsContainer /></Route></BrowserRouter></Provider>);
  })

  
  it('should render without crashing', () => {
    expect(Wrapper.length).toBe(1);
  });

  it('to check useparam has been called',()=>{
    expect(useParamSpy).toHaveBeenCalled();
  })
  // it('button click should hide component', () => {
  //   console.log(Wrapper.find('#loginbtn'));
  //   expect(Wrapper.find('#loginbtn').exists()).toEqual(true);
  // });
});

// const mockLocation = {
//   pathname: '/welcome',
//   hash: '',
//   search: '',
//   state: ''
// }
// beforeEach(() => {
//   jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
// });
////////////////
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useParams: () => ({
//     id: 590
//   })
// }));