import { notFound } from "next/navigation.js";

import { getAllNews } from "@/util/news.js";

export default function ImagePage({ params }) {
    const newsItemSlug = params.slug;
    const item = getAllNews().find(item => item.slug === newsItemSlug);

    if (!item) {
        notFound();
    }

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${item.image}`} alt={item.title} />
        </div>
    );
}