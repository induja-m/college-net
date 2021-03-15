import CollegesHome from "../collegesHome/collegesHome";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollegeApplicationsList } from '../../redux/actions/collegeHomeActions';
import { getData, putData } from '../api/api';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const CollegesHomeContainer = ()=>{
    const [applications, setApplications] = useState([]);
    const [user, setUser] = useState();
    let history = useHistory();
    //get data from redux using useSelector
    const collegeList  = useSelector(state => state.college.collegeList);
    const stateC = useSelector(state => state);
    console.log("state",collegeList);

    const loggedUser = useSelector(state => state.user.loggedInUser);
    const dispatcher = useDispatch();

    useEffect(() => {
        //// if user is logged in set state else push to login
        console.log("inside useeeffect");
        if (loggedUser === null) {
            history.push('/login');
        } else {
            getMyApplications();
            setUser(loggedUser);
        }
    }, [])

    // function to make dispatch to fetch data
    async function getMyApplications() {
        dispatcher(fetchCollegeApplicationsList(loggedUser.name));
    }

    useEffect(() => {
        setApplications(collegeList);
    }, [collegeList.length])

    //function to accept, hold or reject application
    const modifyStatus = async (application, status) => {
        application.status = status;
        let updateStudentApplicationRes = await putData(`applications/${application.id}`, application);
        getMyApplications();
    }

    return <CollegesHome modifyStatus={modifyStatus} applications={applications} />
}

export default CollegesHomeContainer;