import React, { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import { Menu } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs';

const list = [
  {name: '1 Adult'},
  {name: '2 Adults'},
  {name: '3 Adults'},
  {name: '4 Adults'},
]

const AdultsDropdown = () => {
  const { adults, setAdults } = useContext(RoomContext);
  return (
    <Menu as="div" className="w-full h-full relative bg-white">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {adults}
        <BsChevronDown className="text-base text-accent" />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="bg-white w-full absolute flex flex-col z-40"
      >
        {list.map((li, index) => {
          return (
            <Menu.Item
            onClick={() => setAdults(li.name)}
              as="li"
              className="border-b last-of-type:border-b-0 h-12
             hover:bg-accent hover:text-white w-full cursor-pointer flex justify-center items-center"
              key={index}
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
