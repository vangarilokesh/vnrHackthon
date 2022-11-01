import './App.css';
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from './Header';
import New from './New';

function App() {
  return (
    <>
    <Header />
    <New />
    {/* <Home /> */}
    </>
  );
}

export default App;
