import { Button } from '@chakra-ui/react'
import React from 'react'

interface Props{
    label: string
}

const RedirectBtn = ({label}: Props) => {
  return (
    <Button w={200} h={45} bgColor="pink.700" color="common.100" fontSize={18} borderRadius={20} mt={5}>{label}</Button>
  )
}

export default RedirectBtn