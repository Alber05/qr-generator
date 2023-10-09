import React from 'react'
import PropTypes from 'prop-types'

function Layout({ children }) {
  return (
    <main className='w-[90%] min-h-[90vh] mx-auto my-auto flex flex-col items-center justify-center'>
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
