import React, { useState } from 'react'

function Login() {
  const {}
  const doLogin=()=>{
  
  }

  return (
    <div>
      <button onClick={()=>doLogin('admin')}>admin 로그인</button>
      <button onClick={()=>doLogin('spring')}>spring 로그인</button>
      <button onClick={()=>doLogin('winter')}>winter 로그인</button>
    </div>
  )
}

export default Login