'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({path, text}: Props) => {

    const pathName = usePathname();

    return (

        <Link
            className={`mr-2 link hover:underline hover:text-blue-400 ${ (pathName === path) ? 'text-blue-500' : ''}`} 
            href={ path } 
        >
            { text }
    </Link>
    )

}
