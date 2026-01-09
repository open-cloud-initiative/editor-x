import { siteConfig } from '@/config/site'
import Link from 'next/link'

export function SiteFooter() {
    return (
        <footer className="border-t border-border/40 py-6 dark:border-border md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    From{' '}
                    <a
                        href={siteConfig.authorUrl}
                        className="font-medium underline underline-offset-4"
                        rel="noreferrer"
                        target="_blank"
                    >
                        {siteConfig.author}
                    </a>{' '}
                    Inspired by{' '}
                    <a
                        className="font-medium underline underline-offset-4"
                        href="https://ui.shadcn.com"
                        rel="noreferrer"
                        target="_blank"
                    >
                        ShadCN UI Website
                    </a>{' '}
                    . The source code is available on{' '}
                    <Link
                        href={siteConfig.links.github}
                        rel="noreferrer"
                        target="_blank"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </Link>
                    .
                </p>
            </div>
        </footer>
    )
}
