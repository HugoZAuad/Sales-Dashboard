import { Header, CardComponent, AvatarList } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListData = [
    {
      avatar: '/dnc-Avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(360.0),
    },
    {
      avatar: '/dnc-Avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(12.0),
    },
    {
      avatar: '/dnc-Avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(6000.0),
    },
  ]
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData} />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
