import React from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';


interface Props {
    open:boolean,
    setOpen:any
    img:string
}

const PhotoModal = ({img,open,setOpen}:Props) => {
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className=''>
               <img className='px-10 py-10' src={img} alt="" /> 
        </div>
      </Modal>
    </div>
  )
}

export default PhotoModal
