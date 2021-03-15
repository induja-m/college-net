//appoinment list page for patient
import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import { getData, deleteData } from '../api/api';
import Header from '../header/Header';
import { useSelector } from 'react-redux';
import { NavDropdown } from "react-bootstrap";
import ReactPagination from '../../__test__/components/pagination/pagination';


const MyApplications = ({ applications, history }) => {
    // const [showPerPage]
    // showPerPageTable: 5,
    // this.state.pagination = { start: 0, end: this.state.showPerPageTable };
    // onOriginalPaginationChange = (start, end) => {
    //     this.setState({ pagination: { start: start, end: end } })
    //   }


    return (
        <>
            {/* using composition modifying header */}
            <Header>
                <NavDropdown.Item onClick={() => history.push('/students/home')}>Back to College List</NavDropdown.Item>
            </Header>
            {/* code to get show list of appoinments */}
            {applications?.length > 0 ?
                
                    applications.map((application) => {
                    const {collegename, studentname, studentgender, studentcontact, status, course, trackingid} = application;
                    return <div>
                        <Row style={{ marginTop: "20px" }}>
                            <Col md="2"></Col>
                            <Col md='4'>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Applied at {collegename}<span><Badge pill variant="info" style={{ float: "right" }}>
                                            {status}
                                        </Badge>{' '}</span></Card.Title>
                                        <Card.Text>
                                            <i><strong>Name: </strong>{studentname}</i>
                                            <p> <strong>Gender: </strong>{studentgender}</p>
                                            <p><strong>Course applied: </strong>{course}</p>
                                            <p><strong>Contact: </strong>{studentcontact}</p>
                                            <Link to={`/tracking/${trackingid}`}>Track</Link>
                                            {console.log("trackingid", trackingid)}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </div>

                })          
                
                :
                "No applications"
            }

        </>
    )
}

export default MyApplications;
