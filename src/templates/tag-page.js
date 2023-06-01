import React from "react"
import { graphql, Link } from "gatsby"



import Layout from "../components/layout"
export default function TagPage({ data }) {

  return (
    <Layout>
      {data.cms.posts.map((v, i) => {
        return (

          <div   key={i}>
            <Link to={`/posts/${v.slug}`}>
              <div className=''>
                {v.title}
              </div>
            </Link>
          </div>

        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostsQuery($tag: [String!]) {
    cms {
      posts(where: {tags_contains_some: $tag}) {
        content {
          html
        }
        slug
        tags
        title
      }
    }
  }
  `;

