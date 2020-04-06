import React from 'react';
import { ContainerModal } from './style';


const Modal = props =>{
    return(
        <ContainerModal isActive={props.modal}>
            lorem ipsum dolor sit amet!
            <button onClick={()=>props.event()}>X</button>
        </ContainerModal>
    )
}

export default Modal;