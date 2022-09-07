import preloaderGif from '../assets/preloader.gif';

const Preloader = () => {
  return (
    <div style={{ position: 'absolute', margin: '0' }}>
      <img src={preloaderGif} alt="preloader" />
    </div>
  );
};

export default Preloader;
