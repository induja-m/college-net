//use mount to test full compoenent and shallow to test wihtout children
import { mount, shallow } from 'enzyme';

describe('Given College compoent', () => {
    describe('when empty', () => {
        //mount is rendering teh compoennet in DOM
        //mounts and render eact compoenent into document and provides a tetsing wrapper around it
        let Wrapper, mockStore;
        beforeEach(() => {
            mockStore = createStore(studentReducer, { student: { studentList: [], isLoading: false } });
            mockStore.dispatch = jest.fn();
            Wrapper = mount(<Provider store={mockStore}><Cart /></Provider>);
        })
        it('should render without crashing', () => {
            expect(Wrapper.length).toBe(1);
        });
        it('should render "h3"', () => {
            expect(Wrapper.find('h3').text()).toBe('No Items');
        });
        // it('shoudl ahve 0 items',()=>{
        //     expect(mockStore.getState().length).toBe(2);
        // })
        it('',()=>{
            expect
        })
    });

    describe('when not empty', () => {
        //mount is rendering teh compoennet in DOM
        //mounts and render eact compoenent into document and provides a tetsing wrapper around it
        let Wrapper, mockStore;
        beforeEach(() => {
            const item1={id:1, collegeName: 'IGNOU'}
            const item2={id:2, collegeName: 'BITS'}
            mockStore = createStore(studentReducer, { student: { studentList: [item1,item2], isLoading: false } });
            mockStore.dispatch = jest.fn();
            Wrapper = mount(<Provider store={mockStore}><Cart /></Provider>);
        })
        it('should render without crashing', () => {
            expect(Wrapper.length).toBe(1);
        });
        it('should render "h3"', () => {
            expect(Wrapper.find('h3').innerHTML).toBe('No Items');
        })
    });
})