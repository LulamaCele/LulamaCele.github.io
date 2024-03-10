import React from 'react';
//import images
import Wedding from '../images/Wedding-app.png';
import Movies from '../images/Movies-app.png';
import Ecommerce from '../images/E-commerce-app.png';

export const Projects = () => {
  return (
    <div className='bg-[#11235A] px-6 py-6'>
        <div className='text-white text-center font-medium text-2xl'
        >Projects
        </div>
        <div className='md:grid md:grid-cols-3 md:gap-2'>
            <div className='bg-[#11235A] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/80 rounded my-6'>
                <img className='rounded' src={Wedding} alt="" />
                <p className='flex flex-col justify-center items-center p-3'>
                    <span className='text-white text-xl'>
                        Wedding Website
                    </span>
                    <span className='text-gray-200 text-center'>
                    This is a wedding planner website that showcases the different
                    services and different wedding plan packages customers can choose from.
                    It also has a contact form where customers can send enquiries.
                    </span>
                    
                </p>
            </div>
            <div className='bg-[#11235A] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/80 rounded my-6'>
                <img className='rounded' src={Movies} alt="" />
                <p className='flex flex-col justify-center items-center p-3'>
                    <span className='text-white text-xl'>
                        Movies Website
                    </span>
                    <span className='text-gray-200 text-center'>
                    This website allows you to search for movies using movie titles.
                    You can add and remove movies from favourites as well as click 
                    on a movie to learn more about a specific movie.
                    </span>
                    
                </p>
            </div>
            <div className='bg-[#11235A] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/80 rounded my-6'>
                <img className='rounded' src={Ecommerce} alt="" />
                <p className='flex flex-col justify-center items-center p-3'>
                    <span className='text-white text-xl'>
                        E-commerce Website
                    </span>
                    <span className='text-gray-200 text-center'>
                        This is a clothing e-commerce website. Customers can add items to
                        the cart and delete items from cart. Item quantity in the cart can 
                        be increased or decreased. Totals for each item/s is calculated and 
                        the final total is calculated based on the sum of all item totals.
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Projects