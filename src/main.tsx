import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<div className="app-bg">
				<h1>hello</h1>
				<App />
			</div>
		</BrowserRouter>
	</StrictMode>,
);
