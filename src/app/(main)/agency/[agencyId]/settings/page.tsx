import React from 'react'

type Props = {
    children : React.ReactNode
}

const SettingsPage = ({params}:{params: {agencyId : string} }) => {
  return (
    <div>settings for this id :{params.agencyId}</div>
  )
}

export default SettingsPage