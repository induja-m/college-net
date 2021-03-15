import { Card, Button, Accordion, ButtonGroup } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Rating from '../tools/rating';

const Student = ({college,children,setApplyCourse}) => {
    const { location, place, streamsAvailable, name, id, Rank, rating, degrees, code } = college;

        
    return (
            <>
                <Card key={id} style={{ marginTop: "20px" }}>
                    <Card.Header>{location}</Card.Header>
                    <Card.Body>
                        <Card.Title><Link to={`/colleges/${code}`}>{name}</Link><span style={{ float: "right" }}><Rating rating={rating} /></span></Card.Title>
                        <Card.Text>
                            <i>{place}</i>
                            <strong><p style={{ color: "#606060" }}>{Rank}</p></strong>
                            <p> {streamsAvailable}</p>
                        </Card.Text>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Toggle as={Button} eventKey="1">
                                Click to Apply
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1" >
                                <Card.Body>
                                    <Card.Text>
                                        <p>Available Courses:</p>
                                        {/* get slot avaliable details  */}
                                        {degrees.map((degree) => {
                                            return (
                                                <>
                                                    <h5>{degree.streams}</h5>
                                                    {degree.values.map((degreeValue) => {
                                                        return (
                                                            <>
                                                                {/* todod- keep looping */}
                                                                <ButtonGroup aria-label="Basic example" onClick={(e) => setApplyCourse(e.target.value, degree.streams)} >
                                                                    <Button variant="secondary" value={degreeValue.course} style={{ marginRight: "10px", borderRadius: "20px" }}>{degreeValue.course}</Button>
                                                                </ButtonGroup>
                                                            </>
                                                        )
                                                    })
                                                    }
                                                </>
                                            )
                                        })}
                                    </Card.Text>
                                    {children}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Accordion>
                    </Card.Body>
                </Card>
                
            </>
        )
}


export default Student;