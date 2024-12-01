import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import {Col,Row} from 'react-bootstrap'
import { addVideo, getAllVideos, getSingleCategory, updateCategory } from '../service/allAPI'
import Category from './Category'



function View({addVideoResponse,deleteVideoCategoryResponse,setdeleteVideoViewResponse}) {

const [allVideos,setAllVideos]=useState([])
const [deleteResponse,setDeleteResponse]=useState("")
useEffect(()=>{
   getVideos()
}, [addVideoResponse,deleteResponse,deleteVideoCategoryResponse])

console.log(allVideos);
const getVideos=async()=>{
   try{
      const result=await getAllVideos()
      console.log(result.data);
      setAllVideos(result.data)

      
   }
   catch(err){
      console.log(err);
      
   }
}

const dragOverView =(e) =>{
   e.preventDefault()
}
const dropCategoryVideo=async(e)=>{
   const{videoDetails,CategoryId} =JSON.parse(e.dataTransfer.getData("dataShare"))
   console.log(videoDetails,CategoryId);


   try{
      const {data}=await getSingleCategory(CategoryId)
      console.log(data);

   const updatedCategoryVideoList  = data.allVideos.filter(item=>item.id!=videoDetails.id)
   console.log(updatedCategoryVideoList);
   

   const {id,CategoryName}=data
   const categoryResult=await updateCategory(id,{id,CategoryName,allVideos:updatedCategoryVideoList})
   setdeleteVideoViewResponse(categoryResult.data)



   await addVideo(videoDetails)
   getVideos()


      
   }
   catch(err){
      console.log(err);
      
   }
   
}

return (
  <>

  {
   allVideos.length>0 ?
      <Row  droppable={true} onDrop={e=>dropCategoryVideo(e)} onDragOver={(e)=>dragOverView(e)} className='border border-3 p-5'>
     {
      allVideos?.map(video =>(
         <Col key={video?.id}  lg={4} md={6} sm={12}>
 

         <VideoCard  displayData={video} setDeleteResponse={setDeleteResponse}/>
        </Col>
      ))
      
     }
      </Row>
      : 
      <div className='text-danger fs-3 fw-bold'>Nothing to Display</div>

  }
    
  </>
  )
}

export default View
