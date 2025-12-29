import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learnio — Modern LMS",
  description: "Learnio: beautiful, engaging learning management system landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="l-header">
          <div className="l-container">
            <a className="logo" href="#">Learnio</a>
            <nav className="nav">
              <a href="#features">Features</a>
              <a href="#courses">Courses</a>
              <a href="#pricing">Pricing</a>
            </nav>
            <div className="actions">
              <a className="btn ghost" href="#login">Log in</a>
              <a className="btn primary" href="#signup">Get started</a>
            </div>
          </div>
        </header>
        {children}
        <style>{`
          .l-header{backdrop-filter: blur(6px);position:sticky;top:0;z-index:40;background:linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3));border-bottom:1px solid rgba(0,0,0,0.04)}
          .l-container{max-width:1100px;margin:0 auto;padding:14px 20px;display:flex;align-items:center;gap:16px}
          .logo{font-weight:700;font-size:1.125rem;color:var(--foreground);text-decoration:none}
          .nav{display:flex;gap:16px;margin-left:24px}
          .nav a{color:var(--foreground);text-decoration:none;opacity:.9}
          .actions{margin-left:auto;display:flex;gap:10px}
          .btn{padding:8px 14px;border-radius:10px;text-decoration:none;font-weight:600}
          .btn.primary{background:linear-gradient(90deg,#5b6cff,#3ad0ff);color:white}
          .btn.ghost{background:transparent;border:1px solid rgba(0,0,0,0.06);color:var(--foreground)}
          @media (prefers-color-scheme: dark){
            .l-header{background:linear-gradient(180deg, rgba(8,8,8,0.6), rgba(8,8,8,0.3));border-bottom:1px solid rgba(255,255,255,0.04)}
            .nav a,.logo{color:var(--foreground)}
            .btn.ghost{border-color:rgba(255,255,255,0.08)}
          }
        `}</style>
      </body>
    </html>
  );
}
