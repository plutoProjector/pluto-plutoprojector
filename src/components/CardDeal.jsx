import {card} from '../assets'
import styles,{layout} from "../style"
import Button from "./Button"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const CardDeal = () => (
    <section  data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0"
              className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Find a better card deal <br className='sm:block hidden'/> in a few easy step</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          I don't think meant to understands myself, Maybe you do , and that's good for you And maybe in time , maybe one day
        </p>
      <Button styles="mt-5"/>
      </div>

      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="Card" className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )

export default CardDeal