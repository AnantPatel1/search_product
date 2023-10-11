import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { SearchResults } from './pages/SearchResults';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="search" element={<SearchResults />} />
              <Route
                  path="*"
                  element={<Navigate to="/" replace />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
