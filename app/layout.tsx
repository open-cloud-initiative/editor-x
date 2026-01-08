import { siteConfig } from '@/config/site'
import { PREFERENCE_DEFAULTS } from '@/lib/preferences-config'
import { ThemeBootScript } from '@/scripts/theme-boot'
import '@/styles/globals.css'
import { SiteFooter } from 'components/site-footer'
import { SiteHeader } from 'components/site-header'
import { ThemeProvider } from 'components/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Editor X - Build Your Rich Text Editor',
    keywords: [],
    authors: [
        {
            name: siteConfig.author,
        },
    ],
    creator: siteConfig.author,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const { theme_mode, theme_preset } = PREFERENCE_DEFAULTS

    return (
        <html lang="en" className={theme_mode} data-theme-preset={theme_preset}>
            <head>
                {/* Applies theme and layout preferences on load to avoid flicker and unnecessary server rerenders. */}
                <ThemeBootScript />
            </head>
            <body className={`${inter.className} min-h-screen antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <SiteHeader />
                    {children}
                    <SiteFooter />
                </ThemeProvider>
            </body>
        </html>
    )
}
