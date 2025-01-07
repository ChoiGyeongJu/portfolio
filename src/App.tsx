import { TanstackQueryProvider, DarkModeProvider } from 'context';

import './App.css';
import { WebRouter } from './routes';

function App() {
  return (
    <TanstackQueryProvider>
      <DarkModeProvider>
        <WebRouter />
      </DarkModeProvider>
    </TanstackQueryProvider>
  );
}

export default App;
