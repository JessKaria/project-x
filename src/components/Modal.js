import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ open, children, onClose }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <div className="show-modal">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal