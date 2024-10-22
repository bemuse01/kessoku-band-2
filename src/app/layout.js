import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
    weight: '300',
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
                className={`${openSans.className} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
