import React from 'react'
import { Link } from 'react-router-dom';
import landingImage from "../assets/music.jpg.png"
import Card from 'react-bootstrap/Card';
import m1 from  '../assets/m1.png'
import category from '../assets/category.png'
import history from '../assets/historyy.webp'
function Landing() {
  return (
   
   <>
   
   {/* landing section */}
    <div className='container landingsection'>
   <div className='row aliggn-items-center my-5'>
    <div className="col-lg-5">
      <h1>welcome to <span className='text-warning'>media Player</span></h1>
      <p style={{textAlign:'justify'}} className='mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia explicabo enim, numquam voluptates a commodi facere architecto fugit, fugiat tenetur omnis voluptatum odio ullam dicta ducimus ea, provident repellat esse.</p>
      <Link to={'home' }className='btn btn-info mt-4'>Get started</Link>
    </div>
    <div className="col"></div>
    <div className="col-lg-6">
      <img src={landingImage} alt="" />
    </div>
    </div>
    {/* {features} */}

    <div className=' future container my-5'>
      <h1 className='text-center text-warning'>Features</h1>
      <div className='row'>

        <div className="col-lg-4">
        <Card style={{ width: '21rem'  }} className='p-3'>
      <Card.Img variant="top" src={m1} />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
        Users can Upload ,view and remove the videos 
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>

    <div className="col-lg-4">
        <Card style={{ width: '21rem' }} className='p-3'>
      <Card.Img variant="top" src={category} />
      <Card.Body>
        <Card.Title>Categorize video videos</Card.Title>
        <Card.Text>
        Users can categorize the video by drag and drop features
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card style={{ width: '21rem' }} className='p-3'>
      <Card.Img variant="top" src={history} />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
        Users can manage the watch history of all videos
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
      </div>
    </div>
    </div>
    {/* landing footer */}
    <div className= "container my-5 p-5 border border-white border-3 rounded">
      <div className="row">
          <div className="col-lg-6">
                <h3 className='text-warning'>Simple,Fast and Powerful</h3>


                 <div className='mt-5 text-white'>
                  <p><span className='fs-5 fw-bold'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit earum illo fugit eveniet, distinctio non dolores, sint itaque tempora, voluptatum ullam? Excepturi vel hic repellat amet deleniti modi enim odio.</p>
                  <p><span className='fs-5 fw-bold'>Manage videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit earum illo fugit eveniet, distinctio non dolores, sint itaque tempora, voluptatum ullam? Excepturi vel hic repellat amet deleniti modi enim odio.</p>
                  <p><span className='fs-5 fw-bold'>Watch History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit earum illo fugit eveniet, distinctio non dolores, sint itaque tempora, voluptatum ullam? Excepturi vel hic repellat amet deleniti modi enim odio.</p>
                 </div>
          </div>
          <div className="col-lg-6 p-5">
          <iframe width="460" height="315" src="https://www.youtube.com/embed/d9MyW72ELq0?si=ymGl1KDjYaaB4KPi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
      </div>
    </div>
    </>
  )
}

export default Landing