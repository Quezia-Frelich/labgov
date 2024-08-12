import Container from "../components/container/container";
import Image from 'next/image'

export default function Slide_2( {} ) {
  return (

    <div style={{backgroundImage: `url('/banners/home/Banner_2.png')`}} className="min-h-[500px] bg-no-repeat bg-cover flex items-center">
      
      <Container>
        <div className="md:w-2/6">  
          <p className="text-3xl md:text-5xl mb-4 font-Montserrat text-white font-black uppercase animate-fade-right">
          COWORKINGS <br></br> 
            <span className="text-[#D70EE2] font-medium">CREA-SC</span>
          </p>
          <p className="text-lg text-white font-Montserrat animate-fade-up">Venha conhecer os ambientes colaborativos disponíveis para os profissionais.</p>
          <Image src={'/elements/lines.png'} width={200} height={200} className="mt-3 mb-8 w-32"/>
          <Image src={'/brand/logo_crea.png'} width={200} height={200} className=" w-40"/>
        </div>
      </Container>

    </div>

  );
}