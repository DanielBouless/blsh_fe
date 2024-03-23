import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import { useState } from 'react'


const Home = () =>{

    const [ coin, setCoin] = useState('')
    const [ currency, setCurrency] = useState('')
    const [ tradingPair, setTradingPair ] = useState('BTC-USD')

    const handleSubmit =  (e) => {
        e.preventDefault()
        setTradingPair(coin + '-' + currency)
        console.log(tradingPair)
        const fetchData = async()=>{
        const response = await fetch(`http://localhost:5050/assetInfo/${tradingPair}`,{
          method: 'GET',
          headers:{
            'Content-Type':'application/json',
          }
        })
        const res = await response.json()
        console.log(res)

      }
        fetchData()
    }

    return(
        <>
        <Form onSubmit={(e)=>handleSubmit(e)}>
          <Form.Group>
            <Form.Text>SEARCH FOR PAIR</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Coin Ticker </Form.Label>
            <Form.Control type="text" placeholder="i.e. BTC" onChange={(e)=>{setCoin((e.target.value).toUpperCase()) }}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Currency </Form.Label>
            <Form.Control type="text" placeholder="i.e. BTC" onChange={(e)=>{setCurrency((e.target.value).toUpperCase()) }}/>
          </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
        <Card>
            <Card.Text>
                {tradingPair}
            </Card.Text>
        </Card>
        </>
  );
    
}

export default Home