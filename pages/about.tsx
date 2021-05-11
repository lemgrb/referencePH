import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | ReferencePH information">
    <h1>About</h1>
    <p>Ang site na ito ay ginawa "for the good of the society". Bitaw, wala na talaga akong maisip na website kung san pwede akong magkapera.</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
