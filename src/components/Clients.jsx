import {clients} from '../constant'
import styles from "../style"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Clients = () => (
    <section  data-aos="zoom-out" className={`${styles.flexCenter} mt-4`}>
      <div className={`${styles.flexCenter} flex-row w-full`}>
        {clients.map((client)=>(
          <div  key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img  src={client.logo} alt="client" className='sm:w=[192px] w-[100px] object-contain'/>
          </div>
        ))}
        </div>
    </section>
  )

export default Clients