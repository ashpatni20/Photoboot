import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../main'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRoute = () => {
    
    const {auth} = useContext(AuthContext);

    if(!auth){
        return <Navigate to="/" replace={true}/>
    }
    return <Outlet/>
}

export default PrivateRoute
