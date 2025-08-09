import Navbar from '@/components/layout/Navbar';
import Footer from './components/layout/Footer';
import {
	Home,
	About,
	Contact
} from './pages';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router';

function App() {
  return (
		<>
		<BrowserRouter basename='/portfolio-website'>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			
		<Footer />
		</BrowserRouter>
		</>
  )
}

export default App;