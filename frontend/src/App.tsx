import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/Home/index";
import { UrlPage } from "./pages/Info/index";
import { Redirect } from "./pages/Redirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/info" Component={UrlPage} />
        <Route path="/:sufix" Component={Redirect} />
        <Route path="*" Component={HomePage} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
