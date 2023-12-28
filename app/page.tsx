import Image from 'next/image';
import { Button } from '@radix-ui/themes'; // Import the necessary package
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      <div className='hero-map' />

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2 space-y-6'>
        <h1 className='bold-52 lg:bold-88'>What&apos;s your issue?</h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
          Track your issues to get the best bioficial-intellegence solution for
          your problems. We are here to help you.
        </p>
        <Button className='w-[120px]'>
          <Link href='/issues/new/'>New Issue</Link>
        </Button>
      </div>

      <div className='relative flex flex-1 items-start'>
        <div className='relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
          <div className='flex flex-col'>
            <div className='flexBetween'>
              <p className='regular-16 text-gray-20'>Who?</p>
            </div>
            <p className='bold-20 text-white'>Bob the Client</p>
          </div>

          <div className='flexBetween'>
            <div className='flex flex-col'>
              <p className='regular-16 block text-gray-20'>Your Issues</p>
              <p className='bold-20 text-white'>So many</p>
            </div>
            <div className='flex flex-col'>
              <p className='regular-16 block text-gray-20'>Our Solutions</p>
              <p className='bold-20 text-white'>So fast</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
