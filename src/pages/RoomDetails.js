import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import ScrollToTop from '../components/ScrollToTop'

import { RoomContext } from '../context/RoomContext';
import { FaCheck } from 'react-icons/fa';




const RoomDetails = () => {
  const { rooms } = useContext(RoomContext)
  const { id } = useParams()

  const room = rooms.find(room => {
    return room.id === Number(id)
  })
 
  const { name, description, facilities, price, imageLg} = room;

  return (
    <section>
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70 "></div>
        <h1 className="text-6xl text-white z-20 font-primary text-center">
          {name} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* Left */}
          <div className="w-full h-full lg:w-[60%] px-6 ">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img className="mb-8" src={imageLg} alt="/" />
            <div className="mt-12">
              <h3 className="h3 mb-3">Room Facilities</h3>
              <p className="mb-12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia saepe sequi quia natus explicabo aliquam repudiandae
                repellat harum qui est, quo labore expedita, adipisci, nostrum
                vero dignissimos dicta voluptates minima.
              </p>

              {/* Grid */}
              <div className='grid grid-cols-3 gap-6 mb-12'>
                {facilities.map((item, index) => {
                  const { name, icon } = item;
                  return (
                  <div className='flex items-center gap-x-3 flex-1' key={index}>
                    <div className='text-3xl text-accent'>{icon}</div>
                    <div className='text-base'>{name}</div>
                  </div>
                )
                })}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-full h-full lg:w-[40%] bg-blue-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos
            ab distinctio quis neque ullam.
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
