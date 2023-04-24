import './App.css'
import Homepage from "./components/Home/Homepage";
import Header from './components/Header/Header.js'
import HeaderCarousel from './components/Header/HeaderCarousel.js'


function App() {
  return (
    <div className="App">
      <div>

        <Header></Header>
        <HeaderCarousel></HeaderCarousel>
      </div>
      <Homepage></Homepage>
    </div>
  );
}

export default App;
