export default function DetailsLayout({ children, modal }) {
    return (
        <>
            {modal}
            {children}
        </>
    );
}