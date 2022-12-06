import {feedback} from '../constant'
import styles from "../style"
import FeedbackCard from "./FeedbackCard"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Testimonials = () => (
    <section id='client' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>

      <div data-aos="fade-up-right" data-aos-duration="500"  className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 realtive z-[1]'>
       <h2 className={`${styles.heading2}`}> What people are <br className='sm:block hidden'/> saying about us</h2>
       <div data-aos="fade-up-left" data-aos-duration="500" className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow you business anywhere on the palanet
        </p>
       </div>
      </div>

      <div  data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="400"
            data-aos-offset="0" 
            className={`flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]`}>
        {feedback.map((card)=>(
          <FeedbackCard id={card.id} {...card}/>
        ))}
      </div>


    </section>
  )

export default Testimonials