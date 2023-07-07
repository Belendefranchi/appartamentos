import { Container } from '@mui/material'
import React from 'react'
import { TableSearch } from '../../components/molecules/TableSearch'
import { MenuCategory } from '../../components/molecules/MenuCategory'
import { SuggestedSection } from '../../components/molecules/SuggestedSection'

const Home = () => {
  return (
    <Container maxWidth='xl' component='main'>
      <MenuCategory />
      <TableSearch />
      <SuggestedSection />
    </Container>
  )
}

export default Home
