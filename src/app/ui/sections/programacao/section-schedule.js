'use client'

import Container from "../../components/container/container";
import Text_display_3 from "../../components/text/text-display-3";
import Text_head_2 from "../../components/text/text-head-2";
import Text_body from "../../components/text/text-body";
import { useState } from "react";
import Text_head_3 from "../../components/text/text-head-3";
import Tag from "../../components/tags/tag";
import { data_schedule_2025 } from "../../../../../data/data-schedule-2025";
import Text_head_1 from "../../components/text/text-head-1";

export default function Section_schedule({ }) {

  const [selectDay, setSelectDay] = useState('25/07'); // Controla el día seleccionado
  const [selectedScenery, setSelectedScenery] = useState('todos'); // Controla el escenario seleccionado en 23/11

  const handleSelectDay = (day) => {
    setSelectDay(day);
    setSelectedScenery('todos'); // Reinicia el filtro de escenario cuando se cambia de día
  }

  const handleFilterScenery = (scenery) => {
    setSelectedScenery(scenery);
  }

  const filteredSchedule = data_schedule_2025.filter(item => {
    if (item.date !== selectDay) {
      return false;
    }
    if (selectDay === '26/07') {
      return selectedScenery === 'todos' || item.scenery === selectedScenery;
    }
    return true;
  });

  const showSpecialRenderings = selectDay === '26/07' && selectedScenery === 'todos';


  return (
    <section className="my-10 py-10 flex items-center justify-center">
      <Container className="space-y-10">
        {/* Switch date */}
        <div className="max-w-screen-lg mx-auto text-violet-crea-700 grid grid-cols-2 gap-10">
          <button
            className={`w-full py-3 px-5 md:px-20 border-2 rounded-2xl hover:bg-violet-crea-400 hover:text-white hover:border-violet-crea-400 ${selectDay === '25/07' ? 'bg-violet-crea-400 text-white border-violet-crea-400 scale-105' : 'border-violet-crea-700'} transition-all`}
            onClick={() => handleSelectDay('25/07')}
          >
            <div>
              <Text_display_3 className={`font-bold`}>25/07</Text_display_3>
              <Text_body>Sexta feira</Text_body>
            </div>
          </button>
          <button
            className={`w-full py-3 px-5 md:px-20 border-2 rounded-2xl hover:bg-violet-crea-400 hover:text-white hover:border-violet-crea-400 ${selectDay === '26/07' ? 'bg-violet-crea-400 text-white border-violet-crea-400 scale-105' : 'border-violet-crea-700'} transition-all`}
            onClick={() => handleSelectDay('26/07')}
          >
            <div>
              <Text_display_3 className={`font-bold`}>26/07</Text_display_3>
              <Text_body>Sábado</Text_body>
            </div>
          </button>
        </div>

        {/* Filter scenary */}
        {selectDay === '26/07' && (
          <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
            <button
              className={`w-full py-1 px-10 border rounded-full hover:bg-violet-crea-400 hover:text-white hover:border-violet-crea-400 ${selectedScenery === 'todos' ? 'bg-violet-crea-400 text-white border-violet-crea-400 scale-105' : 'border-violet-crea-700'} transition-all`}
              onClick={() => handleFilterScenery('todos')}
            >
              <Text_body>Todos</Text_body>
            </button>
            <button
              className={`w-full py-1 px-10 border rounded-full hover:bg-schedule-violet-100 hover:text-schedule-violet-500 hover:border-schedule-violet-100 ${selectedScenery === 'plenária' ? 'bg-schedule-violet-100 text-schedule-violet-500 border-schedule-violet-100 scale-105' : 'border-violet-crea-700'} transition-all`}
              onClick={() => handleFilterScenery('plenária')}
            >
              <Text_body>Plenária</Text_body>
            </button>
            <button
              className={`w-full py-1 px-10 border rounded-full hover:bg-schedule-blue-100 hover:text-schedule-blue-500 hover:border-schedule-blue-100 ${selectedScenery === 'tech 1' ? 'bg-schedule-blue-100 text-schedule-blue-500 border-schedule-blue-100 scale-105' : 'border-violet-crea-700'} transition-all`}
              onClick={() => handleFilterScenery('tech 1')}
            >
              <Text_body>Tech 1</Text_body>
            </button>
            <button
              className={`w-full py-1 px-10 border rounded-full hover:bg-schedule-pink-100 hover:schedule-pink-500 hover:border-schedule-pink-100 ${selectedScenery === 'tech 2' ? 'bg-schedule-pink-100 text-schedule-pink-500 border-schedule-pink-100 scale-105' : 'border-violet-crea-700'} transition-all`}
              onClick={() => handleFilterScenery('tech 2')}
            >
              <Text_body>Tech 2</Text_body>
            </button>
          </div>
        )}

        {/* Show program */}
        {filteredSchedule.map((item, index) => (
          <div key={index} className="space-y-10">
            {/* Render simultane line */}
            {showSpecialRenderings && item.firstSimultaneus && (
              <div>
                <div className="flex items-center text-schedule-violet-200">
                  <p className={'min-w-44 text-sm'}>Palestras simultâneas</p>
                  <div className="border-b border-schedule-violet-200 w-full"></div>
                </div>
              </div>
            )}

            {/* Box item */}
            <div className={`bg-gray-50 border-l-8 p-5 md:p-10 flex flex-col md:flex-row gap-5 md:gap-10 relative text-violet-crea-600
            ${item.scenery === 'plenária' && 'border-schedule-violet-200'} 
            ${item.scenery === 'tech 1' && 'border-schedule-blue-100'} 
            ${item.scenery === 'tech 2' && 'border-schedule-pink-100'}
          `}>
              {/* Tag */}
              <Tag className={`h-min rounded-full font-normal uppercase text-xs tracking-wider md:absolute top-5 right-5
              ${item.scenery === 'plenária' && 'bg-schedule-violet-100 text-schedule-violet-500'} 
              ${item.scenery === 'tech 1' && 'bg-schedule-blue-100 text-schedule-blue-500'} 
              ${item.scenery === 'tech 2' && 'bg-schedule-pink-100 text-schedule-pink-500'}
              `} text={item.scenery} />

              {/* Data time */}
              <div className="flex flex-col gap-5 md:text-center md:items-center">
                <div>
                  <Text_display_3 className={'font-bold'}>{item.time}</Text_display_3>
                  {item.duration &&
                    <Text_head_3 className={'text-violet-crea-300 font-light'}>{item.duration}min</Text_head_3>
                  }
                </div>
                {/* Title responsive */}
                <Text_head_1 className={'font-bold block md:hidden'}>{item.title}</Text_head_1>
              </div>

              {/* Data speaker */}
              <div className="flex flex-col">
                {/* Title */}
                <Text_head_2 className={'font-bold hidden md:block max-w-4xl'}>{item.title}</Text_head_2>

                {/* Speakers names */}
                <div className="flex flex-col md:flex-row md:gap-10 mb-5">
                  <Text_body className={'text-violet-crea-400'}>
                    {item.speakers.map((speaker, index, array) => (
                      <span key={index} className="font-light">
                        <strong className="font-medium">{speaker.fullName} </strong>
                        {speaker.company}
                        {index < array.length - 1 ? <span className="text-xl">{' | '}</span> : '.'}
                      </span>
                    ))}
                  </Text_body>
                </div>

                {/* Speakers profile */}
                <div className="flex gap-5">
                  {item.speakers.map((speaker, index) => (
                    <div key={index} className="max-w-12 max-h-12 rounded-md overflow-hidden">
                      {speaker.profile && <img src={speaker.profile} alt={speaker.fullName} className="w-full" />}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Render line of the last item */}
            {showSpecialRenderings && item.lastEvent && (
              <div className="border-b border-schedule-violet-200 w-full"></div>
            )}

            {/* Render when is launch time */}
            {showSpecialRenderings && item.isLunchBreak && (
              <div className="bg-violet-crea-300 p-5 w-full text-center">
                <Text_head_2>Pausa para almoço</Text_head_2>
              </div>
            )}
          </div>
        ))}
      </Container>
    </section>
  );
}
