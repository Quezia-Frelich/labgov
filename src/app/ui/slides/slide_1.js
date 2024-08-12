import Image from 'next/image'

export default function Slide_1( {} ) {
  return (

    <div style={{backgroundImage: `url('/banners/home/Banner_1.png')`}} className="min-h-[500px] bg-no-repeat bg-center bg-cover justify-center items-center flex">
      <div className="text-center">
        <Image src={'/brand/inovaCrea_main_white.png'} width={500} height={500} className='mx-auto max-w-80 md:max-w-none animate-fade-up'/>
        <p className="mt-2 text-xl md:text-3xl text-white font-Montserrat font-extrabold">Vem com a gente criar o futuro</p>
        <Image src={'/brand/logo_crea.png'} width={500} height={500} className='mx-auto max-w-52 mt-8'/>
      </div>
    </div>

  );
}