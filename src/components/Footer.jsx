import styles from '../style'
import { footerLinks,socialMedia } from '../constant'
import {logo} from "../assets"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Footer = () =>  (
    <section data-aos="fade-down" data-aos-delay="400" className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex justify-start mr-10 flex-col'>
          <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-cotain'/>
          <p className={`${styles.paragraph} max-w-[310px] mt-5`}>A new way to make the payments easy, reliable and secure</p>
        </div>

        <div className='flex-[1.5] flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footer)=>(
            <div key={footer.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{footer.title}</h4>
              <ul className='list-none mt-4'>
                {footer.links.map((link,index)=>(
                  <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footer.links.length -1 ? "mb-4" : "mb-0"}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[33f3r45]'>
        <p className='font-poppins text-center font-normal text-[18px] leading-[27px] text-white'>2021 HooBank. All Rights Reserved.</p>

        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social,index)=>(
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? "mr-6" : "mr-0"} `}/>
          ))}
        </div>
      </div>
    </section>
  )

export default Footer