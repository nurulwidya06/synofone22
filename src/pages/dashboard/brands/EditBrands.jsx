import { Form, Card, Button } from 'react-bootstrap'
import DefaultLayout from '../../../components/dashboard/DefaultLayout'

const EditBrands = () => {
  return (
    <DefaultLayout>
    <Card className='p-3 border-0'>
        <h1>Edit Brand</h1>
        <Form>
            <Form.Group className='mb-2'></Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control placeholder='Image'></Form.Control>
            <Form.Group className="mb-2">
                <Form.Label>Keterangan</Form.Label>
                <Form.Control type="text" placeholder="Keterangan" className='pb-4'/>
            </Form.Group>
            <Button  className="btn-primary" size="sm" type="submit">Save</Button>
        </Form>
    </Card>
    </DefaultLayout>
  )
}

export default EditBrands