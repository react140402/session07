
import { AppProvider } from './AppContext';
import AppLayout from './AppLayout';

function App() {

  return (
    <>
      <AppProvider>
        <AppLayout></AppLayout>
      </AppProvider>
    </>
  )
}

export default App
