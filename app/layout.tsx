import Link from "next/link";
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="flex h-16 bg-yellow-300">
          <form action="/items" className="m-auto px-4 gap-4 flex max-w-screen-lg flex-1">
            <Link href="/" className="text-yellow-900">MercaLibre</Link>
            <input className="h-8 flex-1 px-2 text-slate-700" type="text" name="search" placeholder="Search" />
            <button className="h-8 bg-gray-300 px-2 py-1 text-slate-700" type="submit">Search</button>
          </form>
        </header>
        <main className="m-auto max-w-screen-lg p-4">{children}</main>
      </body>
    </html>
  )
}
