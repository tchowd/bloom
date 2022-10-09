import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../Dashboard/Sidebar'
import { useEffect, useState } from 'react'
import { client, getRecommendedProfiles } from '../../api'

const Profiles: NextPage = () => {
  // we want to called fetchRecommendedProfiles on every load
  const [profiles, setProfiles] = useState()

  useEffect(() => {
    fetchRecommendedProfiles()
  }, [])

  async function fetchRecommendedProfiles() {
    try {
      const response = await client.query(getRecommendedProfiles).toPromise()
      setProfiles(response.data.recommendedProfiles)
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Sidebar children={undefined} />
    </>
  )
}

export default Profiles