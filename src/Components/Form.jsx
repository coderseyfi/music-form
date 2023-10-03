import React from 'react'
import { useState } from 'react'
import './form.scss'
import axios from '../api/api'
import SubmitBox from './SubmitBox'

const Form = () => {
  const [submit, setSubmit] = useState(false)
  const [isValid, setIsValid] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const formObject = {}
    formData.forEach((value, key) => {
      formObject[key] = value
    })

    for (const key in formObject) {
      if (formObject.hasOwnProperty(key)) {
        if (formObject[key] === null || formObject[key] === '') {
          formObject[key] == null
        }
      }
    }

    try {
      const response = await axios.post('/music-appeal', formObject)
      setSubmit(true)
      console.log('form submit olundu', response.data)
    } catch (error) {
      console.log('form submit olunmadi', error)
      setIsValid(error.response.data.data)
      setSubmit(false)
    }
  }

  return (
    <>
      {!submit ? (
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-row">
            <label htmlFor="name">
              Ad <span className="star">*</span>
            </label>
            <input
              className={`${isValid?.name ? 'border-err' : ''}`}
              id="name"
              type="text"
              name="name"
            />
            {isValid?.name && (
              <span className="valid-msg">{...isValid?.name}</span>
            )}
          </div>
          <div className="input-row">
            <label htmlFor="surname">
              Soyad <span className="star">*</span>
            </label>
            <input
              id="surname"
              type="text"
              name="surname"
              className={`${isValid?.surname ? 'border-err' : ''}`}
            />
            {isValid?.surname && (
              <span className="valid-msg">{...isValid?.surname}</span>
            )}
          </div>
          <div className="wrapper">
            <div className="input-row">
              <label htmlFor="birth">
                Doğum tarixi <span className="star">*</span>
              </label>
              <input
                className={`${isValid?.birth ? 'border-err' : ''}`}
                name="birth"
                id="birth"
                type="date"
              />
              {isValid?.birth && (
                <span className="valid-msg">{...isValid?.birth}</span>
              )}
            </div>
            <div className="input-row">
              <label htmlFor="email">
                E-mail ünvanı <span className="star">*</span>
              </label>
              <input
                className={`${isValid?.email ? 'border-err' : ''}`}
                name="email"
                id="email"
                type="text"
              />
              {isValid?.email && (
                <span className="valid-msg">{...isValid?.email}</span>
              )}
            </div>
          </div>
          <div className="input-row">
            <label htmlFor="number">Əlaqə nömrəsi</label>
            <input name="wp_phone" id="number" type="text" />
          </div>
          <div className="input-row">
            <label htmlFor="education">
              Təmsil etdiyi təşkilat/iş yeri <span className="star">*</span>
            </label>
            <input
              className={`${isValid?.work ? 'border-err' : ''}`}
              name="work"
              id="education"
              type="text"
            />
            {isValid?.work && (
              <span className="valid-msg">{...isValid?.work}</span>
            )}
          </div>
          <div className="input-row">
            <label htmlFor="progress">
              Fəaliyyəti barədə məlumat <span className="star">*</span>
            </label>
            <input
              className={`${isValid?.activity ? 'border-err' : ''}`}
              name="activity"
              id="progress"
              type="text"
            />
            {isValid?.activity && (
              <span className="valid-msg">{...isValid?.activity}</span>
            )}
          </div>
          <div className="input-row">
            <label htmlFor="attention">
              Forumda iştirak məqsədi <span className="star">*</span>
            </label>
            <input
              className={`${isValid?.purpose ? 'border-err' : ''}`}
              name="purpose"
              id="attention"
              type="text"
            />
            {isValid?.purpose && (
              <span className="valid-msg">{...isValid?.purpose}</span>
            )}
          </div>
          <div className="input-row">
            <label htmlFor="notes">Əlavə qeydlər</label>
            <input
              className={`${isValid?.note ? 'border-err' : ''}`}
              name="note"
              id="notes"
              type="text"
            />
          </div>
          <p className="notfication">
            Tədbirdə iştirakla bağlı təsdiq e-poçt vasitəsilə bildiriləcək.
          </p>
          <div className="btn-area">
            <button className="submit-btn">
              <span>Göndər</span>
            </button>
          </div>
        </form>
      ) : (
        <SubmitBox />
      )}
    </>
  )
}

export default Form
