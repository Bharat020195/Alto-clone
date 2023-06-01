import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Blog from'../templates/blog-post'


import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (

  <Layout>
    <Seo title="Home" />
    <div className="flex my-20 mx-10 space-x-8 overflow-auto h-[350px] ">
      {data.cms.posts.map((v, i) => {

       const image = data.cms.coverimage
        return (
          <div className=" flex  " key={i}>
            <Link to={`/posts/${v.slug}`}>
              <div className=" w-[250px] h-[300px]">
              <div className=''>{<img src={image} className="w-[250px] h-[250px]" />}</div>
                <div className="text-xl font-extrabold">{v.title}</div>
                
                
              </div>
            </Link>


            
          </div>
        )
      })}

    </div>
    
  </Layout>


)

export default IndexPage

export const query = graphql`
  query {
    cms {
      posts {
        id
        title
        author {
          id
          name
        }
        slug
        content {
          markdown
        }
        coverImage {
          node {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`