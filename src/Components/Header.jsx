import React from 'react'
import LogoFond from '../assets/icons/logo1.png'
import LogoCulture from '../assets/icons/logo2.png'
import './header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={LogoFond} alt="" />
        <img src={LogoCulture} alt="" />
      </div>
      <div className="info">
        <p className="info__text">
          Ümummilli lider Heydər Əliyevin 100 illik yubileyi çərçivəsində
          Azərbaycanda ilk dəfə olaraq keçirilən "Musiqi Forumu"nda iştirak üçün
          müraciət
        </p>
        <p className="info__title">29-31 oktyabr 2023-cü il | Bakı şəhəri</p>
      </div>
    </div>
  )
}

export default Header
