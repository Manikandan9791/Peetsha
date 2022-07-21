import { Key } from '@mui/icons-material';
import React from 'react'
import './Menu.css'
import {MenuList} from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';

function Menu() {
  return (
    <div className='menu'> 
    <h1 className='menuTitle'>Our Menu</h1>
    <div className='menuList'>
       {MenuList.map((menuItem,Key)=>{
         return  <MenuItem 
         
         image={menuItem.Image} name={menuItem.name} price={menuItem.price}/>
       })}
    </div>
    </div>
  )
}

export default Menu