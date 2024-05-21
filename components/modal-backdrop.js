'use client';

import { useRouter } from "next/navigation.js";

export default function ModalBackdrop({children}){
    const router = useRouter();
    return (
        <article onClick={router.back}>
            {children}
        </article>
    );
}