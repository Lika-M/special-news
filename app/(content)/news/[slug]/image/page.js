import { notFound } from "next/navigation.js";

import { getNewsItem } from "@/util/news.js";

export default async function ImagePage({ params }) {
    const newsItemSlug = params.slug;
    const item = await getNewsItem(newsItemSlug);

    if (!item) {
        notFound();
    }

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${item.image}`} alt={item.title} />
        </div>
    );
}