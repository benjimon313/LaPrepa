import React from 'react'

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Inicio' ,
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Guia' ,
        path: '/guia',
        icon: <FaIcons.FaUniversity />,
        cName: 'nav-text'
    },
    {
        title: 'Carrera' ,
        path: '/carrera',
        icon: <IoIcons.IoMdSchool />,
        cName: 'nav-text'
    },
]