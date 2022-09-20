import preloaderGif from '../../assets/preloader.gif';
import { PreloaderContainer } from './styles';

const Preloader = () => {
  return (
    <PreloaderContainer>
      <img src={preloaderGif} alt="preloader" />
    </PreloaderContainer>
  );
};

export default Preloader;
