import { getAvailableNewsYears, getAvailableNewsMonths } from "@/util/news.js";
import { getNewsForYear, getNewsForYearAndMonth } from "@/util/news.js";
import NewsList from "@/components/news-list.js";

import Link from "next/link.js";

export default async function FilteredNewsPage({ params }) {
    const filter = params.filter; //array of segments

    const year = filter?.[0];
    const month = filter?.[1];

    let news;
    let links = await getAvailableNewsYears();
    let contentNews = 'No news found of the selected period.'

    if (year && !month) {
        news = await getNewsForYear(year);
        links = getAvailableNewsMonths(year);
    }

    if (month) {
        news = await getNewsForYearAndMonth(year, month);
        links = [];
    }

    if (news && news.length > 0) {
        contentNews = <NewsList news={news} />
    }

    const availableYears = await getAvailableNewsYears();
    
    if ((year && !availableYears.includes(year)) ||
        (month && !getAvailableNewsMonths(year).includes(month)) ||
        (filter && filter.length > 2)) {
        throw new Error('Invalid path.');
    }

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map(link => {
                            const href = !year ? `/archive/${link}` : `/archive/${year}/${link}`;

                            return (
                                <li key={link}>
                                    <Link href={href}>
                                        {link}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
            {contentNews}
        </>
    );
}