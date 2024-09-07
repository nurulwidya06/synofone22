import { Card, Form, Button } from 'react-bootstrap'
import DefaultLayout from '../../../components/dashboard/DefaultLayout'

const CreateUsers = () => {
  return (
    <DefaultLayout>
    <Card className='p-3 border-0'>
        <h1>Edit Users</h1>
        <Form>
            <Form.Group className='mb-2'>
            <Form.Label>Nama</Form.Label>
            <Form.Control type="text" placeholder='nama'></Form.Control>
            </Form.Group>
            <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email" className='pb-4'/>
            </Form.Group>
            <Form.Group className="mb-2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" className='pb-4'/>
            </Form.Group>
            <Button  className="btn-primary" size="sm" type="submit">Save</Button>
        </Form>
    </Card>
    </DefaultLayout>
  )
}

export default CreateUsers