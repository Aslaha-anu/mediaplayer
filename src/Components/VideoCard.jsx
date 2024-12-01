import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, saveHistory } from '../service/allAPI';

function VideoCard({displayData,setDeleteResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {

   const{caption,youtubeUrl}=displayData
  const localTime=new Date()
  console.log(localTime);
  const formatedData=localTime.toLocaleString()
  const videoHistory={caption,youtubeUrl,formatedData}
  try{
    await saveHistory(videoHistory)

  }
  catch(err){
    console.log(err);
    
  }
  
    setShow(true)

  };


  const handleRemoveVideo=async(videoId)=>{
    try{
      const result =await deleteVideo(videoId)
      console.log(result);
      setDeleteResponse(result.data)
      
    }
    catch(err){
      console.log(err);
      
    }
  }
  const dragStarted=(e, videoId)=>{
    console.log(videoId);
    console.log(`Dragging started with id ${videoId}`);
    e.dataTransfer.setData("videoId",videoId)
    
    
  }






  return (
  <>
  <Card draggable={true} onDragStart={(e)=>dragStarted(e,displayData?.id)} className='mb-4'>
    <Card.Img  onClick={handleShow} style={{height:'180px'}}variant='top' src={displayData?.imageUrl}/>
    <Card.Body className='d-flex align-items-center justify-content-between'>
        <h5>{displayData?.caption}</h5>
        {
          !insideCategory &&
          <button onClick={()=>handleRemoveVideo(displayData?.id)} className='btn '><i className='fa-solid fa-trash' style={{color:'red' ,fontSize:'20px'}}></i></button>

        }
    </Card.Body>
  </Card>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={ `${displayData.youtubeUrl}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        </Modal.Body>
      </Modal>
  </>
  )
}

export default VideoCard