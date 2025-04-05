import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'SEO Title contact',
 description: 'SEO Title',
 keywords: ['Contact Page', 'Pablo' , 'Contacto']
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Welcome to Contact page</span>
        </>
    )
}