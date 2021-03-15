import { useSelector, useDispatch } from 'react-redux';
import * as fetchFromSaga from '../../redux/actions/studentsHomeActions';
import { getData, postData } from '../../components/api/api';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import StudentsHome from '../students/studentsHome';

const StudentsHomeContainer =()=>{
    const [colleges, setColleges] = useState([]);
    const [user, setUser] = useState();
    const [cityFilter, setCityFilter] = useState("all");
    const [course, setCourse] = useState();
    const [stream, setStream] = useState();
    const history = useHistory();
    //get data from redux using useSelector
    const  applicationList= useSelector(state => state.student.applicationList);
    
    const loggedUser = useSelector(state => state.user.loggedInUser);
    const dispatcher = useDispatch();


    useEffect(() => {
        //redux implementation

        // if user is logged in set state else push to login
        (loggedUser === null ? history.push('/login') : setUser(loggedUser))

        //check for the right filter and getdatat from db
        async function getCollegesList() {
            let filterKey = "colleges";
            if (cityFilter === "pune") {
                filterKey = "colleges?location=Pune"
            } else if (cityFilter === "chennai") {
                filterKey = "colleges?location=Chennai"
            }
            dispatcher(fetchFromSaga.fetchStudentApplicationsList(filterKey));
        }
        getCollegesList();

    }, [cityFilter])

    useEffect(() => {
        setColleges(applicationList);
    }, [applicationList.length])


    //get params db(slots) and set state to send to confirm booking 
    const setApplyCourse = (courseValue, stream) => {
        setCourse(courseValue);
        setStream(stream);
    }


    //confirm application function saves the object into the db
    const confirmApplication = async (college) => {
        let postObj = {
            collegename: college.name,
            studentname: user.name,
            studentgender: user.gender,
            studentcontact: user.contact,
            trackingid: new Date().getTime() + college.code,
            status: "Applied",
            course,
            stream,
        }
        let response = await postData('/applications', postObj);
        alert(`Applied successfully at ${college.name} for the course ${course}`);
    }
    
    return <StudentsHome colleges={colleges} confirmApplication={confirmApplication} history={history} setCityFilter={setCityFilter} setApplyCourse={setApplyCourse}/>
}



export default StudentsHomeContainer