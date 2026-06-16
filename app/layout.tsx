import "./globals.css"

export const metadata = {
  metadataBase: new URL("https://www.niklasritz.de"),
  title: "Niklas Ritz Webdesign",
  description:
    "Moderne Websites für lokale Unternehmen in Karlsruhe und Umgebung — schnell, hochwertig und auf Kundenanfragen ausgelegt.",
  alternates: {
    canonical: "https://www.niklasritz.de",
  },
  openGraph: {
    title: "Niklas Ritz Webdesign",
    description:
      "Moderne Websites für lokale Unternehmen in Karlsruhe und Umgebung.",
    url: "https://www.niklasritz.de",
    siteName: "Niklas Ritz Webdesign",
    type: "website",
    locale: "de_DE",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}