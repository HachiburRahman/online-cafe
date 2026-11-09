import ReviewCard from '@/cards/ReviewCard';
import React from 'react';
import { resolve } from 'styled-jsx/css';
export const instant=false;
const getReviews=async()=>{
    const res=await fetch('https://taxi-kitchen-api.vercel.app/api/v1/reviews')
    const data=await res.json();
    await new Promise(resolve=>setTimeout(resolve,3000))
    return data.reviews || [];
}
const ReviewsPage = async() => {
    const details=await getReviews()
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                details.map(review=><ReviewCard key={review.id} review={review}></ReviewCard>)
            }
        </div>
    );
};

export default ReviewsPage;