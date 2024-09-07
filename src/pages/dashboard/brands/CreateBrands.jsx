import { Card, Form, Button } from 'react-bootstrap'
import DefaultLayout from '../../../components/dashboard/DefaultLayout'

const CreateBrands = () => {
  return (
    <DefaultLayout>
    <Card className="p-3 animated fadeInDown border-0">
        <h1 className="mb-3">New Brand</h1>
        
        <Form>
            <Form.Group className="mb-2">
                <Form.Label>Image</Form.Label>
                <Form.Control placeholder="Image"/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Keterangan</Form.Label>
                <Form.Control type="text" placeholder="keterangan" className='pb-4'/>
            </Form.Group>
            <Button  className="btn-primary" size="sm" type="submit">Save</Button>
            </Form>
            </Card>
    </DefaultLayout> 
  )
}

export default CreateBrands