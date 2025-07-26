import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as MdIcons from "react-icons/md"
import * as IoIcons from "react-icons/io"
import * as LuIcons from "react-icons/lu"
import * as BiIcons from "react-icons/bi"
import * as TbIcons from "react-icons/tb"
import * as PiIcons from "react-icons/pi"
import * as GiIcons from "react-icons/gi"

export const SideBarData = [
  {
    title: 'Stat',
    path: '/stat',
    icon: <IoIcons.IoIosStats />
  },
  {
    title: 'Net',
    path: '/net',
    icon: <IoIcons.IoMdGitNetwork />
  },
  {
    title: 'Port',
    path: '/port',
    icon: <LuIcons.LuHdmiPort />
  },
  {
    title: 'Shdsl',
    path: '/shdsl',
    icon: <BiIcons.BiTransfer />
  },
  {
    title: 'Switch',
    path: '/switch',
    icon: <TbIcons.TbSwitch3 />
  },
  {
    title: 'Atu',
    path: '/atu',
    icon: <FaIcons.FaEllipsisV />
  },
  {
    title: 'Poepse',
    path: '/poepse',
    icon: <PiIcons.PiGraphicsCardBold />
  },
  {
    title: 'Cycles',
    path: '/cycles',
    icon: <GiIcons.GiStarCycle />
  },
  {
    title: 'Signals',
    path: '/signals',
    icon: <PiIcons.PiTrafficSignalBold />
  },
  {
    title: 'Power',
    path: '/power',
    icon: <MdIcons.MdSettingsPower />
  },
  {
    title: 'Service',
    path: '/service',
    icon: <MdIcons.MdOutlineMiscellaneousServices />
  }
]