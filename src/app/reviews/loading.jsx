import ReviewCardSkeleton from '@/skeletons/ReviewCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                [...Array(12)].map((_,index)=><ReviewCardSkeleton key={index}></ReviewCardSkeleton>)
            }
        </div>
    );
};

export default loading;