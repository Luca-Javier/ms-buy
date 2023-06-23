import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>MS BUY 2</title>
      <meta title="description" content="Ecommerce" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon.png" />
      <body style={{ margin: 0 }} className={inter.className}>
        {children}
      </body>
    </html>
  )
}
