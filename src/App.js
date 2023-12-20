import logo from "./images/kk.jpg";
import "./App.css";
import MyForm from "./Components/form";
import FormDataDisplay from "./Components/FormDataDisplay";
import Design from "./Components/design";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App ">
      {/* <div className="container  pb-5 "> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MyForm />} />
          <Route path="/rem" element={<FormDataDisplay />} /> */}
          <Route path="/" element={<Design />} />
        </Routes>
      </BrowserRouter>
      {/*    </div> */}
    </div>
  );
}

export default App;
