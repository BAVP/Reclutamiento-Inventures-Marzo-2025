import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/Home/index";
import { UrlPage } from "./pages/Url/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/info" Component={UrlPage} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
