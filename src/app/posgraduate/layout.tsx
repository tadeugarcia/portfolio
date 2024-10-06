import * as motion from "framer-motion/client";
import type { Metadata } from "next";
import "../mdx.css";
import "./style.css";

export const metadata: Metadata = {
    title: "Posgraduate Redesign Case - Tadeu Garcia"
};

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <motion.a
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: [-20, 0] }}
            transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
            href="/re-enrollment" className="fixed left-[40px] btn-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m276.85-460 231.69 231.69L480-200 200-480l280-280 28.54 28.31L276.85-500H760v40H276.85Z"/></svg>
                Previous case
            </motion.a>
            {children}
            <footer>
                <motion.h2
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: [20, 0] }}
                    transition={{ delay: .2, duration: 0.4, ease: "easeOut" }}>
                    Thank you for your time
                </motion.h2>
                <p className="flex space-x-2">
                    <motion.span
                        viewport={{ once: true }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: [20, 0] }}
                        transition={{ delay: .5, duration: 0.4, ease: "easeOut" }}>
                        Return to
                    </motion.span>
                    <motion.a         
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [-8, 0] }}
                    transition={{ delay: 1, duration: 0.4, ease: "easeIn" }}
                    href="/" className="btn-link">
                        portfolio overview
                    </motion.a>
                </p>
            </footer>
        </main>
    )
}