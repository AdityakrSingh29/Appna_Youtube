import React from 'react'
import Button from './Button'


const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live" />
      <Button name="Cricket"/>
      <Button name="News"/>
      <Button name="Cooking"/>
      <Button name="Footbal"/>
      <Button name="Coding"/>
      <Button name="Web Dev"/>
      <Button name="App Dev"/>
      <Button name="Tech"/>
    </div>
  )
}

export default ButtonList
