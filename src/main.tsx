import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Assuming you have some CSS

const main = document.getElementById('root');

if (main !== null) {
  const root = createRoot(main);
  root.render(<App />);
} else {
  console.error('Root element not found');
}