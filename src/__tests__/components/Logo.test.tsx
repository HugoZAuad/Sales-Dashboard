import '@testing-library/jest-dom'
import 'jest-styled-components'
<<<<<<< HEAD
import { Logo } from '@/components'
=======
import { Logo } from '@/components/Logo'
>>>>>>> f4bd104 (feat: adding unit tests)
import { pxToRem } from '@/utils/pxToRem'
import { render } from '@testing-library/react'
import { Theme } from '@/types/theme'
import { ThemeProvider } from 'styled-components'
import { themesList } from '@/resources/themes'

<<<<<<< HEAD
describe('Logo', () => {
=======
describe('pxToRem', () => {
>>>>>>> f4bd104 (feat: adding unit tests)
  const renderComponent = (theme: Theme, width?: number, height?: number) =>
    render(
      <ThemeProvider theme={theme}>
        <Logo height={height ?? 32} width={width ?? 32} />
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('should apply the correct background image', () => {
        const { container } = renderComponent(theme)
        expect(container.firstChild).toHaveStyleRule(
          'background-image',
<<<<<<< HEAD
          `url(${theme.appLogo})`
        )
      })

      it('should apply the correct height and width', () => {
        const { container } = renderComponent(theme, 40, 40)
        expect(container.firstChild).toHaveStyleRule('height', pxToRem(40))
        expect(container.firstChild).toHaveStyleRule('width', pxToRem(40))
      })
    })
  })
})
=======
          `url(/${theme.appLogo})`
        )
      })
    })

    it('should apply the correct height image'),
      () => {
        const { container } = renderComponent(theme, 40, 40)
        expect(container.firstChild).toHaveStyleRule('height', pxToRem(40))
        expect(container.firstChild).toHaveStyleRule('width', pxToRem(40))
      }
  })
})

it('should correctly convert pixels to rem for positive values', () => {
  expect(pxToRem(8)).toBe('0.5rem')
  expect(pxToRem(16)).toBe('1rem')
  expect(pxToRem(32)).toBe('2rem')
})
>>>>>>> f4bd104 (feat: adding unit tests)
