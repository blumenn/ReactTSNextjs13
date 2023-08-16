interface Post {
    title: string;
    content: string;
    slug: string
}

interface props {
    params: { slug: string }
}

export default async function BlogPostPAge({params}: props) {
    const posts: Post[] = await fetch("http://localhost:300/api/content").then(
        (res) => res.json()
    );
    const post = posts.find((post) => post.slug === params.slug)!;

    return (
        <div>
            <h1>{post.title}</h1>
            <h3>{post.content}</h3>
        </div>
    );

}