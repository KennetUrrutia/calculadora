import { render, screen } from "@testing-library/react"
import App from "./App"

describe('Pruebas sobre el componente App', () => {
  const num1 = 10
  const num2 = 20

  test('Debe de hacer match con nel snaptshot', () => { 
    const { container } = render(
      <App />
    )

    expect(container).toMatchSnapshot()
  })

  test('Debe de inicializar la calculadora con el valor de 0', () => {

  })

  test('Debe de calcular el valor correcto de la suma de 2 numeros', () => {
    
  })
  
  test('Debe de calcular el valor correcto de la resta de 2 numeros', () => {

  })

  test('Debe de calcular el valor correcto de la multiplicación de 2 numeros', () => {

  })
})