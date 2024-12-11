import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from '../assets/beautiful-stylish-dark-skinned-girl-walks-sunny-summer-city.jpg'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
function BootstrapTest() {
  const [show, setShow] = useState(false);

  const handleclick=(e)=>{
e.preventDefault()
setShow(true)
alert('this is clicked')
  }
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image1}  width={300}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Button variant="primary" onClick={handleclick} className=''>Go somewhere</Button>
      </Card.Body>
    </Card>
    <div
    
      className="modal show"
      style={{ display: 'block'}}
    >
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default BootstrapTest;