import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Search',
        path: '/',
        icon: <BsIcons.BsSearch />,
        cName: 'nav-text',
    },
    {
        title: 'Trending',
        path: '/trending',
        icon: <RiIcons.RiNumbersFill />,
        cName: 'nav-text',
    },
    {
        title: 'About Us',
        path: '/aboutus',
        icon: <BsIcons.BsFillPersonFill />,
        cName: 'nav-text',
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text',
    },
]