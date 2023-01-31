import { BsCameraReelsFill } from 'react-icons/bs'
import { Link } from 'react-scroll';
import FilmsContainer from './components/FilmsContainer/FilmsContainer';
import KayPhotos from './components/KayPhotos/KayPhotos';

function App() {
  return (
    <div id='top' className="App w-screen h-fit scrollbar-thin scrollbar-thumb-zinc-700 overflow-x-hidden">
      <KayPhotos />
      <Link to='films_container' spy={true} smooth={true} offset={50} duration={700}>
        <BsCameraReelsFill className='relative -top-24 left-1/2 text-5xl text-zinc-500 text-opacity-25 transition-all duration-100 hover:text-opacity-100 cursor-pointer'/>
      </Link>
      <FilmsContainer />
    </div>
  );
}

export default App;
