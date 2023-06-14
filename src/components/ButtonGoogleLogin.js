import { GoogleLogin } from "@react-oauth/google"
import { useLocalStorage} from '../hooks/localStorage'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const ButtonGoogleLogin = () => {
    const [credential, setCredentialStorage] = useLocalStorage ('credential')
    const navigate = useNavigate ()
    const  onCredentialSuccess = (response) => {
        setCredentialStorage(response.credential)
    }
    const  onCredentialError = (error) => {
        console.log(error)
    }
    useEffect (() => {
        credential && navigate ('/home')
    }, [credential])
    return (
        <div>
            <GoogleLogin onSuccess={onCredentialSuccess} onError={onCredentialError}>

            </GoogleLogin>
        </div>
        
    )
}