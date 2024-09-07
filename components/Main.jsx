import Page from './Hero';
import Form from './Form';
import Footer from './Footer';

export default function Main() {
    return (
        <>
        <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <Page />
            <Form />
            <Footer />
            </div>
        </>
    )
}