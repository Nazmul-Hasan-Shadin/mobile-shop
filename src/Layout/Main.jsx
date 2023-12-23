import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    const links= <>
      <li> <Link to={'/'}>Home</Link> </li>
      <li> <Link to={'/'}>About</Link> </li>
      <li> <Link to={'/'}>store</Link> </li>
      <li> <Link to={'/'}>Blog</Link> </li>
      <li> <Link to={'/'}>Contact</Link> </li>
     
    </>
    return (
<div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full  flex-row-reverse  navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className=" px-2 mx-2">

      <input type="text" placeholder="search here" className="input input-bordered rounded-2xl w-full max-w-xs" />

      </div>
      <div className="flex-1 hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
            {
                links
            }
        </ul>
      </div>
    </div>
    {/* Page content here */}
     <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
       {
        links
       }
    </ul>
  </div>
</div>
    );
};

export default Main;