import CollegeDetails from "../collegesHome/collegeDetails";
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getData } from '../api/api';
import { useSelector} from 'react-redux';

const CollegeDetailsContainer = () => {
    const [collegeDetails, setCollegeDetails] = useState([]);
    const [user, setUser] = useState();
    let history = useHistory();
    let params = useParams();
    const loggedUser = useSelector(state => state.user.loggedInUser);

    useEffect(() => {
        console.log("params", params);
        //// if user is logged in set state else push to login
        if (loggedUser === null) {
            history.push('/login');
        } else {
            setUser(loggedUser);
        }

        async function getCollegeDetails() {
            let response = await getData(`colleges?code=${params.code}`);
            setCollegeDetails(response.data[0]);
        }
        getCollegeDetails()
    }, [])
        return <CollegeDetails collegeDetails={collegeDetails}/>
}

export default CollegeDetailsContainer;