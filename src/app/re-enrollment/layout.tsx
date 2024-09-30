import * as motion from "framer-motion/client";
import type { Metadata } from "next";
import "../mdx.css";
import "./style.css";

export const metadata: Metadata = {
    title: "Tadeu Garcia - Re-enrollment Case"
};

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <motion.a         
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: [-20, 0] }}
                transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
                href="/" className="fixed left-[40px] btn-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m276.85-460 231.69 231.69L480-200 200-480l280-280 28.54 28.31L276.85-500H760v40H276.85Z"/></svg>
                Portfolio overview
            </motion.a>
            <motion.a         
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: [20, 0] }}
                transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
                href="/posgraduate" className="fixed right-[40px] btn-link">
                Next case
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M683.15-460H200v-40h483.15L451.46-731.69 480-760l280 280-280 280-28.54-28.31L683.15-460Z"/></svg>
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
                        Proceed to the
                    </motion.span>
                    <motion.a         
                        viewport={{ once: true }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, x: [-8, 0] }}
                        transition={{ delay: 1, duration: 0.4, ease: "easeIn" }}
                        href="/posgraduate" className="btn-link">
                        next case
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M683.15-460H200v-40h483.15L451.46-731.69 480-760l280 280-280 280-28.54-28.31L683.15-460Z"/></svg>
                    </motion.a>
                </p>
            </footer>
        </main>
    )
}