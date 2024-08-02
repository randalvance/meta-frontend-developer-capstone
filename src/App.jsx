import { BrowserRouter } from 'react-router-dom';
import { Header, Main, Footer } from './components';

import './App.css'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
