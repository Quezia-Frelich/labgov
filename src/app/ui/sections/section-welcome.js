import Text_display_3 from '../components/text/text-display-3';
import Container from '../components/container/container';
import Text_head_1 from '../components/text/text-head-1';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Text_head_3 from '../components/text/text-head-3';
import Text_head_2 from '../components/text/text-head-2';

export default function Section_welcome ( {} ) {
  return (
  <section className='h-screen relative overflow-hidden'>
    <video muted loop autoPlay className='absolute top-0 left-0 w-auto min-w-full min-h-full max-w-none z-10'>
      <source src='/video/crea_summit_video.mp4' type='video/mp4'></source>
    </video>
    <div className='absolute top-0 z-20 bg-radial-gradient h-screen w-full mix-blend-multiply'></div>
    <div className='absolute top-0 z-30 h-screen w-full'>
      <Container className={'flex flex-col gap-8 py-20 justify-center items-center h-full text-white'}>

      <img src='/brand/Crea_summit_2024_white.png' className='w-52 md:w-80 mb-10 animate-fade-up animate-once animate-duration-500 animate-ease-in-out' />

      <Text_head_2 className={'flex gap-5'}>
        <CalendarDaysIcon className='size-8'/> 
        22 e 23 de novembro de 2024
      </Text_head_2>

      <Text_head_2 className={'flex gap-5'}>
        <MapPinIcon className='size-8'/> 
        Expocentro Balneário Camboriú
      </Text_head_2>

      </Container>
    </div>
  </section>
  );
}