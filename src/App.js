import logo from './logo.svg';
import './App.css';
import Header from './Header.js'

import Api from './Component/Api.js'

function App() {

  console.log(window.location)
  return (

    <div className="App">

      <Header />
      <Api />

    </div>

  );
}

export default App;
