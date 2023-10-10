import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import QRCode from 'react-qr-code'
import Download from 'src/assets/download.svg'
import Clip from ''src/assets/clip.svg'
import clipboardCopy from 'clipboard-copy'

export function QrCodePage({ url }) {
  const qrCodeRef = useRef(null)

  const downloadQRCode = () => {
    const qrCodeCanvas = qrCodeRef.current
    const svgData = new XMLSerializer().serializeToString(qrCodeCanvas)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      const pngFile = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a')
      downloadLink.download = 'QRCode'
      downloadLink.href = `${pngFile}`
      downloadLink.click()
    }
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`
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
