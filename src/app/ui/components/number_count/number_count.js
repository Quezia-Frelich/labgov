"use client"

import { InView } from 'react-intersection-observer';
import Text_display_3 from "../text/text-display-3";
import Text_body from "../text/text-body";
import CountUp from 'react-countup';


export default function Number_count({ number, before_number, after_number, title, description, animate }) {

  return (
    <InView>
    {({ inView, ref }) => (
    <div ref={ref} className="text-center">
      {inView && <p className="font-bold mb-2 text-4xl">{animate ? <CountUp prefix={before_number} end={number} suffix={after_number} duration={1} /> : number}</p>}
      <div className="flex justify-center items-center gap-2 relative">
        <Text_body className="text-center w-52">{title}</Text_body>
        {description &&
          <div className="group cursor-pointer">
            <div className="hidden group-hover:block group-hover:animate-fade-up group-hover:animate-duration-300 absolute w-52 h-auto -top-16 left-0 p-2 bg-white transition-all rounded-md border shadow-md">
              <p className="text-sm">{description}</p>
            </div>
          </div>
        }
      </div>
    </div>
    )}
    </InView>

  );
}
