export const metadata = {
  title: 'Next.js App',
  description: 'Минимальное приложение на Next.js',
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}

