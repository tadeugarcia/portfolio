import "../mdx.css";
import "../re-enrollment.css";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <a href="/" className="fixed left-[40px] btn-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m276.85-460 231.69 231.69L480-200 200-480l280-280 28.54 28.31L276.85-500H760v40H276.85Z"/></svg>
                Portfolio overview
            </a>
            <a href="/posgraduate" className="fixed right-[40px] btn-link">
                Next case
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M683.15-460H200v-40h483.15L451.46-731.69 480-760l280 280-280 280-28.54-28.31L683.15-460Z"/></svg>
            </a>
            {children}
            <footer>
                <h2>Thank you for your time</h2>               
                <p className="flex space-x-2">
                    <span>Proceed to the</span>
                    <a href="/posgraduate" className="btn-link">
                        next case
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M683.15-460H200v-40h483.15L451.46-731.69 480-760l280 280-280 280-28.54-28.31L683.15-460Z"/></svg>
                    </a>
                </p>
            </footer>
        </main>
    )
}