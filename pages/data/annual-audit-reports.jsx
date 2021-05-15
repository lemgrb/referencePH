import Layout from '../../components/Layout'
import {Row, Col, Card} from 'react-bootstrap-v5'
import {useMemo, useState, useEffect} from 'react'
import Table from '../../components/Table'
import OpinionCell from '../../components/OpinionCell'
import axios from 'axios'

const AnnualDataReports = () => {
  const [data, setData] = useState([])
  // TODO: This is temporary; eventually i will use d3 and/or DataTables for all visualizations

 
  /* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */
  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "National Government Agencies",
        // First group columns
        columns: [
          {
            Header: "Year",
            accessor: "year"
          },
          {
            Header: "Office",
            accessor: "office"
          },
          {
            Header: "Opinion",
            accessor: "opinion",
            Cell: ({ value }) => <OpinionCell value={value} />
          },
          {
            Header: "Long Opinion",
            accessor: "opinion_long"
          },
        ]
      },
    ],
    []
  );

  useEffect(()=>{
    (async ()=>{
      const result = await axios.get('/data/annual_audit_reports_v0.1.json')
      setData(result.data)
    })();
  },[])

  return (
    <Layout>
      <Row>
        <Col md={3}>
          <Card className="mb-2">
            <Card.Body>
              <p>Available formats: <a className="btn btn-sm btn-primary" href="/data/annual_audit_reports_v0.1.csv" download>CSV</a> <a className="btn btn-sm btn-primary" href="/data/annual_audit_reports_v0.1.json" download>JSON</a>
              </p>
              <p>Source: <a href="https://www.coa.gov.ph/index.php/national-government-agencies">COA Annual Audit Reports - National Government Agencies</a></p>
              </Card.Body>
            </Card>
        </Col>
        <Col md={9}>
          <h1 className="display-h1">Annual Audit Reports (OP, OVP)</h1>
          <p>A <strong>qualified opinion</strong> is a reflection of the auditor’s inability to give an unqualified, or clean, audit opinion. An <strong>unqualified opinion</strong> is issued if the financial statements are presumed to be free from material misstatements. (<a href="https://www.investopedia.com/terms/q/qualifiedopinion.asp">Investopedia</a>)</p>
          <Table columns={columns} data={data} />
        </Col>
      </Row>
    </Layout>
  )
}
export default AnnualDataReports
