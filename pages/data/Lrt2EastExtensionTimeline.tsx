import Layout from '../../components/Layout'
import {Row, Col, Card} from 'react-bootstrap-v5'

const Lrt2EastExtensionTimeline = () => {
  return (
    <Layout title="LRT-2 East Extension timeline" metaDescription="LRT-2 East Extension project progress since 2016">
      <Row>
        <Col md={3}>
          <Card className="mb-2">
            <Card.Body>
              <p>Available formats: <a className="btn btn-sm btn-primary" href="/data/lrt-2-east-extension.zip" download>EXCEL (Zipped)</a>
              </p>
              
              </Card.Body>
            </Card>
        </Col>
        <Col md={9}>
          <h1 className="display-h1">LRT-2 East Extension Project Timeline</h1>
          <p>This project was approved by NEDA in September 2012.<sup>6</sup></p>
          <div className="table-responsive" style={{fontSize: "0.7rem", fontFamily:"system-ui"}}>
          <table className="table table-sm table-striped table-bordered">
            <thead>
              <tr>
                <th>Scope</th>
                <th>2016<sup>[1]</sup></th>
                <th>2017<sup>[2]</sup></th>
                <th>2018<sup>[3]</sup></th>
                <th>2019<sup>[4]</sup></th>
                <th>2020<sup>[5]</sup></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Consultancy Services (Interface)</td>
                <td>No data</td>
                <td>No data</td>
                <td>No data</td>
                <td>No data</td>
                <td className="table-danger">38.53%</td>
              </tr>
              <tr>
                <td>Design and Construction of Electro-Mechanical (E/M) Equipment</td>
                <td>On-going procurement process (For re-bidding) for E/M contractor</td>
                <td>No data</td>
                <td>DOTr issued LOA to contractor dated December 14, 2018</td>
                <td className="table-danger">37.56%</td>
                <td className="table-warning">86.48%</td>
              </tr>
              <tr>
                <td>Consultancy Services for Electro-Mechanical</td>
                <td className="table-danger">41.92%</td>
                <td>No data</td>
                <td className="table-danger">45.77%</td>
                <td className="table-warning">70.68%</td>
                <td className="table-success">93.17%</td>
              </tr>
              <tr>
                <td>Civil Works Package 2 – Design and Build of Stations</td>
                <td>For issuance of NOA (Bid-out on 23 September 2016)</td>
                <td>Groundbreaking, May 30, 2017</td>
                <td className="table-warning">67.36%</td>
                <td className="table-success">96.12%</td>
                <td className="table-success">96.297%</td>
              </tr>
              <tr>
                <td>Civil Works Package 1 – Construction of Viaduct</td>
                <td className="table-success">98.62%</td>
                <td className="table-success">100%</td>
                <td className="table-success">100%</td>
                <td className="table-success">-</td>
                <td className="table-success">100%</td>
              </tr>
              <tr>
                <td>Consultancy Services for Civil Works</td>
                <td className="table-warning">78.52%</td>
                <td>No data</td>
                <td className="table-success">100%</td>
                <td className="table-success"><span className="text-danger">*98.43%</span></td>
                <td className="table-success"><span className="text-danger">*98.46%</span></td>
              </tr>
            </tbody>
          </table>
          <p>* In 2018, this is already marked as 100%</p>
          <p>Please double check the accuracy of figures from sources</p>
          <ul className="list-unstyled">
                <li><sup>1</sup> https://www.lrta.gov.ph/wp-content/uploads/2021/03/Annual-Report-2016.pdf
</li>
                <li><sup>2</sup> https://www.lrta.gov.ph/wp-content/uploads/2021/03/Annual-Report-2017.pdf
</li>
                <li><sup>3</sup> https://www.lrta.gov.ph/wp-content/uploads/2021/03/Annual-Report-2018.pdf
</li>
                <li><sup>4</sup> https://www.lrta.gov.ph/wp-content/uploads/2021/03/Accomplishment-Report-2019.pdf
</li>
                <li><sup>5</sup> https://www.lrta.gov.ph/wp-content/uploads/2021/04/Accomplishment-Report-2020-1.pdf
</li>  
                <li><sup>6</sup> https://web.archive.org/web/20120906032601/http://businessmirror.com.ph/home/top-news/32326-neda-board-oks-9-big-projects
</li>  
              </ul>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}
export default Lrt2EastExtensionTimeline
