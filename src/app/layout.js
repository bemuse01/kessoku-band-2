import { Oxanium } from 'next/font/google'
import './globals.css'

const oxanium = Oxanium({
    weight: '500',
    variable: '--font-open-sans',
    subsets: ['latin']
})

export const metadata = {
    title: 'Kessoku Band',
    description: 'Kessoku Band Player',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body
                className={`${oxanium.className} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
