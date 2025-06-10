
import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './AppContext';
import { router } from './AppRoutes'
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from './store';
function App() {

  return (
    <>
      <Provider store={store}>
        <AppProvider>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </AppProvider>
      </Provider>
    </>
  )
}

export default App
