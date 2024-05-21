import NewsList from "@/components/news-list.js";
import { getLatestNews } from "@/util/news.js";

export default async function LatestNewsPage() {
    const latestNews = await getLatestNews();
    return (
        <>
            <h1>Latest News</h1>
            <NewsList news={latestNews} />
        </>
    );
}