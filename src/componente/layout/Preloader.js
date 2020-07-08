import React from 'react'

const Preloader = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="spinnerCenter mt-5">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
