import Cookie from "js-cookie"
import { Navigate } from "react-router-dom"

const PrivateRoutes = ({children}) => {
  const token = Cookie.get('token');
  
  if (!token)
  {
    return <Navigate to='/' replace/>
  }
  return children;
}

export default PrivateRoutes