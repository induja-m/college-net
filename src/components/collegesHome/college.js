import { Card, Row, Col } from 'react-bootstrap';


const College = ({ application, children }) => {
    const { collegename, studentname, studentgender, studentcontact, status, course } = application;
    return (
        <>
            <Row style={{ marginTop: "20px" }}>
                <Col md='8'>
                    <Card>
                        <Card.Body>
                            <Card.Title>Applied at {collegename}</Card.Title>
                            <Card.Text>
                                <i><strong>Name: </strong>{studentname}</i>
                                <p> <strong>Gender: </strong>{studentgender}</p>
                                <p><strong>Course applied: </strong>{course}</p>
                                <p><strong>Contact: </strong>{studentcontact}</p>
                            </Card.Text>
                            <div>{children}</div>
                        </Card.Body>

                    </Card>

                </Col>
            </Row>

        </>
    )
}


export default College;
