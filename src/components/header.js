import React, { useState, useEffect, useRef, } from 'react';
import { Link} from 'gatsby';
import { CiSearch } from 'react-icons/ci';
import Signin from '../pages/Signin';
import Subscribe from '../pages/Subscribe';
import Search from '../pages/Search';
import '../styles/globals.css'






const Header = () => {
  const [signIn, setSignIn] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);


 

  const handleSignInClick = () => {
    setSignIn(true);
    setSubscribe(false);
    setSearchOpen(false);
  };

  const handleSignInClose = () => {
    setSignIn(false);
  };

  const handleSubscribeClick = () => {
    setSubscribe(true);
    setSignIn(false)
    setSearchOpen(false);
  };

  const handleSubscribeClose = () => {
    setSubscribe(false);
  };

  const handleSearchClick = () => {
    setSearchOpen(true);
    setSignIn(false);
    setSubscribe(false);
  };

  const searchClose = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (searchClose.current && !searchClose.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  

  return (
    <header className={`relative bg-white ${searchOpen ? 'h-[60px]' : 'h-[80px]'}`}>
      <div className={`flex gap-20 px-12 py-8 items-center bg-white filter ${signIn || subscribe || searchOpen ? 'blur-[2px]' : ''}`}>
        <div className='text-2xl font-extrabold'>Alto</div>
        <ul className='flex gap-8 font-medium items-center'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/style-guide'>Style Guide</Link>
          </li>
          <li>
            <Link to='/author'>Author</Link>
          </li>
          <li>
            <Link to='/collection'>Collection</Link>
          </li>
        </ul>
        <div className='flex gap-6 items-center font-medium end ml-auto'>
          <div ref={searchClose}>
          <CiSearch size={22} className='cursor-pointer' onClick={handleSearchClick}  />
          </div>
          <div>
            <button onClick={handleSignInClick}>Sign In</button>
          </div>
          <div>
            <button className='bg-sky-500 text-white w-28 h-10 rounded-3xl' onClick={handleSubscribeClick}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {signIn && (
        <div className='fixed inset-0 flex justify-center items-start mt-10'>
          <Signin onClose={handleSignInClose} onSubscribeClick={handleSubscribeClick} />
        </div>
      )}
      {subscribe && (
        <div className='fixed inset-0 flex justify-center items-start mt-10'>
          <Subscribe onClose={handleSubscribeClose} onSigninClick={handleSignInClick} />
        </div>
      )}
      {searchOpen && (
        <div className='fixed inset-0 flex justify-center items-start mt-20 rounded-2xl'>
          <Search  />
        </div>
      )}
    </header>
  )
      }

      export default Header;