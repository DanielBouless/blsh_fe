import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { CurrentUser } from "../context/CurrentUser";

const LoginForm = ()=>{

    const { setCurrentUser } = useContext(CurrentUser);
    const navigate = useNavigate()

    const [ credentials, setCredentials ] = useState([{
        firstname: '',
        lastname: '',
        email:'',
        password:'',
    }])

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        const login = async(req, res)=>{
           const response = await fetch(`http://localhost:5050/users/signup`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })

            const data = await response.json()
            if(response.status === 200){
                setCurrentUser(data.user)
                localStorage.setItem('token', data.token)
                navigate('/login')
            } else {
                console.log('error my friend')
            }
        }

        login()

        
    }


    return(
        <>
        <Card>
            <Card.Title> Log In</Card.Title>
        <Form onSubmit={(e)=>handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control type="text" placeholder="EMAIL@EMAIL.COM" onChange={(e)=>{setCredentials({...credentials, email: e.target.value})}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password </Form.Label>
            <Form.Control type="text" placeholder="EMAIL@EMAIL.COM" onChange={(e)=>{setCredentials({...credentials, password: e.target.value})}}/>
        </Form.Group>
            <Button variant="primary" type="submit">
                 LOG IN
            </Button>
        </Form>
        </Card>
        </>
    )

}



export default LoginForm