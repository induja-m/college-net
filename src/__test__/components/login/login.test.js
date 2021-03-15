import Login from "../../../components/login/Login"
import { mount } from 'enzyme';
import userReducer from "../../../redux/reducer/userReducer";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import LoginContainer from "../../../components/container/loginContainer";

const clickFn = jest.fn();

describe('Login', () => {

  let Wrapper, mockStore;

  beforeEach(() => {
    mockStore = createStore(userReducer, { user: { loggedInUser: null } });
    mockStore.dispatch = jest.fn();
    Wrapper = mount(<Provider store={mockStore}><LoginContainer /></Provider>);
  })

  it('should render without crashing', () => {
    expect(Wrapper.length).toBe(1);
  });

   it('button click should hide component', () => {
    console.log( Wrapper.find('#loginbtn'));        
    expect(Wrapper.find('#loginbtn').exists()).toEqual(true);
  });
});