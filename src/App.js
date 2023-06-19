import { BrowserRouter } from "react-router-dom";
import ApplicationRoutes from "./routes/ApplicationRoutes";

function App() {
  return (
    <BrowserRouter>
      <ApplicationRoutes />
    </BrowserRouter>
  );
}

export default App;
