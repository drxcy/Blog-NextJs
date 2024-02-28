import styles from './postUser.module.css'
// FETCH DATA WITH A API
// const getData= async (userId) => {
// const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:"no-store"});
//     if(!response.ok)
//     {
//         throw new Error(response.statusText);
//     }
//     return response.json();
// }
const PostUser= async({userId}) => {
    // FETCH DATA WITH A API
    // const user = await getData(userId);
    // FETCH DATA WITHOUT A API
    const user = await getUser(userId);
    return(
        <div className={styles.container}> 
    <Image src={user.img ? user.img:"/noavatar.png"} alt="" width={50}height={50} className={styles.avatar}/>
        <div className="texts">
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}`</span>
        </div>
    
    </div>
    )
}
export default PostUser;