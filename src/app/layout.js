import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ClientProviders from "@/providers/ClientProviders"
import { ThemeProvider } from "@/context/ThemeContext"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white">
           <ThemeProvider>
           <ClientProviders>
          <Navbar />
          <main className="min-h-[calc(100vh-300px)]">{children}</main>
          <Footer />
        </ClientProviders>
           </ThemeProvider>
       
      </body>
    </html>
  )
}
