import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { Link,} from 'react-router-dom'


const DefaultLayout = ({children}) => {
return (
    <>
    <div id='defaultLayout' className='d-flex min-vh-100'>
        <aside className='bg-primary p-3' style={{width: "250px"}}>
            <h1 className='text-white text-center mt-2 mb-3'>Start</h1>
            <Nav className='flex-column'> 
                <Nav.Link as={Link} to="/dashboard" className='text-white'>Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/dashboard/banners"className='text-white'>Banners</Nav.Link>
                <Nav.Link as={Link} to="/dashboard/brands" className='text-white'>Brands</Nav.Link>
                <Nav.Link as={Link} to="/dashboard/products" className='text-white'>Products</Nav.Link>
                <Nav.Link as={Link} to="/dashboard/users" className='text-white'>Users</Nav.Link>
            </Nav>
        </aside>
        <div className='d-flex flex-column flex-grow-1 bg-light'>
            <Navbar className='shadow-sm bg-white p-3 '>
                <Container fluid>
                    <Navbar.Collapse className='justfy-content-end'></Navbar.Collapse>
                    <Button className='bg-transparent text-primary' size='sm'> Logout </Button>

                </Container>
            </Navbar>
            <main className='flex-grow-1 p-4'>
                {children}
            </main>
            <footer className='text-center mt-auto m-0 p-3'>
                <div>&copy; Syneps Academy</div>
            </footer>
        </div>
    </div>
</>
)
}

export default DefaultLayout