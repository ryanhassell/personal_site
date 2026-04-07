import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteFrame } from './components/SiteFrame'
import { siteContent } from './content/siteContent'
import { HomePage } from './pages/HomePage'
import { ResumePage } from './pages/ResumePage'

function App() {
  return (
    <SiteFrame content={siteContent}>
      <Routes>
        <Route element={<HomePage content={siteContent} />} path="/" />
        <Route element={<ResumePage content={siteContent} />} path="/resume" />
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
    </SiteFrame>
  )
}

export default App
