import './App.css';
import {Route} from "react-router-dom"
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav'
import Container from '@mui/material/Container';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
      <Container>
        <Routes>
        <Route path="/" component={Trending} exact />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
        <Route path="/search" component={Search} />
        </Routes>
      </Container>     
      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
