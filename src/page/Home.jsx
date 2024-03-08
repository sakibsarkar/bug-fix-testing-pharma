import React from 'react'
import Footer from '../component/footer/Footer'
import Header from '../component/header/Header'
import Contact from '../component/section/contact/Contact'
import HowOperation from '../component/section/howOperate/HowOperation'
import LabTest from '../component/section/labTestVerification/LabTest'
import TypeOfTest from '../component/section/typeOfTest/TypeOfTest'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HowOperation />
        <TypeOfTest/>
        <Contact/>
        <LabTest/>
      </main>
      <Footer />
    </>
  )
}

export default Home