import { ThemeProvider } from 'next-themes'
import { ClerkProvider } from '@clerk/nextjs'
export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>
    <ClerkProvider>
      <ThemeProvider
        storageKey='theme'
        attribute="class"
        enableSystem={false}
        defaultTheme="dark"
      >{children}</ThemeProvider>
    </ClerkProvider>
  </>
}
