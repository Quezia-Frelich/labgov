import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Icon } from '@iconify/react';
import Button_outline from "../buttons/button_outline";
import Text_head_3 from "../text/text-head-3";



export default function Card_restaurant ( { image, brand, description, menu, instagram } ) {
  return (
    <article className=" rounded-xl bg-gray-50 overflow-hidden border">
        <img src={image} alt={brand}></img>
        <div className="p-4">
            <Text_head_3 className={'font-bold mb-2'}>{brand}</Text_head_3>
            <div className="h-20">
              <p className="text-xs">{description}</p>
            </div>

            <div className="flex gap-3 mt-5">
              {menu && 
                <Button_outline
                    href={menu}
                    text={"Cardápio"}
                    icon={<ArrowRightIcon className="size-5"/>}
                    className={`w-min items-center justify-between rounded-full py-2 px-5 transition-all flex bg-violet-crea-400 hover:bg-violet-crea-700 text-white`}
                    target={true}/>
              }

              {instagram &&
                <Button_outline
                href={instagram}
                icon={<Icon icon={'ri:instagram-fill'}/>}
                className={`w-min items-center justify-between rounded-full p-3 transition-all flex bg-violet-crea-400 hover:bg-violet-crea-700 text-white`}
                target={true}/>
              }
            </div>
        </div>
    </article>
  );
}