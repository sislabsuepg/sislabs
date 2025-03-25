import React from 'react';
import styles from './Login.module.scss'
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';
import { data_images } from '@/assets/data';

export default function Login() {
  return (
    <section id="login" className={`${styles.sectionLogin}`}>
      <div className={`${styles.sideLogo}`}>
        <Image className={`${styles.logoImg}`} src={data_images?.logo_uepg_desktop_white} alt={'Logo UEPG DESKTOP'}/>
        <p className='text-[1.2rem]'>A instituição que, diferentemente de uma ruptura com o passado, <strong>avança</strong> a partir de suas <strong>conquistas</strong>.</p>
      </div>
      <div className={`${styles.sideLogin}`}>
        
          DEINFO
          Departamento de Informática
      </div>
    </section>
  )
}