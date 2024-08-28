"use client"

import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import Text_display_3 from "../text/text-display-3";
import Text_body from "../text/text-body";
import Text_display_2 from "../text/text-display-2";

export default function Number_count({ number, after_number, title, description, animate }) {

  const [newNumber, setNewNumber] = useState(0);

  const { ref:countNumber, inView, entry } = useInView();

  useEffect(() => {
    if (inView) {
      let counter = 0;
      const timer = setInterval(() => {
        counter++;
        setNewNumber(counter);
        if (counter === number) {
          clearInterval(timer);
        }
      }, 1.5);
    }
  }, [inView, number]);

  return (
    <div ref={animate && countNumber} className="text-center">
      <Text_display_2 className="font-bold mb-2">{animate ? newNumber : number} {after_number}</Text_display_2>
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
  );
}
