import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/organism/header/Header'
import Footer from '../components/organism/footer/Footer'
import { sections } from '../data/header.data'
import { footers } from '../data/footer.data'

export const LayoutGeneral = () => {
  return (
    <>
      <Header sections={sections} title="Appartamentos" />
      <main>
        <Outlet/>
      </main>
      <Footer footers={footers} />
    </>
  )
}
