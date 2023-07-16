import './globals.css'

export const metadata = {
  title: 'SteerData | Data Engineering Experts',
  description: 'SteerData is a premium data engineering consulting firm that helps you build scalable and cost-efficient solutions to solve your complex data problems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
