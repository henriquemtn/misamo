import Sidebar from "@/components/sidebar"
import { Metadata } from "next"

export const metadata: Metadata = {
    title:
        "Misamo - Beautiful UI components built with Tailwind CSS and React",
    description:
        "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <main className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
            <Sidebar />
            {children}
        </main>
    )
}
