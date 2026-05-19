import Providers from "./providers";
import "./globals.css";

export const metadata = {
  title: "Ctasis",
  description: "Multichannel seller tooling",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}