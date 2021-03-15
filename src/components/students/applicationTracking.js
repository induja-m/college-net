//component for doctor home . appoinments list and slot booking
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { getData } from '../api/api';
import Header from '../header/Header';
import { useSelector, useDispatch } from 'react-redux';
import Rating from '../tools/rating';


const ApplicationTracking = ({applicationDetails}) => {
    // const [applicationDetails, setApplicationDetails] = useState([]);
    // const [user, setUser] = useState();
    // let history = useHistory();
    // let params = useParams();
    // const loggedUser = useSelector(state => state.user.loggedInUser);

    // useEffect(() => {
    //     //// if user is logged in set state else push to login
    //     if (loggedUser === null) {
    //         history.push('/login');
    //     } else {
    //         // getCollegeDetails();
    //         setUser(loggedUser);
    //     }


    //     async function getAppplicationDetails() {
    //         let response = await getData(`applications?trackingid=${params.id}`);
    //         // dispatcher(fetchDoctorAppointmentList(loggedUser.name));
    //         setApplicationDetails(response.data[0]);
    //     }
    //     getAppplicationDetails()
    //     console.log("applicactionDeatsils", applicationDetails);
    // }, [])

    return (
        <>
            {/* using composition modifying header */}
            {console.log("applicationDetails",applicationDetails)}
            <Header />
            <Row style={{ marginTop: "20px" }}>
                <Col md="2"></Col>
                <Col md='3'><h4>Tracking Id: {applicationDetails.trackingid}</h4></Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Col md="2"></Col>
                <Col md='3'><h4>Tracking Status: {applicationDetails.status}</h4></Col>
            </Row>
        </>
    )
}

export default ApplicationTracking;
