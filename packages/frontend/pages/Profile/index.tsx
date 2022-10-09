import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../Dashboard/Sidebar'
import Follow from './follow'

const Personal: NextPage = () => {
  return (
    <>
      <Sidebar children={undefined} />
      <Follow></Follow>
    </>
  )
}

export default Personal