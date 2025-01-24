import Image from 'next/image';
import mappattern from '../../../../public/map/Mask group.png'
import HoverSVG from './HoverSVG';
import { Button } from '@/components/ui/button';

const Map = () => {
  return (
    <div className="w-screen h-screen relative flex justify-center items-center  bg-[#163311] border">
      <Image
        src={mappattern}
        alt="Descriptive text for screen readers"
        width="100%"
        height="100%"
        layout="responsive"
        className='absolute z-10'
      />
      <div className='flex justify-center gap-32 absolute z-20 w-[80vw] h-full items-center'>
        <div className="pl-24">
          <HoverSVG />
        </div>
        <div className='flex flex-col'>
          <p className='text-6xl text-white font-semibold leading-tight w-[90%]'>
            Igniting Your Journey to <br /> <span className='text-[#347928] '>Solar Success</span>
          </p>
          <p className='text-2xl text-white pt-4 w-[80%]'>
            Lorem ipsum dolor sit amet consectetur. Massa tellus quisque pulvinar pulvinar. Vitae tristique commodo diam tempus vulputate quam urna iaculis.
          </p>
          <Button className="mt-8 w-60 bg-[#347928] text-2xl">
            View Our Projects
          </Button>
        </div>
      </div>
    </div>

  );
}

export default Map;