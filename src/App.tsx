
import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './AppContext';
import { router } from './AppRoutes'
import { HelmetProvider } from 'react-helmet-async';
function App() {

  return (
    <>
      <AppProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AppProvider>
    </>
  )
}

export default App
