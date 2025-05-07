/* eslint-disable react-hooks/exhaustive-deps */
//Components
import { ChangeEvent, useState, useEffect } from 'react'
import {
  Header,
  FormComponent,
  CardComponent,
  StyledButton,
  StyledH2,
  CustomTable,
  StyledP,
  StyledSpan,
} from '@/components'
import { Container, Grid } from '@mui/material'

//Hook
import { useFormValidation, useGet, usePost, useDelete } from '@/hooks'

//Types
import { InputProps, LeadsData, LeadsPostData, MessageProps } from '@/types'

function Leads() {
  //Hooks
  const {
    data: createLeadsData,
    loading: createLeadsLoading,
    error: createLeadsError,
    postData: CreateLeadsPostData,
  } = usePost<LeadsData, LeadsPostData>('leads/create', true)

  const {
    data: leadsData,
    loading: leadsLoading,
    error: leadsError,
    getData: getLeads,
  } = useGet<LeadsData[]>('leads')

  const { deleteData: leadsDeleteData, loading: leadsDeleteLoading } =
    useDelete('leads/delete')

  //Form
  const inputs: InputProps[] = [
    { name: 'name', type: 'text', placeholder: 'Nome', required: true },
    { name: 'email', type: 'email', placeholder: 'E-mail', required: true },
    { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
  ]

  const { formValues, formValid, handleChange } = useFormValidation(inputs)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await CreateLeadsPostData({
      name: String(formValues[0]),
      email: String(formValues[1]),
      phone: String(formValues[2]),
    })
  }

  const handleDelete = async (id: number) => {
    if (confirm('Tem certeza que deseja excluir seu lead?')) {
      try {
        await leadsDeleteData({ params: { id: id } })
        alert('Lead deletado com sucesso!')
        getLeads()
      } catch (e) {
        alert(
          'Não foi possivel realizar a operação. Entre em contato com nosso suporte'
        )
      }
    }
  }

  const [createMessage, setCreateMessage] = useState<MessageProps>({
    type: 'sucess',
    msg: '',
  })

  const clearMessage = () => {
    setTimeout(() => {
      setCreateMessage({
        type: 'sucess',
        msg: '',
      })
    }, 3000)
  }

  useEffect(() => {
    if (createLeadsData?.id) {
      setCreateMessage({
        msg: 'Lead criado com sucesso!',
        type: 'sucess',
      })
      getLeads()
      clearMessage()
    } else if (createLeadsError)
      setCreateMessage({
        msg: 'Não foi possivel realizar a operação. Entre em contato com nosso suporte',
        type: 'error',
      })
    else {
      clearMessage()
    }
  }, [createLeadsData, createLeadsError])

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={7}>
            <CardComponent
              className={
                leadsLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''
              }
            >
              {!leadsError && !leadsLoading && (
                <>
                  <StyledH2 className="mb-1" id="leads-title">
                    Meus Leads
                  </StyledH2>
                  {leadsData?.length ? (
                    <CustomTable
                      headers={['Nome', 'E-mail', 'Telefone', '']}
                      rows={leadsData.map((lead) => [
                        <StyledP>{lead.name}</StyledP>,
                        <StyledP>{lead.email}</StyledP>,
                        <StyledP>{lead.phone}</StyledP>,
                        <StyledButton
                          className="borderless-alert"
                          onClick={() => handleDelete(lead.id)}
                          disabled={leadsDeleteLoading}
                        >
                          Excluir
                        </StyledButton>,
                      ])}
                    />
                  ) : (
                    <StyledSpan> Sem Leads Cadastrados</StyledSpan>
                  )}
                </>
              )}
            </CardComponent>
          </Grid>
          <Grid item xs={12} sm={5}>
            <CardComponent>
              <StyledH2 className="mb-1">Cadastrar Leads</StyledH2>
              <FormComponent
                inputs={inputs.map((input, index) => ({
                  ...input,
                  type: input.type,
                  placeholder: input.placeholder,
                  value: formValues[index] || '',
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, (e.target as HTMLInputElement).value),
                }))}
                buttons={[
                  {
                    className: 'primary',
                    disabled:
                      !formValid || createLeadsLoading || leadsDeleteLoading,
                    type: 'submit',
                    onClick: handleSubmit,
                    children: 'Cadastrar Lead',
                  },
                ]}
                message={createMessage}
              />
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Leads
