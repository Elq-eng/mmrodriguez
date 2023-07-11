import '../css/blog.css'
import v1 from '../assets/video/v1.mp4'
import v2 from '../assets/video/v2.mp4'
import v3 from '../assets/video/v3.mp4'

import image1 from '../assets/images/Blog/1.jpg'
import image2 from '../assets/images/Blog/2.jpg'
import image3 from '../assets/images/Blog/3.jpg'
import image4 from '../assets/images/Blog/4.jpg'


const Blog = () => {
  return (
    <>
    {/* primer div */}
      <h1 className='text-center mt-4 font-family-all h1-title '>Blog</h1>
      <section className='section1 '>
        <p className='font-family-text' style={{textAlign:'justify'}}>
        En este blog, te presentamos un regalo especial que se le hizo a Paula para celebrar sus 15 años. La idea consistía en brindarle 15 días de regalos sorpresa, cada uno relacionado con un momento significativo de su último año de vida. Nuestras autoras se esforzaron en crear ideas fantásticas y llevar a cabo este concepto innovador. Descubre cómo se desarrolló esta experiencia única y emocionante.
        </p>
        <div style={{display:'flex', 'justifyContent':'center'}}>
          <img  className="section1-img1" src={image1} alt="" />
        </div>
      </section>
    {/* segundo section  */}
      <section className='section2 p-4'>
        <div className=' img-section2'>
          <img className="section2-img1" src={image2} alt="" />
        </div>
        <div className='px-2 img-section2'>
          <img className="hide-colSBlog" src={image3} alt="" />
        </div>
        <div className='px-2 img-section2'>
          <img className="hide-colSBlog" src={image4} alt="" /> 
        </div>
      </section>

      {/* tercera section */}
      <section className='section3 mt-4'>
        <div>
          <video controls className='section2-vid2 ' src={v3} type="video/mp4" ></video>
        </div>
        <div className='hide-video'>
          <video controls className='section2-vid2' src={v2} type="video/mp4" ></video>
        </div>
        <div className='hide-video'>
          <video controls className='section2-vid2' src={v1} type="video/mp4" ></video>
        </div>
      </section>


    </>
  )
}

export default Blog