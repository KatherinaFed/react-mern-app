import React from 'react'
import { Outlet } from 'react-router-dom'
import { InfoWrapper } from './styles'

const Info = () => {
  return (
    <InfoWrapper>
      <Outlet />
    </InfoWrapper>
  )
}

export default Info