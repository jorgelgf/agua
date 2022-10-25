import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Routs from "./Routs";
import * as S from "./styles";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <S.ContainerCenter>
        <Routs />
        <ToastContainer />
      </S.ContainerCenter>
    </BrowserRouter>
  );
}

export default App;
