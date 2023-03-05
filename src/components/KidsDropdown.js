import React, { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import { Menu } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs';

const list = [
  {name: '0 Kids'},
  {name: '1 Kid'},
  {name: '2 Kids'},
  {name: '3 Kids'},
  {name: '4 Kids'},
]

const KidsDropdown = () => {
  return (
    <Menu as="div" className='w-full h-full relative bg-white'>
      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
        kids
        <BsChevronDown className='text-base text-accent' />
      </Menu.Button>
      <Menu.Items as="ul" className='bg-white w-full absolute flex flex-col z-40'>
        {list.map((li, index) => {
          return (
            <Menu.Item as="li" className='border-b last-of-type:border-b-0 h-12
             hover:bg-accent hover:text-white w-full cursor-pointer flex justify-center items-center' key={index}>
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default KidsDropdown;
