import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Menu from "./components/menu";
import { Suspense } from "react";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <Menu />
          <AppRoutes />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
