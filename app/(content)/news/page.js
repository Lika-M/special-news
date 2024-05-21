import NewsList from "@/components/news-list.js";
import { getAllNews } from "@/util/news.js";

export default async function NewsPage() {
    const news = await getAllNews();

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={news} />
        </>
    );
}