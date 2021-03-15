//component to 
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { getData } from '../api/api';
import Header from '../header/Header';
import { useSelector } from 'react-redux';
import Rating from '../tools/rating';


const CollegeDetails = ({ collegeDetails }) => {
    // const [collegeDetails, setCollegeDetails] = useState([]);
    // const [user, setUser] = useState();
    // let history = useHistory();
    // let params = useParams();
    // const loggedUser = useSelector(state => state.user.loggedInUser);

    // useEffect(() => {
    //     console.log("params",params);
    //     //// if user is logged in set state else push to login
    //     if (loggedUser === null) {
    //         history.push('/login');
    //     } else {
    //         setUser(loggedUser);
    //     }

    //     async function getCollegeDetails() {
    //         let response = await getData(`colleges?code=${params.code}`);
    //         setCollegeDetails(response.data[0]);
    //     }
    //     getCollegeDetails()
    // }, [])

    return (

        <>
            {/* using composition modifying header */}
            <Header />
            <Row style={{ marginTop: "20px" }}>
                <Col md="2"></Col>
                <Col md='3'><h4>{collegeDetails.name}  <span style={{ float: "right" }}><Rating rating={collegeDetails.rating} /></span></h4></Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Col md="2"></Col>
                <div>
                    <Col md='10'>
                        <h5>Since <i>{collegeDetails.year}</i></h5>
                        <strong>Pune</strong>
                        <p>College Code : {collegeDetails.code}</p>
                        <p>Contact @ {collegeDetails.contact}</p>
                        <p>Achievements : {collegeDetails.achievements} </p>
                    </Col>
                </div>
            </Row>
        </>
    )
}

export default CollegeDetails;
