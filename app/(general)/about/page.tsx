import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ['about Page', 'Pablo' , 'Información']
};

export default function AboutPage(){
    return (
        <main className="flex flex-col item-center p-24">
            <span className="text-7xl">About page</span>
        </main>
    )
}