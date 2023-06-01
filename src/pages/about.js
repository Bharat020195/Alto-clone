import React from 'react';
import { Link } from 'gatsby';
import Image from '../images/aboutimg.jpeg';
import Image2 from '../images/Aboutimg2.gif';
import Image3 from '../images/Aboutimg3.jpg';
import Layout from '../components/layout';
import '../styles/globals.css';


const About = () => {
  return (
    <Layout>
      <div className='mx-64 my-20 '>
        <div className='my-10 space-y-10'>
          <h1 className='text-4xl font-bold text-center'>About this theme</h1>
          <p className='text-2xl antialiased'> 
            Alto is a clean, minimalist blog theme featuring light and dark mode.
            Launch your online publications with flair. In addition to being
            fully responsive and styled, it comes with a few optional bells and
            whistles that are explained below.
          </p>
        </div>

        <div className='space-y-6 my-20'>
          <h2 className='text-2xl font-semibold'>Post carousel</h2>
          <p className='text-2xl antialiased'>
            When you have featured posts, the posts will automatically be
            displayed in a carousel on the homepage. To feature a post, navigate
            to the post settings and check "Feature this post". Read more about
            featured posts <Link to='/'>here</Link>.
          </p>
          <img src={Image} alt='' />
        </div>
        <div className='space-y-6 my-20'>
          <h2 className='text-2xl font-semibold'>White logo</h2>
          <p className='text-2xl antialiased'>
            When the theme is in dark mode, a white version of the logo will be needed when an image is used as the logo depending on the image. The white logo can be selected in <span>Settings > Design > Site-wide > White logo for dark mode</span> field.
          </p>
          <img src={Image2} alt='' />
          <p className='text-center text-sm opacity-50'>White logo shows up when dark mode is selected</p>
        </div>

        <div className='space-y-6 my-20'>
          <h2 className='text-2xl font-semibold'>Related posts</h2>
          <p className='text-2xl antialiased'>
            If there's a post with the same tag as the current post, it will be displayed as a related post at the bottom of the content. Read more about tags <Link to='/'>here</Link>.
          </p>
          <img src={Image3} alt='/' />
        </div>
      </div>
    </Layout>
  );
};

export default About;
