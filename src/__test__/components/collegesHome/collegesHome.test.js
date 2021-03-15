import CollegesHome from "../../../components/collegesHome/collegesHome"
import { mount } from 'enzyme';
import userReducer from "../../../redux/reducer/userReducer";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as reactRedux from 'react-redux';
import CollegesHomeContainer from "../../../components/container/collegesHomeContainer";

const clickFn = jest.fn();

describe('CollegesHome', () => {

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
    Wrapper = mount(<Provider store={mockStore}><CollegesHomeContainer /></Provider>);
  })
  

  it('should render without crashing', () => {
    expect(Wrapper.length).toBe(1);
  });

  // it('button click should hide component', () => {
  //   console.log(Wrapper.find('#loginbtn'));
  //   expect(Wrapper.find('#loginbtn').exists()).toEqual(true);
  // });
});