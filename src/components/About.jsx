import React from 'react'

export default function About({mode}) {
  let myStyle = {
    color: mode === 'dark'?'white':'black',
    backgroundColor: mode == 'dark'? 'black': 'white'
  }
  return (
    <>
      <div className="container" style={myStyle}>
        <h2 className='mb-4'>About Us</h2>    
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dolores, debitis, natus hic excepturi quisquam voluptatibus quo nostrum nobis aliquid totam, beatae velit voluptas? Excepturi quo reprehenderit vero optio? Voluptatem inventore cupiditate odit repellendus, minima ad neque ratione repellat alias, perferendis voluptatum similique harum. Commodi pariatur distinctio perspiciatis impedit soluta laboriosam quis! Pariatur iure velit quod tempore ut voluptatum quia tempora aliquam, amet, eos maxime id et odio. Modi perspiciatis rem maiores aliquid nemo neque accusantium repellat, temporibus est. Corrupti enim libero laborum exercitationem eveniet, consectetur a corporis. Iste eveniet harum neque nostrum assumenda sapiente, magni sit quisquam quo voluptates.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae numquam quaerat officiis nesciunt recusandae assumenda, rem modi porro? Aliquid placeat pariatur iusto incidunt, earum ducimus praesentium assumenda vero, harum accusantium dolorum consectetur eius sequi ipsa molestiae nisi laudantium nobis ut? Exercitationem atque nemo totam nam eum dolorem, qui quibusdam reprehenderit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloribus adipisci voluptatum aperiam quam exercitationem perferendis nihil, tempora architecto ut commodi asperiores molestiae eos ducimus, nisi corporis, maxime expedita error odit laborum a. Velit, praesentium vitae, veritatis, nesciunt aliquid placeat sapiente quasi autem repudiandae reiciendis esse accusamus ad eos? Illo cupiditate similique, harum voluptates nemo adipisci aliquid amet mollitia magni dolorem ipsum. Tenetur exercitationem aut ut soluta, temporibus iste expedita hic eaque culpa voluptatem quibusdam dolores dolorem, aliquam ipsum ullam?</p>
      </div>
    </>
  )
}
