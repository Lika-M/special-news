import NewsList from "@/components/news-list.js";
import { getNewsForYear } from "@/util/news.js";

export default function FilteredNewsPage({ params }) {
    const newsYear = params.year;
    const news = getNewsForYear(newsYear);

    return <NewsList news={news} />
}