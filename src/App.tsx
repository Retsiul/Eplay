import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import Header from "./components/Header";
import { GlobalCss } from "./styles";
import Footer from "./components/Footer";

function App() {
  {
    console.log(App);
  }

  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
