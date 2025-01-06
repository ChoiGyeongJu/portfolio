import { TanstackQueryProvider } from 'context';

import './App.css';
import { WebRouter } from './routes';

function App() {
  return (
    <TanstackQueryProvider>
      <WebRouter />
    </TanstackQueryProvider>
  );
}

export default App;
