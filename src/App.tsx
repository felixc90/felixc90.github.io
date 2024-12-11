import { BrowserRouter, Routes, Route } from "react-router";
import GamePage from "./pages/GamePage";
import MapStudioPage from "./pages/MapStudioPage";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});


function App() {
  return (
		<MantineProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<GamePage />} />
					<Route path="/map-studio" element={<MapStudioPage />} />
				</Routes>
			</BrowserRouter>
		</MantineProvider>
  );
}


export default App;
