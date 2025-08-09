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
		<HashRouter>
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