import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import QRCode from 'react-qr-code'
import Download from '../assets/download.svg'
import Clip from '../assets/clip.svg'
import clipboardCopy from 'clipboard-copy'

function QrCodePage({ url }) {
  const qrCodeRef = useRef(null)

  console.log(qrCodeRef)

  const downloadQRCode = () => {
    const qrCodeCanvas = qrCodeRef.current.props
    console.log(qrCodeCanvas)
  }

  const copyToClipboard = (url) => {
    clipboardCopy(url)
      .then(() => {
        alert('URL copiada al portapapeles')
      })
      .catch((error) => {
        console.error('Error al copiar la URL al portapapeles: ', error)
      })
  }

  return (
    <>
      <div className='relative bg-[#203258] rounded-full w-[310px] h-[310px] flex items-center justify-center'>
        <div className='bg-customWhite p-6 rounded-xl absolute h-[250px] w-[250px] flex items-center justify-center'>
          <QRCode value={url} size={250} ref={qrCodeRef} />
        </div>
      </div>
      <div className='flex justify-center w-full mx-auto mt-12 gap-12'>
        <button
          className='flex items-center justify-center gap-2 bg-customBlue py-4 px-6 min-w-[150px] rounded-xl text-customWhite'
          onClick={downloadQRCode}
        >
          <span>Download</span>
          <img src={Download} alt='' className='h-4' />
        </button>
        <button
          className='flex items-center justify-center gap-2 bg-customBlue py-4 px-6 min-w-[150px] rounded-xl text-customWhite'
          onClick={() => copyToClipboard(url)}
        >
          <span>Share</span>
          <img src={Clip} alt='' className='h-4' />
        </button>
      </div>
    </>
  )
}

QrCodePage.propTypes = {
  url: PropTypes.string.isRequired
}

export default QrCodePage
