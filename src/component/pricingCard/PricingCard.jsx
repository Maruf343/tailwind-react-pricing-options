import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
     const {name,price,description,features}=pricing;
    return (
        <div className='border flex flex-col bg-gray-400 text-white rounded-2xl p-4'>
            {/* card header  */}
            <div>
                <h1 className="text-6xl">
                    {name}
                </h1>
                <h4>
                    ${price}/month
                </h4>
            </div>
            {/* card body  */}
            <div className='bg-gray-500 p-4 flex-1 rounded-t-2xl mt-8'>
                <p>
                    {description}
                </p>
                {
                    features.map((feature,index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full">Wide</button>
        </div>
    );
};

export default PricingCard;