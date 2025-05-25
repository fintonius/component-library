import Badge from './components/Badge'
import BadgeList from './components/BadgeList'
import Banner from './components/Banner'
import Card from './components/Card'
import Testimonial from './components/Testimonial'

export default function App() {

    return (
    <>
      <BadgeList />
      <Banner 
        setStatus="success" 
        setMessage='Congrats'>
          Some additional info here
      </Banner>
      <Banner 
        setStatus="warning" 
        setMessage='Attention'>
          Some additional info here
      </Banner>
      <Banner 
        setStatus="neutral" 
        setMessage=''>
          Some additional info here
      </Banner>
      <Banner 
        setStatus="error" 
        setMessage={`You don't belong here`}>
          Some additional info here
      </Banner>
      <Banner 
        setStatus="success" 
        setMessage='Congrats'>
      </Banner>
      <Card>Card</Card>
      <Testimonial>Testimonial</Testimonial>
    </>
  )
}


