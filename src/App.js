import './App.css';
import Banner from './Components/Banner/Banner';
import {newRelease,action,comedyMovies,horror,romantic,fantasy}  from './urls'
import Navbar from './Components/NavBar/Navbar';
import Post from './Components/Post/Post';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Post url={newRelease} title='New Releases' />
      <Post url={action} title='Action' isSmall />
      <Post url={comedyMovies} title='Comedy Movies' isSmall />
      <Post url={horror} title='Horror' isSmall />
      <Post url={romantic} title='Romantic' isSmall />
      <Post url={fantasy} title='Fantasy' isSmall />
    </div>
  );
}

export default App;
