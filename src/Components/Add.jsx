import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../service/allAPI';

function Add({setAddVideoResponse}) {

  const [videoDetails,setVideoDetails]=useState({caption:"",imageUrl:"",youtubeUrl:""})


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isInvalidUrl,setInvalidUrl]=useState(false)
  console.log(videoDetails);

  // https://www.youtube.com/watch?v=tOM-nWPcR4U

  // https://www.youtube.com/embed/tOM-nWPcR4U

  const getEmbedUrl=(link)=>{
    if(link.includes("v=")){
      let videoId=link.split("v=")[1].slice(0,11)
   
   setVideoDetails({youtubeUrl:`https://www.youtube.com/embed/${videoId}`})
   console.log(videoId);

   setInvalidUrl(false)
    }
   else{
    setVideoDetails({...videoDetails, youtubeUrl: ""})
    setInvalidUrl(true)
   }
  }

  const handleUpload=async()=>{
    const{caption,imageUrl,youtubeUrl}=videoDetails
    if(caption && imageUrl && youtubeUrl){
      
    try{
    const result=await addVideo(videoDetails)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setAddVideoResponse(result.data)
      toast.success(`${result.data.caption} added to your collections`)
      handleClose()
    }
    
    }
    catch(err){
      console.log(err);
      
    }
      
    }
    else{
      // alert("please enter the field")
      toast.warning("enter the field complitely")
    }
  }


  return (
  <>


 <div className="d-flex align item-center">
  <h5 className='text-warning'>Add New Video&nbsp;</h5>
  <button  onClick={handleShow} className='btn btn-warning fs-5 rounded-circle fw-bolder mb-5'>+</button>
 </div>
 <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>please fill the following details...</p>
          {/* caption */}
         <div className='border border-3 border-info rounded p-3'>
         <FloatingLabel controlId="floatingInpucaptiont"label="video caption" className="mb-3">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="enter video caption" />
        </FloatingLabel>

        {/* image url */}
        <FloatingLabel controlId="floatingInputimage"label="image url" className="mb-3">
        <Form.Control  onChange={e=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} type="text" placeholder="enter image url" />
        </FloatingLabel>
        {/* utube url */}

        <FloatingLabel controlId="floatingInputurl"label="youtub url" className="mb-3">
        <Form.Control onChange={e=>getEmbedUrl(e.target.value)}type="text" placeholder="enter youtub url" />
        </FloatingLabel>
         </div>
          {
            isInvalidUrl &&   <div className='text-warning fw-bold'>invalid url</div>
          }

         


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info"  onClick={handleUpload} >Upload</Button>
        </Modal.Footer>
      </Modal>
      {/* <ToastContainer position="top-right" autoClose={3000}theme="colored"/>
      <ToastContainer/> */}
 </>
  )
}

export default Add