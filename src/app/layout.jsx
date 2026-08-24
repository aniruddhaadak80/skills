import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://aniruddha-skills-directory.vercel.app"),
  title: {
    default: "Agent Skills Directory — Installable AI Skills for Every Profession",
    template: "%s · Agent Skills Directory",
  },
  description:
    "Hundreds of production-grade AI agent skills for engineers, PMs, EMs, HR, lawyers, biotech & pharma professionals, scientists, AI engineers and more. Install any skill with one command: npx skills add aniruddhaadak80/skills",
  keywords: [
    "agent skills", "AI agents", "skills.sh", "SKILL.md", "claude code skills",
    "opencode skills", "cursor skills", "codex skills", "llm tools", "prompt library",
    "ai engineering", "developer tools", "productivity", "rag", "prompt engineering",
  ],
  authors: [{ name: "Aniruddha Adak", url: "https://github.com/aniruddhaadak80" }],
  openGraph: {
    type: "website",
    siteName: "Agent Skills Directory",
    title: "Agent Skills Directory — AI Skills for Every Profession",
    description:
      "Install production-grade agent skills in one command. Engineering, AI, product, legal, biotech, science and more.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aniruddhadak",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <div className="fixed inset-0 -z-10 grid-bg" aria-hidden />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
