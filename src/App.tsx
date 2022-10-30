import './App.css';
import { useFetch } from './hooks/useFetch';

interface QuoteResponse {
  quote: string;
}

const quoteUrl = 'https://api.kanye.rest';

function App() {
  const {data, loading} = useFetch<QuoteResponse>(quoteUrl);
  return (
  
    <div className="App">
      <header className="quote-block">
        <h1>Random Quote</h1>
        <p>
          {loading ? 'Loading...' : data?.quote}
        </p>
      </header>
    </div>
  );
}

export default App;
