import React from 'react'
import logo from '../images/logo.svg'

import {
  HiHome,
  HiMagnifyingGlass,

  HiStar,
  HiPlayCircle,
  HiTv
} from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';

function Header() {
  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'WATCHLIST',
      icon: HiPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiStar
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },
    {
      name: 'SERIES',
      icon: HiTv
    }
  ]
  return (
    <div className='flex items-center gap-8'>
      <div className='flex'>
        <img src={logo} className="w-[80px] md:w-[115px] object-cover"/>
        {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
      </div>
      <img src="https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg?semt=ais_hybrid" 
      class name="w-[10px] h-[10px] rounded-full object-cover"></img>
    </div>
  )
}

export default Header