import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ClientProviders from "@/providers/ClientProviders"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <Navbar />
          <main className="min-h-[calc(100vh-300px)]">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
