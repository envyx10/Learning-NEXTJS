import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'SEO Title pricing',
 description: 'SEO Title',
 keywords: ['Pricing Page', 'Pablo' , 'Precios']
};

export default function PricingPage(){
    return(
        <>
        <span className="text-7xl">Welcome to PricingPage</span>
        </>
    )
}