
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import Link from "next/link";
import Image from "next/image";
import Meta from "../../components/Meta";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Magazine from "../../components/Magazine";
import PostNavigation from "../../components/PostNavigation";
import { Block } from "../../components/Grid";
import PostBody from '../../components/post-body'
export default function Post({ post, morePosts, preview }) {


  return (

          <>
            <Meta />
            <Header />
            <Magazine>
                <Magazine.Cover image={post?.coverImage.url}>
                    <Magazine.Footer className="absolute bottom-3 w-100" />
                </Magazine.Cover>
                <Magazine.Content>
                    <Block className="pt-10 md:pt-16 lg:pt-20 xl:pt-24 px-4 md:px-16 xl:px-20 pb-10 md:pb-16">
                        <div className="single-post">
                            
                            <div className="single-post__body">
                            <PostBody content={post?.content} />
                            </div>
                        </div>
                        <PostNavigation prevLink="#" prevTitle="How much will it Cost to Travel in 2022?" nextLink="#" nextTitle="Which is correct Travelling or Traveling?" className="py-12 my-12" />
                {    /*    <Form title="Leave a Comment" action="#" /> */}
                    </Block>
                </Magazine.Content>
            </Magazine>
      
           
              
           </>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}
