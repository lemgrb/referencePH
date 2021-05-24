import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="ReferencePH | About the site" metaDescription="Free eBooks in EPUB format about the Philippines and the Philippine government">
    <h1>About</h1>
    <p>I noticed many Philippine Government websites still release data on their site as PDF (unstructured). I feel like some users will benefit if I transform them to more open formats. For example, for eBooks, convert from PDF or webpage (with no proper formatting) to EPUB (which can be used using any ePUB reader app). Another example is from PDF to CSV/JSON (structured data) so it can be used in data analytics and/or visualization. I might also create data visualization microsites myself so this is where I plan to publish them.</p>
    <p>If you find value in this site, you might want to <a href="https://www.buymeacoffee.com/lemuelb">Buy me a coffee?</a> :)</p>

    <h2>Other Philippine Government open data sites</h2>
    <ul>
      <li><a href="https://data.gov.ph">Open Data Philippines</a></li>
      <li><a href="https://foi.gov.ph">FREEDOM OF INFORMATION Philippines</a></li>
      <li><a href="https://sparta.dap.edu.ph">Sparta Portal</a></li>
    </ul>
    <h2>Credits</h2>
    <p>Thanks to <a href="https://undraw.co/license">Undraw.co</a> for SVG images.</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
