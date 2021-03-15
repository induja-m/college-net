import College from "../../../components/collegesHome/college"

import renderer from 'react-test-renderer'

const clickFn = jest.fn();

describe('College', () => {

  it('should render with params', ()=>{
    const application = {collegename: "BITS Pilani",course: "ECE",id: 1,status: "Applied",stream: "Engineering",studentcontact: 9876543210,studentgender: "female",studentname: "Emily"};
    let wrapper = renderer.create(<College application={application} key={application.id}/>).toJSON();
    expect(wrapper).toMatchSnapshot();
  })
});