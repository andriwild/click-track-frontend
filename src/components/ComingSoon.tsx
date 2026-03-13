import React from 'react'
import type { Locale } from '../i18n'
import { getTranslations, getLocalizedPath } from '../i18n'

interface ComingSoonProps {
  lang: Locale
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ lang }) => {
  const t = getTranslations(lang)

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] bg-zinc-950 text-zinc-50 overflow-hidden px-4">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] opacity-60 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-2xl">
        {/* Animated Icon / Illustration Placeholder */}
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
          <div className="relative bg-zinc-900 border border-zinc-800 p-6 rounded-3xl shadow-2xl">
            <svg
              className="w-16 h-16 text-emerald-400 stroke-[1.5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83m-4.23 4.23l-3.32-3.32m3.32 3.32l-1.52 1.52m1.52-1.52l1.52-1.52m-1.52 1.52L8.93 11.36m6.24-6.24l.64-.64a2.652 2.652 0 113.75 3.75l-.64.64m-3.75-3.75l-4.23 4.23m13.43 1.95L21 21M3 3l3.32 3.32M9 15l2.25 2.25L15 9"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase">
            {t.wip.title.split(' ')[0]}{' '}
            <span className="text-emerald-400">
              {t.wip.title.split(' ').slice(1).join(' ')}
            </span>
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl font-medium max-w-lg mx-auto leading-relaxed">
            {t.wip.message}
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <a
            href={getLocalizedPath('/', lang)}
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold transition-all hover:scale-105 h-14 px-10 text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {t.wip.backHome}
          </a>
        </div>
      </div>
    </section>
  )
}
