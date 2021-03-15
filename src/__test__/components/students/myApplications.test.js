import MyApplications from "../../../components/students/myApplications"
import { mount } from 'enzyme';
import userReducer from "../../../redux/reducer/userReducer";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as reactRedux from 'react-redux';
import MyApplicationsContainer from "../../../components/container/myApplicationsContainer";

const clickFn = jest.fn();

describe('MyApplications', () => {

  let Wrapper, mockStore;
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

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

    let userSelectMockValue = {
      user: {
          loggedInUser: {}
      },
      college: {
          collegeList: [],
          error: "",
          isLoading: false
      },
      student: {
          applicationList: [],
          error: "",
          isLoading: false
      }
  };
    useSelectorMock.mockReturnValue(userSelectMockValue);
    
    // mockStore.useParams = jest.fn().mockReturnValue({ code: 'BP57' })
    Wrapper = mount(<Provider store={mockStore}><MyApplicationsContainer /></Provider>);
  })

  it('should render without crashing', () => {
    expect(Wrapper.length).toBe(1);
  });

  // it('button click should hide component', () => {
  //   console.log(Wrapper.find('#loginbtn'));
  //   expect(Wrapper.find('#loginbtn').exists()).toEqual(true);
  // });
});