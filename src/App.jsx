import './App.css';
import AllDoc from './Components/AllDoc';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewDoc from './Components/ViewDoc';

import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Routes>
          {/* localhost:3000 - all doctor info */}
          <Route path='/' element={<AllDoc />} />
          {/* localhost:3000/doc/5 - a particular doctor info */}
          <Route path='/doc/:id' element={<ViewDoc />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
