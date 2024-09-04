import type { Metadata } from "next";
import "../mdx.css";
import "../posgraduate.css";

export const metadata: Metadata = {
    title: "Tadeu Garcia - Posgraduate Redesign Case"
};

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <a href="/re-enrollment" className="fixed left-[40px] btn-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m276.85-460 231.69 231.69L480-200 200-480l280-280 28.54 28.31L276.85-500H760v40H276.85Z"/></svg>
                Previous case
            </a>
            {children}
            <footer>
                <h2>Thank you for your time</h2>
                <p className="flex space-x-2">
                    <span>Return to</span>
                    <a href="/" className="btn-link">
                        portfolio overview
                    </a>
                    .
                </p>
            </footer>
        </main>
    )
}