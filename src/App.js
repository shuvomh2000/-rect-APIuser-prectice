
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useState,useEffect } from "react";
import { Card,Button, Container, Row, Col,ListGroup } from 'react-bootstrap';





function App() {
  const [userdata,setUserdata] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((user)=>{
      setUserdata(user.data)
    }).catch((error)=>{
      console.log(error)
    })

  },[])

  return (
    <>
    <Container>
    <Row>
      {userdata.map((item)=>(
        <Col lg={4}>
        <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZob-roOCV5Q54sF9k0oRrvRZ846yMMAtJg&usqp=CAU" />
    

    <Card.Body>
      <Card.Title>{item.name} ({item.username})</Card.Title>
            <ListGroup>
        <ListGroup.Item><b>email:</b> {item.email}</ListGroup.Item>
        <ListGroup.Item><b>address:</b> {item.address.street}, {item.address.suite}, {item.address.city} ({item.address.zipcode} )</ListGroup.Item>
      </ListGroup>
      <Button className='mt-5' variant="primary">{item.id} Read more</Button>
    </Card.Body>
  </Card>
        </Col>
      ))}
    </Row>
</Container>

    </>
  );
}

export default App;
