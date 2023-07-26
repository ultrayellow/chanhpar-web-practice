import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Google OAuth practice',
    description: 'Generated by create next app',
}

let isLoginned = false;

export default function RootLayout({
    login,
    main,
}: {
    login: React.ReactNode,
    main: React.ReactNode,
}) {

    return (
        <html lang="en">
            <body className={inter.className}>
                {isLoginned ? main : login}
            </body>
        </html>
    )
}
