import React from 'react'
import "../layout.scss"
import { Header1, Header2 } from './header'
export const Navbar= () => {
  return (
    <div className='c-header j-c-header1'>
        <Header1/>
        <Header2/>
    </div>
  )
}
