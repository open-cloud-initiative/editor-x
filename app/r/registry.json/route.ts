import { getPackage } from '@/lib/package'
import { type NextRequest, NextResponse } from 'next/server'
import type { Registry } from 'shadcn/schema'

export const dynamic = 'force-static'

export const GET = async (_: NextRequest) => {
    const response: Registry = {
        name: 'Editor X',
        homepage: 'https://open-cloud-initiative.github.io/editor-x',
        items: [],
    }

    try {
        const pkg = await getPackage('editor-x')
        response.items.push(pkg)
    } catch (err) {
        // skip packages that fail
    }

    return NextResponse.json(response)
}
