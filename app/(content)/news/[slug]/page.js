import Link from "next/link.js";
import { notFound } from "next/navigation.js";

import { DUMMY_NEWS } from "@/dummy-news.js";
import { getNewsItem } from "@/util/news.js";

export default async function NewsDetailsPage({ params }) {
    const slug = params.slug;
    const newsItem = await getNewsItem(slug);

    if (!newsItem) {
        notFound();
    }

    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${slug}/image`}>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </Link>
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>

            <p>{newsItem.content}</p>
        </article>
    );
}