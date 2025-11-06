"use client"

export default function Footer() {
  return (
    <footer
      className="relative z-10 pt-8 pb-14 px-6 md:px-8"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 56px)" }}
    >
      {/* Soft gradient separator instead of a hard border */}
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/60 text-sm">© 2025 EMOV. Todos os direitos reservados.</div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/emov_oficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
