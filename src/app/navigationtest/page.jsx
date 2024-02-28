"use client"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const NavigationTestPage =()=>
{   
    // CLIENT SIDE NAVIGATION
    const router =useRouter()
    const pathname =usePathname()
    const searchParam =useSearchParams()
    console.log(pathname)
    const q = searchParam.get("q");
    confirm.log(q);
    const handleClick = ()=>
    {
        router.push("/")
    }
    return(
<div className={styles.container}>
    <Link href="/" prefatch={false}>Click Here</Link>
    <button onClick={handleClick}>Write and Redirect</button>
</div>
    )
}
export default NavigationTestPage;