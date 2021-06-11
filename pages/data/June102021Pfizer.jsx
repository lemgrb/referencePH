import Layout from '../../components/Layout'
import {Row, Col, Card} from 'react-bootstrap-v5'
import {Doughnut} from 'react-chartjs-2'
import {Tweet} from 'react-twitter-widgets'

const June102021Pfizer = () => {
   const data = {
    labels: ['Cebu', 'Davao', 'Metro-Manila and nearby provinces'],
    datasets: [
      {
        label: '# of Vaccines',
        data: [210600, 210600, 1857960],
        backgroundColor: [
          '#0038A8',
          '#CE1126',
          '#FCD116',
        ],
        borderColor: [
          '#0038A8',
          '#CE1126',
          '#FCD116',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Layout title="ReferencePH | Data | June 10, 2021 Pfizer Vaccines" metaDescription="June 10, 2021 Pfizer Vaccines allocation">
      <Row>
        <Col md={3}>
          <Card className="mb-2">
            <Card.Body>
              <p>According to reports, 2,279,160 Pfizer vaccines were received on June 10, 2021 as <strong>donation</strong> from COVAX. 
210,600 will go to Cebu, and 210,600 will go to Davao. The remaining 1,857,960 will go to
Metro Manila and Nearby Provinces.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <h1 className="display-h1">June 10, 2021 Pfizer Vaccine allocation</h1>
          <Doughnut data={data} className="chart" />
          <h3>Sources</h3>
          <ul>
          <li><small><a href="https://www.pna.gov.ph/articles/1143344">PH receives biggest Pfizer vax shipment through COVAX
</a>, PNA.gov.ph, Accessed June 11, 2021</small></li>
          <li><small><a href="https://www.rappler.com/nation/philippines-receives-pfizer-covid-19-vaccine-doses-june-10-2021">PH receives 2.2M Pfizer doses, biggest vaccine delivery so far</a>, Rappler.com, Accessed June 11, 2021</small></li>
          </ul>
          <p>Tweet from NTF-COVID:</p>
          <Tweet tweetId="1403010795907162118" />
        </Col>
      </Row>
    </Layout>
  )
}
export default June102021Pfizer; 
