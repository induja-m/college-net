//component for college  home . application list
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { getData, putData } from '../api/api';
import Header from '../header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollegeApplicationsList } from '../../redux/actions/collegeHomeActions';
import College from './college';



const CollegesHome = () => {
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

    return (
        <>
            {/* using composition modifying header */}
            <Header />
            {/* code for listing list of appoinments for doctor starts here */}
            <Row style={{ marginTop: "20px" }}>
                <Col md="2"></Col>
                <Col md='3'><h4>Applications from Students</h4></Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Col md="2"></Col>
                <Col md="6">
                    {applications?.length > 0 ?
                        applications.map((application) => {
                            return (
                                <>
                                    <College application={application} key={application.id}>
                                        <Button variant="success" style={{ marginRight: "10px" }} onClick={() => modifyStatus(application, "Accepted")}>Accept</Button>
                                        <Button variant="warning" onClick={() => modifyStatus(application, "Hold")}>Hold</Button>
                                        <Button variant="danger" style={{ float: "right" }} onClick={() => modifyStatus(application, "Rejected")}>Reject</Button>
                                    </College>
                                </>
                            )
                        })
                        :
                        <h3>No applications</h3>
                    }
                </Col>
            </Row>
            {/* code for listing list of appoinments for doctor starts here */}

        </>
    )
}

export default CollegesHome;
