<<<<<<< HEAD
import { highlightTextConverter } from '@/utils'
=======
import { highlightTextConverter } from '@/utils/highlightTextConverter'
>>>>>>> f4bd104 (feat: adding unit tests)

describe('highlightTextConverter', () => {
  it('should return the correct text for "alert"', () => {
    expect(highlightTextConverter('alert')).toBe('* Meta longe de ser batida')
  })
  it('should return the correct text for "success"', () => {
    expect(highlightTextConverter('success')).toBe(
      '* A meta do mês foi batida! Parabéns!'
    )
  })
  it('should return the correct text for "warning"', () => {
    expect(highlightTextConverter('warning')).toBe('* Falta pouco, vamos lá!')
  })
  it('should return the correct text for unknow input', () => {
    expect(highlightTextConverter('default')).toBe('* Sem dados no momento')
  })
})
