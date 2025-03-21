import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { ThemeProvider } from "./components/layouts/theme-provider";
import "./globals.css";
import { Box, Container, Theme } from "@radix-ui/themes";
import { getFontClassName } from "./fonts/options";

export const metadata: Metadata = {
  title: "Home",
  description: "Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const messages = await getMessages();
  const locale = await getLocale();
  const fontClass = await getFontClassName();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${fontClass} antialiased`}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <Theme>
            <NextIntlClientProvider messages={messages}>
              <Box className={`${fontClass}`}>
                <Container size='4' className="p-4 lg:p-0">
                  {children}
                </Container>
              </Box>
            </NextIntlClientProvider>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
