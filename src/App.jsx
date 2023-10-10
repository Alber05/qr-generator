/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import { Layout } from './layout/Layout'
import { QrCodePage } from './pages/QrCodePage'
import { SearchPage } from './pages/SearchPage'
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
