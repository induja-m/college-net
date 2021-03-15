//component for patiet home. filter to select the specialization and list of colleges available
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, Button, Row, Col, Badge, Accordion, Form, ButtonGroup } from 'react-bootstrap';
import { getData, postData } from '../../components/api/api';
import Header from '../header/Header';
import { NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import * as fetchFromSaga from '../../redux/actions/studentsHomeActions';
import Rating from '../tools/rating';
import Student from './student';
import ReactPagination from '../../__test__/components/pagination/pagination';


const StudentsHome = ({ history, confirmApplication, colleges, setCityFilter, setApplyCourse }) => {
    // const [showPerPage, setShowPerPage] = useState(2);
    // this.state.pagination = { start: 0, end: this.state.showPerPageTable };
    // const [paginationStart, setPaginationStart] = useState(0);
    // const [paginationEnd, setPaginationEnd] = useState(showPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [collegesListPerPage, setCollegesListPage] = useState(2);


    // const onPaginationChange = (start, end) => {
    //     console.log("start",start);
    //     console.log("end",end);
    //     setPaginationStart(start);
    //     setPaginationEnd(end);
    // }

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id))
    }

    const indexOfLastListPage = currentPage * collegesListPerPage;
    const indexOfFirstListPage = indexOfLastListPage - collegesListPerPage;
    // const currentCollegesList = todos.slice(indexOfFirstListPage, indexOfLastListPage);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(colleges.length / collegesListPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            {/* using composition modifying header */}
            <Header>
                <NavDropdown.Item onClick={() => history.push('/students/myapplications')}>My Applications</NavDropdown.Item>
            </Header>
            <Row style={{ marginTop: "20px" }}>
                <Col md="2"></Col>
                <Col md='3'>
                    {/* form for city filter starts here */}
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Choose City</Form.Label>
                            <Form.Control as="select" custom onChange={(e) => setCityFilter(e.target.value)}>
                                {/* <Form.Control as="select" custom> */}
                                <option value="all">All</option>
                                <option value="pune">Pune</option>
                                <option value="chennai">Chennai</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    {/* form for city filter ends here */}
                </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
                <Col md="2"></Col>
                <Col md='8'>
                    {/* code to display list of colleges starts here */}
                    {colleges?.length > 0 ?
                        // {this.state.releaseDetails.slice(pagination.start, pagination.end).map(relDet =>
                        colleges.slice(indexOfFirstListPage, indexOfLastListPage).map((college) => {
                            // colleges.map((college) => {

                            return (
                                <Student college={college} setApplyCourse={setApplyCourse}>
                                    <Button variant="primary" style={{ float: "right" }} onClick={() => confirmApplication(college)}>
                                        Confirm
                                    </Button>
                                </Student>
                            )
                        })

                        : <h3>No Colleges available</h3>
                    }
                    {pageNumbers.map((number) => {
                        return (
                            <button className="btn btn-primary"  key={number}   id={number} onClick={(e)=>handleClick(e)} style={{ margin: "10px" }}>
                           {number}
              </button>
        
                            // <li
                            //     key={number}
                            //     id={number}
                            //     onClick={handleClick}
                            // >
                            //     {number}
                            // </li>
                        );
                    })
                    }
                    {/* <ReactPagination
                        showPerPage={showPerPage}
                        onPaginationChange={onPaginationChange}
                        totalColleges={colleges.length}
                    /> */}
                    {/* code to display list of colleges ends here */}
                </Col>
            </Row>

        </>
    )
}

export default StudentsHome;
