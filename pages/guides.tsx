import Link from 'next/link'
import Layout from '../components/Layout'
import { Row, Col} from 'react-bootstrap-v5'

const GuidesPage = () => (
  <Layout title="Guides | Some guides">
    <h2 id="what-is-epub">What is EPUB?</h2>
    <p>"EPUB is an e-book file format that uses the ".epub" file extension. The term is short for electronic publication and is sometimes styled ePub. EPUB is supported by many e-readers, and compatible software is available for most smartphones, tablets, and computers." - Wikipedia</p>
    <h3>But why EPUB?</h3>
    <p>Compared to reading from a webpage, it feels like reading an actual book. On Google Play Books for example, there is a turn and flip animation. You can also read offline.</p>
    <p>Some e-readers you can use:</p>
    <dl>
      <dt>Google Play Books</dt>
      <dd>This is my preferred e-reader available in <a href="https://play.google.com/books/ebooks">Web</a>, <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.books&hl=en&gl=US">Android</a>, and <a href="https://apps.apple.com/us/app/google-play-books/id400989007">iOS</a>. It has many of the features I'd want to use like Adding bookmarks, highlights, notes, translate, define, search for a word. Your notes can be synced. You can also change the font type and size, background tone (sepia, black, white), line height, and text alignment. The table of contents menu also makes going to different pages much easier.
      </dd>
    </dl>
    <Row className="d-flex justify-content-center">
    <Col md={4}>
    <figure className="figure text-center">
      <img src="/play-books-black-tone.png" alt="Screenshot of Google Play Books with Black tone" className="img-fluid"/>
      <figcaption className="figure-caption">Google Play Books with black tone as background</figcaption>
    </figure>
    </Col>
    </Row>
    <Link href="/">
      <a>Go home</a>
    </Link>
  </Layout>
)

export default GuidesPage 
