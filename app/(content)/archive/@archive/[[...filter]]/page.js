import { Suspense } from "react";
import NewsList from "@/components/news-list.js";
import {
    getAvailableNewsYears, getAvailableNewsMonths,
    getNewsForYear, getNewsForYearAndMonth
} from "@/util/news.js";


import Link from "next/link.js";

async function FilteredHeader({ year, month }) {
    const availableYears = await getAvailableNewsYears();
    const availableMonth = getAvailableNewsMonths(year);

    let links = availableYears;

    if (year && !month) {
        links = getAvailableNewsMonths(year);
    }

    if (month) {
        links = [];
    }


    if ((year && !availableYears.includes(year)) ||
        (month && !availableMonth.includes(month))) {
        throw new Error('Invalid path.');
    }

    return (
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
    );
}

async function FilteredNews({ year, month }) {
    let news;
    let contentNews = 'No news found of the selected period.';

    if (year && !month) {
        news = await getNewsForYear(year);
    } else if (year && month) {
        news = await getNewsForYearAndMonth(year, month);
    }

    if (news && news.length > 0) {
        contentNews = <NewsList news={news} />
    }

    return contentNews;
}

export default function FilteredNewsPage({ params }) {
    const filter = params.filter; //array of segments

    const year = filter?.[0];
    const month = filter?.[1];

    return (
        <Suspense fallback={<p>Loading filtered news...</p>}>
            <FilteredHeader year={year} month={month} />
            <FilteredNews year={year} month={month} />
        </Suspense>
    );
}