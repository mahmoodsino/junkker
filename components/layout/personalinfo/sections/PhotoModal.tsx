import React from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import licensesType from '../../../../helper/type/users/licensesType';


interface Props {
    open:boolean,
    setOpen:any
    images:licensesType
}

const PhotoModal = ({images,open,setOpen}:Props) => {
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className=''>
               <img className='px-5 py-5' src={images.file} alt="" /> 
        </div>
      </Modal>
    </div>
  )
}

export default PhotoModal
