import React, { useState } from 'react'

/* CSS Styles --------------------- */
import style from './MenuScreen.module.css'
import css from 'classnames'

/* Components ----------------------- */
import { Loading, HomeCard, HomeMenu } from '../'

export const MenuScreen = () => {

    const [data, setData] = useState([
        {
            date: 'Hoy',
            title: 'Usuarios',
            icon: 'people',
            text: 'Nuevos usuarios',
            value: 58
        },
        {
            date: 'Ayer',
            title: 'Usuarios',
            icon: 'people',
            text: 'Usuarios perdidos',
            value: 12
        },
        {
            date: 'Hoy',
            title: 'Inventario',
            icon: 'inventory',
            text: 'Nuevas ventas',
            value: 584
        }
    ]);

    return (
        <>
            <div className={style.grid_container}>
                {
                    data.map(({ date, title, icon, text, value }, index) => (
                        <HomeCard
                            key={index}
                            date={date}
                            title={title}
                            icon={icon}
                            text={text}
                            value={value}
                        />
                    ))
                }
            </div>
            <div className={style.menu_container}>
                <HomeMenu />
            </div>
        </>
    )
}
