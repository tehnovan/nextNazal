import InputCard from '@/entities/things/InputCard'
import Card from '@/entities/things/ui/Card'
import React from 'react'

export default async function InputOutput () {
    const url = "https://65212453a4199548356cd8d4.mockapi.io/products"
    const response = await fetch(url);
    const products:products = await response.json()
  return (
    <>
    <InputCard/>
     <Card head="VERSLA IDIOT" text= "МЕНЯ БАНЯТ ПО КД"/>
     <Card head="нюхать беберу " text= "бебра"/>
     </>
  )
}
