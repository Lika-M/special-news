'use client';

import { notFound, useRouter } from "next/navigation.js";

import { getAllNews } from "@/util/news.js";

export default function InterceptedImagePage({ params }) {
    const router = useRouter();

    const newsItemSlug = params.slug;
    const item = getAllNews().find(item => item.slug === newsItemSlug);

    if (!item) {
        notFound();
    }

    return (
        <article onClick={router.back}>
            <div className="modal-backdrop" />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${item.image}`} alt={item.title} />
                </div>
            </dialog>
        </article>
    );
}