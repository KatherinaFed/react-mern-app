import React from 'react'
import Info from './Info/Info'
import Sidebar from './Sidebar/Sidebar'
import { SettingWrapper } from './styles'

const Settings = () => {
  return (
    <SettingWrapper>
      <Sidebar />
      <Info />
    </SettingWrapper>
  )
}

export default Settings