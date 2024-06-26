import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

const SignUpForm = ()=>{
    
    const navigate = useNavigate()

    const [ credentials, setCredentials ] = useState([{
        firstname: '',
        lastname: '',
        email:'',
        password:'',
    }])

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        const createUser = async(req, res)=>{
            await fetch(`http://localhost:5050/users/signup`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })

            if(await res.status === 200){
                navigate('/login')
            } else {
                console.log('error my friend')
            }
        }

        createUser()

        
    }


    return(
        <>
        <Card>
            <Card.Title> Sign Up</Card.Title>
        <Form onSubmit={(e)=>handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicFirstname">
            <Form.Label>Firstname: </Form.Label>
            <Form.Control type="text" placeholder="FIRSTNAME" onChange={(e)=>{setCredentials({...credentials, firstname: e.target.value})}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastname">
            <Form.Label>Lastname </Form.Label>
            <Form.Control type="text" placeholder="LASTNAME" onChange={(e)=>{setCredentials({...credentials, lastname: e.target.value})}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control type="text" placeholder="EMAIL@EMAIL.COM" onChange={(e)=>{setCredentials({...credentials, email: e.target.value})}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password </Form.Label>
            <Form.Control type="text" placeholder="EMAIL@EMAIL.COM" onChange={(e)=>{setCredentials({...credentials, password: e.target.value})}}/>
        </Form.Group>
            <Button variant="primary" type="submit">
                 SIGN UP
            </Button>
        </Form>
        </Card>
        </>
    )

}



export default SignUpForm