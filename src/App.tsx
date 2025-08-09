import Navbar from '@/components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import {
	Home,
	About,
	Contact
} from './pages';
import { HashRouter, Routes, Route } from 'react-router';

function App() {
  return (
		<>
		<HashRouter>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			
		<Footer />
		</HashRouter>
		</>
  )
}

export default App;