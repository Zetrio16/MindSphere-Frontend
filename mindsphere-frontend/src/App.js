import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/fonts.css';

import './App.css';
import Nav from './component/nav/nav';
import Footer from './component/footer/footer';
import MainBody from './component/main/main';

function App() {
  return (
    <div className="App">
      <Nav />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
