import Layout from '../components/Layout'
import {useState} from 'react'
import {Row, Col} from 'react-bootstrap-v5'
import BookItem from '../components/BookItem'

const EBooks = () => {

const [cards] = useState([
  {
    id: 1,
    title: '1987 Philippine Constitution',
    author: 'No author',
    description: '',
    topic: 'Law',
    cover: '/covers/1987-Philippine-Constitution.jpg',
    downloadUrl: 'https://drive.google.com/file/d/130RYoiaG0fJy4lM-fUQ-cXqb2Xp_Umqn/view?usp=sharing',
    redirectUrl: '',
  },
  {
    id: 2,
    title: 'The Philippine Islands, 1493-1898 / Blair and Robertson',
    author: 'Blair and Robertson',
    description: 'This is a 55-volume book and is the common reference of your college or highschool Philippine history textbooks.',
    topic: 'History',
    cover: '/covers/PHIslandsCover.jpg',
    downloadUrl: '',
    redirectUrl: 'https://mainlib.upd.edu.ph/the-philippine-islands-1493-1898-blair-and-robertson/',
  },
])

return (
  <Layout title="ReferencePH | Free EPUB books">
    <Row>
      <Col>
      <p className="callout callout-info">You need to download an eReader app like <strong>Google Play Books</strong> on your Android or iOS phone to be able to read EPUB file. See <a href="/guides">this guide</a>
      </p>
      </Col>
    </Row>
    <Row>
      {cards.map((card) => (
        <BookItem key={card.id} card={card} />
      ))}
    </Row>
  </Layout>
)
}

export default EBooks
