import React, {FC} from "react";
import {GlobalStyle} from "../index";


export const Wrapper : FC = ({children}) => {
  return (
    <>
      <GlobalStyle/>
      {children}
    </>
  )
}