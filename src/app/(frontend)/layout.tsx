import React from 'react'
import './styles.css'

export const metadata = {
  description: 'Admintration of FJU',
  title: 'FJU - Administration',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
