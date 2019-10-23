import React, { useState } from "react";
import { MdNotificationsActive } from 'react-icons/md'

import { Dispatcher, Constants } from "~/flux";


export default function Toggle() {


   function handleClick() {
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR
    });
  }


  return (
    <nav >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a onClick={handleClick} >
        <MdNotificationsActive size={26}/>
      </a>
    </nav>
  )
}


