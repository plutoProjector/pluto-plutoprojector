import styles from '../style'
import Button from "./Button"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const CTA = () =>  (
    <section data-aos="fade-right" data-aos-duration="500" data-aos-delay="400" className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 box-shadow rounded-[20px]`}>
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>everything you need to acept and grow your business anywhere on the planet.</p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/>
      </div>
    </section>
  )

export default CTA