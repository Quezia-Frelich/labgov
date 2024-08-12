import Container from "../components/container/container";
import Image from 'next/image'

export default function Slide_3( {} ) {
  return (

    <div style={{backgroundImage: `url('/banners/home/Banner_3.png')`}} className="min-h-[500px] bg-no-repeat bg-cover flex items-center">
      
      <Container>
        <section className="flex flex-col md:flex-row gap-5 items-center justify-between">
          <div className="w-full md:w-2/6">
            <p className="text-3xl md:text-5xl mb-4 font-Montserrat text-white font-black uppercase animate-fade-right">
            Ferramentas <br></br> 
              <span className="text-[#D70EE2]">Digitais</span>
            </p>
            <p className="text-xl md:text-2xl text-white font-semibold font-Montserrat">COM ACESSO GRATUITO E DESCONTOS PARA VOCÊ</p>

            <Image src={'/brand/logo_crea.png'} width={200} height={200} className="hidden md:block mt-8 w-40"/>
          </div>

          <div className="w-full md:w-3/6 md:text-right flex flex-col md:items-end">
            <p className="md:text-3xl text-white font-semibold font-Montserrat">Uma seleção de softwares essenciais na área tecnológica para profissionais e empresas. Aproveite essa oportunidade!</p>
            <div className="w-full flex justify-between md:justify-end items-center gap-5">
              <div className="block md:hidden mt-8 w-40">
                <Image src={'/brand/logo_crea.png'} width={200} height={200}/>
              </div>
              <div className="block mt-8 w-40">
                <Image src={'/brand/logo_inova.png'} width={200} height={200}/>
              </div>
            </div>

          </div>
        </section>
      </Container>

    </div>

  );
}