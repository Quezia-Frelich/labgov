'use client'

import Container from "../../components/container/container";
import Text_body from "../../components/text/text-body";
import Text_display_2 from "../../components/text/text-display-2";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_1 from "../../components/text/text-head-1";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const galery = [
    {url: '/summit-2023/crea-summit-2023-1.jpg'},
    {url: '/summit-2023/crea-summit-2023-2.jpg'},
    {url: '/summit-2023/crea-summit-2023-3.jpg'},
    {url: '/summit-2023/crea-summit-2023-4.jpg'},
    {url: '/summit-2023/crea-summit-2023-5.jpg'},
    {url: '/summit-2023/crea-summit-2023-6.jpg'},
    {url: '/summit-2023/crea-summit-2023-7.jpg'},
    {url: '/summit-2023/crea-summit-2023-8.jpg'},
    {url: '/summit-2023/crea-summit-2023-9.jpg'},
    {url: '/summit-2023/crea-summit-2023-10.jpg'},
    {url: '/summit-2023/crea-summit-2023-11.jpg'},
    {url: '/summit-2023/crea-summit-2023-12.jpg'},
    {url: '/summit-2023/crea-summit-2023-13.jpg'},
    {url: '/summit-2023/crea-summit-2023-14.jpg'},
    {url: '/summit-2023/crea-summit-2023-15.jpg'},
    {url: '/summit-2023/crea-summit-2023-16.jpg'},
    {url: '/summit-2023/crea-summit-2023-17.jpg'},
    {url: '/summit-2023/crea-summit-2023-18.jpg'},
    {url: '/summit-2023/crea-summit-2023-19.jpg'},
    {url: '/summit-2023/crea-summit-2023-20.jpg'},
    {url: '/summit-2023/crea-summit-2023-21.jpg'},
    {url: '/summit-2023/crea-summit-2023-22.jpg'},
    {url: '/summit-2023/crea-summit-2023-23.jpg'},
    {url: '/summit-2023/crea-summit-2023-24.jpg'},
    {url: '/summit-2023/crea-summit-2023-25.jpg'},
    {url: '/summit-2023/crea-summit-2023-26.jpg'},
    {url: '/summit-2023/crea-summit-2023-27.jpg'},
]


export default function Section_galery(){
    return(
        <>
        <section className="py-20 flex flex-col items-center justify-center">
            <Container className="flex flex-col gap-5 ">

                <Text_display_3 className="text-pink-summit-400 font-bold mb-5">Galeria de fotos</Text_display_3>

                <div class="grid grid-cols-2 md:grid-cols-9 gap-2">
                    
                    <PhotoProvider>
                        {galery.map((image, index) => (
                                <PhotoView key={index} src={image.url}>
                                    <img src={image.url} className={`rounded-md h-auto hover:scale-105 transition-all`} alt={image.url}/>
                                </PhotoView>
                        ))}
                    </PhotoProvider>
                    
                </div>

            </Container>
        </section>

        </>
    )
}