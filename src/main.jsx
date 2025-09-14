import { createRoot } from 'react-dom/client'
import './assets/Styles/index.css'
import App from './App.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'

async function deferRender() {
  const { worker } = await import('./mocks/browser.jsx')
  return worker.start()
}

deferRender().then(() => {
  createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})