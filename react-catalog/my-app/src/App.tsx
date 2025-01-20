import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About';
import { Catalogue } from './pages/Catalogue';
import { Details } from './pages/Details';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="catalogue/details/:productId" element={<Details />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
