import Layout from '../components/Layout'
import {Card, Row, Col} from 'react-bootstrap-v5'
import 'aos/dist/aos.css'
import Link from 'next/link'

const IndexPage = () => {

return (
  <Layout title="ReferencePH | Free EPUB books and others" home={true}>
    <main>
      <Row> 
        <Col md={4} className="d-flex align-items-stretch">
          <Card className="mb-2">
            <Card.Img className="p-2" variant="top" src="/undraw/undraw_Reading_book_re_kqpk.svg" alt="A man with halo on his head reading a book"  />
            <Card.Body>
              <Card.Title>eBooks</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Discover and download eBooks</Card.Subtitle>
              <Card.Text>
                You can download public domain eBooks in EPUB format. Most of the eBooks are from Philippine Government websites. I try to convert them from PDF to more open EPUB format.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link href="/ebooks" passHref><Card.Link>View all eBooks »</Card.Link></Link>
              <Card.Link href="/guides#what-is-epub">What is EPUB?</Card.Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4} className="d-flex align-items-stretch">
          <Card className="mb-2"> 
            <Card.Img className="p-2" variant="top" src="/undraw/undraw_data_processing_yrrv.svg" alt="Unknown"  />
            <Card.Body>
              <Card.Title>Open Data Sets</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Open Data Sets and visualization</Card.Subtitle>
              <Card.Text>
                Browse open data sets and visualization
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link href="#" passHref><Card.Link>View Data Sets »</Card.Link></Link> (Still working on this one)
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4} className="d-flex align-items-stretch">
          <Card className="mb-2">
            <Card.Img className="p-2" variant="top" src="/undraw/undraw_Helpful_sign_re_8ms5.svg" alt="Unknown"  />
            <Card.Body>
              <Card.Title>Guides</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Some Guides</Card.Subtitle>
              <Card.Text>
                View some guides and frequently asked questions.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link href="/guides" passHref><Card.Link>See Guides »</Card.Link></Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </main>
  </Layout>
)
}

export default IndexPage
