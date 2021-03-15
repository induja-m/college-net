import MyApplications from "../students/myApplications";
import React, { useEffect, useState } from 'react';
import { useHistory ,Link} from 'react-router-dom';
import { getData, deleteData } from '../api/api';
import { useSelector } from 'react-redux';

const MyApplicationsContainer = () => {
    const [applications, setApplications] = useState([]);
    const [user, setUser] = useState();
    let history = useHistory();
    //get data from redux using useSelector
    const loggedUser = useSelector(state => state.user.loggedInUser);

    async function getMyApplications() {
        //redux implementation 
        // if user is logged in set state else push to login
        if (loggedUser === null) {
            history.push('/login');
        } else {
            let response = await getData(`applications?studentname=${loggedUser.name}`);
            let applicationsList = response.data;
            setApplications(applicationsList);
            setUser(loggedUser);
        }
    }

    useEffect(() => {
        getMyApplications();
    }, [])
    return <MyApplications applications={applications} history={history}/>
}

export default MyApplicationsContainer;