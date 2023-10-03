import React from 'react'
import Form from '../Components/Form'
import Header from '../Components/Header'
import './dashboard.scss'
import IsoLeft from '../assets/icons/isoLeft.svg'
import IsoRight from '../assets/icons/isoRight.svg'

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="right">
        <img src={IsoRight} alt="svg" />
      </div>
      <div className="container">
        <Header />
        <Form />
      </div>
      <div className="left">
        <img src={IsoLeft} alt="svg" />
      </div>
    </section>
  )
}

export default Dashboard
