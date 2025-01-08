import { BrowserRouter, Routes, Route } from "react-router";
import GamePage from "./pages/GamePage";
import MapEditorPage from './pages/MapEditorPage';
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
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
					<Route path="/editor" element={<MapEditorPage />} />
				</Routes>
			</BrowserRouter>
		</MantineProvider>
  );
}


export default App;
