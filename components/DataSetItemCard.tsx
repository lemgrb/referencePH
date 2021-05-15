import React from 'react'
import {Card, Col} from 'react-bootstrap-v5'
import { DataSetItem } from '../interfaces'
import styles from './DataSetItemCard.module.scss'
import Link from 'next/link'

type Props = {
  card: DataSetItem
}


const DataSetItemCard = ({ card }: Props) => {
  return(
      <Col xs={12} md={3} className="mb-2" data-aos="fade-left">
        <Link href={card.path}>
        <a className={styles.a}>
          <Card className={`mb-2 ${styles.card}`} >
            <Card.Body className={styles['card-body']}>
              <Card.Title as="h6">{card.title}</Card.Title>
              {card.author?
                <Card.Subtitle 
                  as="h6" 
                  className={`text-muted ${styles['card-subtitle']}`}>
                    {card.author}
                </Card.Subtitle>:''}
              {card.description?<p>{card.description}</p>:'No description'}
            </Card.Body>
            {(card.topics)?
            <Card.Footer className={styles['card-footer']}>
              {card.topics.map((topic) => (
                <span key={topic} className="badge bg-secondary me-1">{topic}</span>
              ))}
            </Card.Footer>
            : ' '}
          </Card>
        </a>
        </Link>
      </Col>
  )
}

export default DataSetItemCard
