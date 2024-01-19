import { Outlet, Navigate } from 'react-router-dom'
import { StateContext } from '../context'
import { useContext } from 'react'
import { AppState } from '../context/types'

const PrivateRoutes = () => {
    const stateContext: AppState = useContext(StateContext)
    const { userAuthenticated } = stateContext
    return (
        userAuthenticated ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoutes