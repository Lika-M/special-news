import NewsList from "@/components/news-list.js";
import { getLatestNews } from "@/util/news.js";

export default function LatestNewsPage() {
    const latestNews = getLatestNews();
    return (
        <>
            <h1>Latest News</h1>
            <NewsList news={latestNews} />
        </>
    );
}