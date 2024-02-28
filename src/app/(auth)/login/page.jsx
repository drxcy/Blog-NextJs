import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";

const LoginPage =()=>
{
    // auth?.user?.isAdmin && router.push("/")
    return(
    <div className={styles.container}>
        <div className={styles.wrapper}><form action={handleGithubLogin}> 
    <button className={styles.github}>Login with GitHub</button>
    </form>
    <form action={login}>
        <input type="text" placeholder="username" name="username"/>
        <input type="password" placeholder="password" name="password"/>
        <button>Login With Crendentials</button>
    </form>
    <LoginForm/>
    </div>
        </div>
    )
}
export default LoginPage;
