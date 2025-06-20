import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="work" element={<Work />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
    </BrowserRouter>
  )
}

export default App;