import { configureStore } from "@reduxjs/toolkit"
import countReducer from './features/counter/counterSlice'
import { Provider } from "react-redux"
import { render } from "@testing-library/react"

function renderWithReducer(
  ui,
  { 
    preloadedState,
    store = configureStore({ reducer: countReducer , preloadedState}) } = {},
  ...renderOptions
) {

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

export default renderWithReducer