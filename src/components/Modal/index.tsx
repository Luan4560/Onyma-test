import React, { ReactNode, useState } from "react"
import * as SC from './styles'

export const Modal = ({children, closeModal}: any) => {

  return (
    <SC.ModalBackground>
      <SC.ModalContainer>
        <button>x</button>
        {children}
      </SC.ModalContainer>
    </SC.ModalBackground>
  )
}
