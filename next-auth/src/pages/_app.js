import { Header } from '@/components/header'
import '@/styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [name , setName ] = useState("");
  return(
  <div>
    <Header></Header>
<Component {...pageProps} name = {name} setName = {setName} />
  </div> 
  )
}
