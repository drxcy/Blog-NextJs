import styles from './singlePost.module.css';
import Image from 'next/image';
import PostUser from '@/components/postUser/postUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';
// FETCH DATA WITH A API
const getData= async (slug) => {
const response = await fetch(`https://localhost:3000/api/blog/${slug}`);
    if(!response.ok)
    {
        throw new Error(response.statusText);
    }
    return response.json();
}
export const genrateMetadata = async({params}) =>
{
    const {slug} = params;
    const posts = await getData(slug);
    // const post = await getPost(slug);
    return {
        title: posts.title,
        description: posts.desc,
    }
    
};
const SinglePostPage = async({params})=>
{
    const {slug} = params;
    // FETCH DATA WITH API
    const post = await getData(slug);
    // FETCH DATA WITHOUT A API
    // const post= await getPost(slug);
    return(
    <div className={styles.container}>
     {post.img &&(<div className={styles.imgContainer}>
            <Image src={post.img} alt="" fill className={styles.img}/>
        </div>)}
        <div className={styles.textContainer}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.detail}>
                
             {post && (
             <Suspense fallback={<div>Loading...</div>}>
               <PostUser userId={post.userId}/>
               </Suspense>
               )}
            </div>
            <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Published</span>
                    <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
                </div>
            <div className={styles.content}>
               {post.desc}
            </div>
        </div>
    </div>
    
    );
};
export default SinglePostPage;
