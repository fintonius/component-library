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
        setGreeting='Congrats'>
          Some additional info here
      </Banner>
      <Banner 
        setStatus="warning" 
        setGreeting='Attention'>
          Some additional info here
      </Banner>
      <Card>Card</Card>
      <Testimonial>Testimonial</Testimonial>
    </>
  )
}


