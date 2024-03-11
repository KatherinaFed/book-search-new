import paginateLoader from '../../assets/smallBookLoader.gif'
import preloader from '../../assets/preloader.gif'

interface PreloaderProps {
  isPaginate?: boolean;
}

function Preloader({ isPaginate }: PreloaderProps) {
  return <div className="preloader">
    <img src={isPaginate ? paginateLoader : preloader} alt="preloader" />
  </div>;
}

export default Preloader;
