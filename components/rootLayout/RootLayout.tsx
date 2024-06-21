import React from 'react'
import {ThemeProvider } from '@/components/theme/ThemeProvider'; 

interface RootLayoutProps {
    children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <>
          <html lang="en" suppressHydrationWarning>
            <head />
            <body>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </body>
          </html>
        </>
      )
    }

export default RootLayout
