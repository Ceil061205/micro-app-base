import React from 'react'

function AppOne() {
  return (
    <div>
      <h1>      AppOne</h1>
       <micro-app name='my-app' url='http://localhost:3001/' baseroute="/app1"></micro-app>
    </div>
  )
}

export default AppOne