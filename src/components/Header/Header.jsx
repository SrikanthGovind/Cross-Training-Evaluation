import { useEffect } from 'react';
import style from './Header.module.css'
import { TbMenu2 } from "react-icons/tb";
export default function Header() {

  function add(){
    useEffect(()=>{})
  }
  return (
    <div className={style.header}>
          <div className={style.logo}>
            logo
          </div>
          <div className={style.menu}>
               <TbMenu2 />
          </div>
    </div>
  )
}
