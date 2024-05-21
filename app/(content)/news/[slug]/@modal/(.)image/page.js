import { notFound } from "next/navigation.js";

import ModalBackdrop from "@/components/modal-backdrop.js";
import { getNewsItem } from "@/util/news.js";

export default async function InterceptedImagePage({ params }) {
    const newsItemSlug = params.slug;
    const item = await getNewsItem(newsItemSlug);

    if (!item) {
        notFound();
    }

    return (
        <ModalBackdrop>
            <div className="modal-backdrop" />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${item.image}`} alt={item.title} />
                </div>
            </dialog>
        </ModalBackdrop>
    );
}