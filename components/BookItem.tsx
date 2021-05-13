import React from 'react'
import {Card, Col} from 'react-bootstrap-v5'
import { Book } from '../interfaces'
import styles from './BookItem.module.scss'

type Props = {
  card: Book
}

const BookItem = ({ card }: Props) => (
    <Col xs={6} md={2} className="mb-2" data-aos="flip-left">
      <Card className={`mb-2 ${styles.card}`} >
        <Card.Img variant="top" src={card.cover} />
        <Card.Body className={styles['card-body']}>
          <Card.Title as="h6">{card.title}</Card.Title>
          {card.author?<Card.Subtitle as="h6" className={`text-muted ${styles['card-subtitle']}`}>{card.author}</Card.Subtitle>:''}
          {(card.url)?<p><a className="btn btn-sm btn-primary" href={card.url} download>Download EPUB</a></p>:''}
        </Card.Body>
        {(card.topic)?
        <Card.Footer className={styles['card-footer']}>
          <span className="badge bg-secondary">{card?.topic}</span>
        </Card.Footer>
        : ' '}
      </Card>
    </Col>
)

export default BookItem
