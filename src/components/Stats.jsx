import {stats} from '../constant';
import styles, {layout} from '../style';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Stats = () =>  (
  <section data-aos="fade-up" data-aos-duration="500" className={`${styles.flexStart} flex-row flex-wrap sm:mb-15 mb-6`}>
      {stats.map((stat)=>(
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h5 className='font-poppins font-semibold xs:text[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h5>
          <p className='font-poppins font-normal xs:text[20px] text-[15px] xs:leading-[25px] leading-[20px] text-gradient uppercase ml-3'>{stat.title}</p>
        </div>
      ))}
  </section>
  )


export default Stats