import styles from './contact.module.css';
import Image from 'next/image';
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})
export const metadata = {
    title: "Contact Content",
    description: "Contact information",
  };
  
const contact =()=>
{
    return(
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src="/contact.png" alt="" fill className={styles.img}/>
        </div>
        <div className={styles.formContainer}>
             {/* <HydrationTestNoSSR/> 
         <div suppressHydrationWarning>{a}</div> */}
            <form action=""className={styles.form}>
                <input type="text" placeholder='Name and Surname' id="" />
                <input type="text" placeholder='Email Address' id="" />
                <input type="text" placeholder='Phone Number (Optional)' id=""  />
                <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button>Send</button>
               
            </form>
        </div>

    </div>
    )
}
export default contact;
