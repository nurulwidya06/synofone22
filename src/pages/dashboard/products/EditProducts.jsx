import { Card, Form, Row, Col, Button} from 'react-bootstrap'
import DefaultLayout from '../../../components/dashboard/DefaultLayout'

const EditProducts = () => {
  return (
  <DefaultLayout>
    <Card className="p-3 animated fadeInDown border-0">
        <h1 className="mb-3">Edit Product</h1>
        
        <Form>
            <Form.Group className="mb-2">
                <Form.Label>Image</Form.Label>
                <Form.Control placeholder="Image"/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" className='pb-4'/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Spesification</Form.Label>
                <Row>
                    <Col md={2}>
                        <Form.Control type="text" placeholder="chip" className="mb-2"/>
                    </Col>
                    <Col md={2}>
                        <Form.Control type="text" placeholder="cpu" className="mb-2"/>
                    </Col>
                    <Col md={2}>
                        <Form.Control type="text" placeholder="gpu" className="mb-2"/>
                    </Col>
                    <Col md={2}>
                        <Form.Control type="number" placeholder="ukuran layar" className="mb-2"/>
                    </Col>
                    <Col md={2}>
                        <Form.Control type="text" placeholder="jenis layar" className="mb-2"/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="price"/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Qty</Form.Label>
                <Form.Control type="number" placeholder="Qty"/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Warna</Form.Label>
                <Form.Control type="text" placeholder="Warna"/>
            </Form.Group>
            <Button  className="btn-primary" size="sm" type="submit">Save</Button>
            <Button  className="btn-danger m-2" size="sm" >Cancel</Button>
        </Form>
    </Card>
    
    </DefaultLayout>
  )
}

export default EditProducts