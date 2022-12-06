import {apple,bill,google} from '../assets'
import styles, {layout} from "../style"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Billing = () => (
    <section  data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0" 
              id='product' 
              className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="billing" className='h-[100%] w-[100%] relative z-[5]'/>

        <div className='h-[50%] w-[50%] absolute z-[3] -left-1/2 top-0 white__gradient rounded-full'/>
        <div className='h-[50%] w-[50%] absolute z-[0] -left-1/2 bottom-0 pink__gradient rounded-full'/>
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          This right here still feels like the honeymoon when you say may name,Nothing's changed i'm still boys inside my thoughts, am i meant to unsderstand my faults
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-5'>
          <img src={apple} alt="googlePlay" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt="Google" className='w-[128px] h-[42px] object-contain mx-5 cursor-pointer'/>
        </div>
      </div>
    </section>
  )

export default Billing