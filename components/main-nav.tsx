'use client'

import { Button } from '@/components/ui/button'
import { navConfig } from '@/config/site'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MainNav() {
    const pathname = usePathname()

    return (
        <div className="mr-4 hidden items-center space-x-6 md:flex">
            <nav className="flex items-center gap-4 text-sm xl:gap-6">
                {navConfig.mainNav.map((item, idx) => (
                    <Button key={idx} variant="ghost">
                        <Link key={item.path} href={item.path}>
                            {item.title}
                        </Link>
                    </Button>
                ))}
            </nav>
        </div>
    )
}
