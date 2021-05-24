import Layout from '../components/Layout'
import {useState, useEffect} from 'react'
import {Row} from 'react-bootstrap-v5'
import AOS from 'aos'
import 'aos/dist/aos.css'
import DataSetItemCard from '../components/DataSetItemCard'

const OpenData = () => {

// TODO: Put in backend and shared state
const [dataSets] = useState([
  {
    id: 1,
    title: 'Annual Audit Reports (OP, OPV)',
    author: 'Commission on Audit',
    description: 'Current version includes data from the Office of the President (OP) and Office of the Vice President (OVP)',
    source: 'https://www.coa.gov.ph/index.php/national-government-agencies',
    path: '/data/annual-audit-reports',
    formats: [
      { type: 'csv', path: 'https://drive.google.com/file/d/130RYoiaG0fJy4lM-fUQ-cXqb2Xp_Umqn/view?usp=sharing', version: '1.0' },
    ],
    topics: ['coa','audit'],
    cover: 'https://via.placeholder.com/40',
  },
  {
    id: 2,
    title: 'LRT-2 East Extension Timeline',
    author: 'LRTA',
    description: 'Project status since 2016',
    source: 'https://www.lrta.gov.ph',
    path: '/data/Lrt2EastExtensionTimeline',
    formats: [
      { type: 'csv', path: '', version: '1.0' },
    ],
    topics: ['buildbuildbuild','lrt-2'],
    cover: 'https://via.placeholder.com/40',
  },
  {
    id: 3,
    title: 'Annual Audit Reports 2020 - NATIONAL GOVERNMENT (Living document)',
    author: 'Commission on Audit',
    description: 'COA Audits for 2020',
    source: '',
    path: '/data/AnnualAuditReports2020',
    formats: [
      { type: 'csv', path: '', version: '1.0' },
    ],
    topics: ['coa','audit'],
    cover: 'https://via.placeholder.com/40',
  },
])

useEffect(()=>{
  AOS.init();
},[]);


return (
  <Layout title="ReferencePH | Data sets list">
    <Row>
      {dataSets.map((dataSetItem) => (
        <DataSetItemCard key={dataSetItem.id} card={dataSetItem} />
      ))}
    </Row>
  </Layout>
)
}

export default OpenData
