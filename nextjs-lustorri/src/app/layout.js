import '@/styles/globals.css'

export const metadata = {
  title: 'Lustorri | Jewelry for the moments you never forget',
  description: 'Luxury couples jewelry brand. Minimal designs, deep stories, sensual elegance. Each ring holds a story.',
  keywords: 'luxury jewelry, couples rings, diamond rings, engagement rings, love jewelry',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
