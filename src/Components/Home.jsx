import React from 'react'
import Terminal from './Terminal'
import Attribution from './Attribution'
import '../Styles/global.scss'

export default function Home() {
  return (
    <>
        <div className="wrapper"></div>
        <Terminal/>
        <Attribution/>
    </>
  )
}
