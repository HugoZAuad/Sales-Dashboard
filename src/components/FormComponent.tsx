import { StyledButton, StyledInput } from '@/components'
import { formComponentProps } from '@/types'

function FormComponent(props: formComponentProps) {
  const { inputs, buttons, message } = props
  return (
    <form>
      {inputs.map((inputProps, index) => (
        <StyledInput key={index} {...inputProps} />
      ))}
      {buttons.map((buttonProps, index) => (
        <StyledButton key={index} {...buttonProps} />
      ))}
      {message && (
        <div style={{ color: message.type === 'error' ? 'red' : 'green' }}>
          {message.msg}
        </div>
      )}
    </form>
  )
}

export default FormComponent
