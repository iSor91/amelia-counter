import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

const App = () => {
  return <BrowserRouter basename="/amelia-counter">
    <AppRouter />
  </BrowserRouter>
}

export default App
