import { render } from '@testing-library/react'
import { App } from 'src/App'
describe('Hello world', function () {
  it('Should have hello world message', function () {

    let { getByText } = render(<App />)

    expect(getByText("Hello world app")).toMatchInlineSnapshot(
      <h1>
        Hello world app
      </h1>
    )
  })
})
