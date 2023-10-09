/* eslint-disable multiline-ternary */
import { useState } from 'react'
import Layout from './layout/Layout'
import SearchPage from './pages/searchPage'
import QrCodePage from './pages/qrCodePage'

function App() {
  const [url, setUrl] = useState('')

  return (
    <Layout>
      {url ? (
        <QrCodePage url={url} />
      ) : (
        <SearchPage url={url} setUrl={setUrl} />
      )}
    </Layout>
  )
}

export default App
