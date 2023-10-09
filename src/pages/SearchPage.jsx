import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Logo from '../assets/logo-qr-generator.svg'

function SearchPage({ setUrl }) {
  const [queryUrl, setQueryUrl] = useState('')

  const handleChange = (e) => {
    setQueryUrl(e.target.value)
  }

  const submitUrl = (e) => {
    e.preventDefault()
    setUrl(queryUrl)
    setQueryUrl('')
  }

  return (
    <>
      <img src={Logo} alt='Qr generator logo' className='mb-8' />
      <form
        className='w-[90%] max-w-[600px] h-[60px] flex items-center justify-between p-1 rounded-xl border-2 bg-customNavyBlue  border-customBlue text-customWhite'
        onSubmit={submitUrl}
      >
        <input
          type='text'
          placeholder='Enter an url'
          className='w-3/4 bg-customNavyBlue outline-none p-1 px-4'
          onChange={(e) => handleChange(e)}
        />
        <button type='submit' className='h-full w-1/4 bg-customBlue rounded-xl'>
          QR code
        </button>
      </form>
    </>
  )
}

SearchPage.propTypes = {
  setUrl: PropTypes.func.isRequired
}

export default SearchPage
