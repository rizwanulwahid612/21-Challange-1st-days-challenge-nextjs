export async function generateStaticParams() {
    const res = await fetch("http://localhost:5000/posts/")
    const postdata = await res.json()
    const ids = postdata.map(post => {
        return {
            id: post.id + " "
        }

    })
    return ids
}
const PostpageById = async ({ params }) => {
    const res = await fetch(`http://localhost:5000/posts/${params.id}`)
    const postby = await res.json()
    console.log(postby)
    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{postby?.title}</h2>
                    <p>{postby?.productName}</p>
                    <p>{postby?.description}</p>
                    <div className="card-actions justify-end">

                    </div>
                </div>

            </div>

        </div>
    )
}

export default PostpageById