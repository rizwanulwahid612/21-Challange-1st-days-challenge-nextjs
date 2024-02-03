import Link from 'next/link';
import styles from './Post.module.css'
const page = async () => {
    const res = await fetch("http://localhost:5000/posts", {
        next: {
            revalidate: 5,
        }
    });
    const posts = await res.json();
    return (
        <div className={styles.textcolor}>
            <div className="card w-96 bg-base-100 shadow-xl">
                {posts?.map((p, i) => <div key={i} className="card-body">
                    <h2 className="card-title">{p?.title}</h2>
                    <p>{p?.productName}</p>
                    <p>{p?.description}</p>
                    <div className="card-actions justify-end">
                        <Link href={`/posts/${p?.id}`}> <button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>)}

            </div>


        </div>
    )


}

export default page
