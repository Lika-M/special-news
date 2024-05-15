
export default function NewsDetailsPage({ params }) {

    return (
        <>
            <h1>Single News</h1>
            <p>{params.slug}</p>
        </>
    );
}