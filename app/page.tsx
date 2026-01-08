import { RichTextEditorDemo } from '@/registry/basic/components/rich-text-editor'
import { BlockDisplay } from 'components/block-display'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col w-full items-center ">
            <section id="basic-editor" className="w-full container py-12 scroll-mt-10">
                <BlockDisplay name="basic" component={<RichTextEditorDemo className="w-full" />} />
            </section>
        </main>
    )
}
