import {features} from '../constant'
import styles, {layout} from '../style'
import Button from "./Button"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const FeaturedCard = ({icon,title,content,index}) =>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0" } feature-card`}>
    <div className={`h-[60px] w-[60px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
    <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
    </div>
    
    <div className={`flex flex-col ml-3 `}>
      <h4 className='text-poppins text-semibold text-white text-[18px] mb-1 leading-[23px]'>{title}</h4>
      <p className='text-poppins text-normal text-dimWhite text-[16px] mb-1 leading-[24px]'>{content}</p>
    </div>

  </div>
)

const Business = () =>(
  <section id='features' className={`${layout.section}`}>
    <div  data-aos="fade-right" data-aos-duration="500" data-aos-delay="400" className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>You do the bussiness, <br className='sm:block hidden'/> we'll handle the money.</h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

    <Button styles={"mt-10"}/>
    </div>

    <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="400" className={`${layout.sectionImg} flex-col`}>
      {features.map((feature,index)=>(
        <FeaturedCard key={feature.id} {...feature} index={index}/>
      ))}
    </div>
  </section>
  )

export default Business