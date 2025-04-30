import {
  Header,
  CardComponent,
  AvatarList,
  CustomChart,
  CustomTable,
  StyledH2,
} from '@/components'
import { Container, Grid } from '@mui/material'
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
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <CardComponent>
              <StyledH2 className="mb-1"> Total de Vendas no Mês </StyledH2>
            </CardComponent>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardComponent>
              <StyledH2 className="mb-1"> Meta do Mês </StyledH2>
            </CardComponent>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardComponent>
              <StyledH2 className="mb-1"> Leads Contactados </StyledH2>
            </CardComponent>
          </Grid>
          <Grid item xs={12} md={7}>
            <CardComponent>
              <StyledH2 className="mb-1"> Valor de Vendas no Mês </StyledH2>
              <CustomChart
                labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']}
                data={[1000.12, 2456.54, 986.32, 654.89, 1234.56, 789.01]}
                type="line"
              />
            </CardComponent>
          </Grid>
          <Grid item xs={12} md={5}>
            <CardComponent>
              <StyledH2 className="mb-1"> Maiores Vendedores do Mês </StyledH2>
              <AvatarList listData={mockListData} />
            </CardComponent>
          </Grid>
          <Grid item xs={12} md={5}>
            <CardComponent>
              <StyledH2 className="mb-1"> Noticias Relevantes </StyledH2>
              <CustomTable
                headers={mockTableData.headers}
                rows={mockTableData.rows}
              />
            </CardComponent>
          </Grid>
          <Grid item xs={12} md={7}>
            <CardComponent>
              <StyledH2 className="mb-1"> Valor de Vendas por Mês </StyledH2>
              <CustomChart
                labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']}
                data={[1000.12, 2456.54, 986.32, 654.89, 1234.56, 789.01]}
                type="bar"
              />
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
