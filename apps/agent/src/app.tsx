import { HashRouter, Route, Routes } from "react-router-dom";

import { ModelProvider } from "./hooks/use-model";
import { ChatPage } from "./pages/chat";

export function App() {
	return (
		<HashRouter>
			<ModelProvider>
				<Routes>
					<Route element={<ChatPage />} path="/" />
				</Routes>
			</ModelProvider>
		</HashRouter>
	);
}
