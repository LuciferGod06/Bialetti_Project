import React from 'react'
import './pagination.css'
import {Button} from '@chakra-ui/react'
import {ChevronLeftIcon} from '@chakra-ui/icons'

export const Pagination = () => {
  return (
    <div>
      <Button><ChevronLeftIcon w={"29px"} h={"25px"} /></Button>
      <Button>01</Button>
      <Button>02</Button>
      <Button>03</Button>
      <Button>04</Button>
    </div>
  )
}
