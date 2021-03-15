import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getData } from '../api/api';
import { useSelector, useDispatch } from 'react-redux';
import ApplicationTracking from '../students/applicationTracking';

const ApplicationTrackingContainer = () => {
    const [applicationDetails, setApplicationDetails] = useState([]);
    const [user, setUser] = useState();
    let history = useHistory();
    let params = useParams();
    const loggedUser = useSelector(state => state.user.loggedInUser);

    useEffect(() => {
        //// if user is logged in set state else push to login
        if (loggedUser === null) {
            history.push('/login');
        } else {
            // getCollegeDetails();
            setUser(loggedUser);
        }


        async function getAppplicationDetails() {
            let response = await getData(`applications?trackingid=${params.id}`);
            // dispatcher(fetchDoctorAppointmentList(loggedUser.name));
            setApplicationDetails(response.data[0]);
        }
        getAppplicationDetails()
        console.log("applicactionDeatsils", applicationDetails);
    }, [])

    return <ApplicationTracking applicationDetails={applicationDetails}/>
}

export default ApplicationTrackingContainer;