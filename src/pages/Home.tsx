import {
  Header,
  CardComponent,
  AvatarList,
  CustomChart,
  CustomTable,
} from '@/components'
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

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span>Nome 1</span>,
        <span>nome1@email.com</span>,
        <button>Action</button>,
      ],
      [
        <span>Nome 2</span>,
        <span>nome2@email.com</span>,
        <button>Action</button>,
      ],
      [
        <span>Nome 3</span>,
        <span>nome3@email.com</span>,
        <button>Action</button>,
      ],
    ],
  }
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
        <CardComponent>
          <CustomChart
            labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']}
            data={[1000.12, 2456.54, 986.32, 654.89, 1234.56, 789.01]}
            type="bar"
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
