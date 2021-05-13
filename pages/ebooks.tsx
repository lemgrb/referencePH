import Layout from '../components/Layout'
import {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap-v5'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BookItem from '../components/BookItem'

const EBooks = () => {

const [cards] = useState([
  {
    id: 1,
    title: '1987 Philippine Constitution',
    author: 'No author',
    description: '1987 Philippine Constitution',
    topic: 'Law',
    cover: '/covers/1987-Philippine-Constitution.jpg',
    url: 'https://drive.google.com/file/d/130RYoiaG0fJy4lM-fUQ-cXqb2Xp_Umqn/view?usp=sharing',
  },
  {
    id: 2,
    title: 'Coming soon',
    author: 'No author',
    description: 'Lorem ipsum dolor',
    topic: 'topic1',
    cover: 'https://via.placeholder.com/200x300',
    url: '',
  },
])

useEffect(()=>{
  AOS.init();
},[]);


return (
  <Layout title="ReferencePH | Free EPUB books">
    <main>
      <Row>
        <Col><p>Only 1 book is available.</p></Col>
      </Row>
      <Row>
        {cards.map((card) => (
          <BookItem key={card.id} card={card} />
        ))}
      </Row>
    </main>
  </Layout>
)
}

export default EBooks
