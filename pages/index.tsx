import Layout from '../components/Layout'
import {useState, useEffect} from 'react'
import {Card, Row, Col} from 'react-bootstrap-v5'
import AOS from 'aos'
import 'aos/dist/aos.css'

const IndexPage = () => {

const [cards] = useState([
  {
    id: 1,
    title: 'Title',
    description: 'Lorem ipsum dolor',
    topic: 'topic1',
    cover: 'https://via.placeholder.com/200x300'
  },
  {
    id: 2,
    title: 'Title',
    description: 'Lorem ipsum dolor',
    topic: 'topic1',
    cover: 'https://via.placeholder.com/200x300'
  },
  {
    id: 3,
    title: 'Title',
    description: 'Lorem ipsum dolor',
    topic: 'topic1',
    cover: 'https://via.placeholder.com/200x300'
  },
  {
    id: 4,
    title: 'Title',
    description: 'Lorem ipsum dolor',
    topic: 'topic1',
    cover: 'https://via.placeholder.com/200x300'
  },
  {
    id: 5,
    title: 'Title',
    description: 'Lorem ipsum dolor',
    topic: 'topic1',
    cover: 'https://via.placeholder.com/200x300'
  },
  {
    id: 6,
    title: 'Title',
    description: 'Lorem ipsum dolor',
    topic: 'topic1',
    cover: 'https://via.placeholder.com/200x300'
  },
  {
    id: 7,
    title: 'Title',
    description: 'Lorem ipsum dolor',
    topic: 'topic1',
    cover: 'https://via.placeholder.com/200x300'
  },
])

useEffect(()=>{
  AOS.init();
},[]);


return (
  <Layout title="ReferencePH | Free EPUB books and others" home={true}>
    <main>
      <Row>
        {cards.map((card) => (
          <Col key={card.id} xs={6} md={2} className="mb-2" data-aos="flip-left">
            <Card className="mb-2">
              <Card.Img variant="top" src={card.cover} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description} </Card.Text>
              </Card.Body>
              {(card.topic)?
              <Card.Footer>
                <span className="badge bg-dark">{card?.topic}</span>
              </Card.Footer>
              : ' '}
            </Card>
          </Col>
        ))}
      </Row>
    </main>
  </Layout>
)
}

export default IndexPage
