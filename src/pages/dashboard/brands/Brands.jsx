import { Table, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import DefaultLayout from "../../../components/dashboard/DefaultLayout"


const Brands = () => {
  return (
   <DefaultLayout>
    <div classname="d-flex justify-content-between align-item-center mb-3 mt-2" >
    <h1>Brand</h1>
    <Link to="/dashboard/brands/new">
      <Button size="sm" className="mt-3">Add New</Button>
      </Link>
      </div>
      <div className="card-table animated fadeInDown">
      <Table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Keterangan</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>Loading...</td>
        <td>Loading...</td>
        <td>Loading...</td>
          <td>
            <Link to="/dashboard/brands/:id">
            <Button className="btn-warning text-white me-2" size="sm">Edit</Button>
            <Button className="btn-danger" size="sm">Delete</Button>
            </Link>
          </td>
        </tr>
      </tbody>
      </Table>
    </div>
   
  </DefaultLayout>


  )
}


export default Brands
