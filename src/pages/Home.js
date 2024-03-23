import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react'


const Home = () =>{

    const [ coin, setCoin] = useState('')
    const [ currency, setCurrency] = useState('')
    const [ tradingPair, setTradingPair ] = useState('BTC-USD')
    const [ price, setPrice ] = useState('')

    useEffect(()=>{
      setTradingPair(coin + '-' + currency)

    },[coin, currency])

    const handleSubmit =  (e) => {
        e.preventDefault()
        console.log(tradingPair)
        const fetchData = async()=>{
        const response = await fetch(`http://localhost:5050/assetInfo/${tradingPair}`,{
          method: 'GET',
          headers:{
            'Content-Type':'application/json',
          }
        })
        const res = await response.json()
        setPrice(res.price)
        console.log(res.price)

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
               Asset: {tradingPair}
            </Card.Text>
                Price: {price}
            <Card.Text>

            </Card.Text>
        </Card>
        </>
  );
    
}

export default Home