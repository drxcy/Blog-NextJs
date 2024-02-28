import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';
// FETCH DATA WITH A API
const getData= async(data) => {
    const response = await fetch("http://localhost:3000/api/blog",{next:{revalidate:3600}});

    if(!response.ok)
    {
        throw new Error(response.statusText);
    }
    return response.json();
}
const Blogpage= async()=>
{ 
     const posts = await getData();
    // FETCH DATA WITHOUT A API
    // const posts = await getPosts();
    return(
    <div className={styles.container}>
        {posts.map((post)=>
        <div className={styles.post} key={post.id}>
        <PostCard post={post}/>
        </div>
        )}
        
      
    </div>
    )
}
export default Blogpage;
