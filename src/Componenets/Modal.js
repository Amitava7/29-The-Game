import React, {useState, useEffect} from 'react';
import { createPortal } from 'react-dom';
import './modal.scss'
// We get hold of the div with the id modal that we have created in index.html


function Modal(props){
    const modalRoot = document.getElementById( 'modal' );
    const [element] = useState(document.createElement( 'div' ));
    useEffect(()=>{
        modalRoot.appendChild( element );
        return ()=> modalRoot.removeChild( element );
    },[])
    return (createPortal(props.children, element ));
}

export default Modal;