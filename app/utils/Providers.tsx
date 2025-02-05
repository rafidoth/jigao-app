import { ThemeProvider } from 'next-themes'

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider
    storageKey='theme'
    attribute="class"
    enableSystem={false}
    defaultTheme="system"
  >{children}</ThemeProvider>
}
