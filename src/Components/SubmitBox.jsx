import React from 'react'
import './submitbox.scss'
import Submit from '../assets/icons/submit.svg'

const SubmitBox = () => {
  return (
    <div className="form-submit-message">
      <div className="submit-box">
        <img src={Submit} alt="" />
        <p className="success">Müraciətiniz uğurla göndərildi</p>
      </div>
    </div>
  )
}

export default SubmitBox
