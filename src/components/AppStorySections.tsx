import { useEffect, useRef, useState } from 'react'
import { getTranslations, type Locale } from '../i18n'

/**
 * The feature story on the home page: one tab per capability, each
 * explaining exactly one thing and showing it.
 *
 * Six stacked bands made the page very long for content most visitors
 * only skim, so the sections share one stage and the reader picks.
 * Every panel stays in the DOM and is hidden rather than unmounted:
 * the copy remains crawlable, and a tab that has been opened once does
 * not reload its image.
 *
 * The imagery comes from the app repo's screenshot pipeline
 * (`store_assets`, `npm run web && npm run export-web`) and lands in
 * `public/app/<locale>/<id>.webp`. Screenshots are localised, hence the
 * locale in the path — a German visitor must not see a French score
 * sheet. The images carry no background of their own: the stage
 * supplies one constant lighter grey, so switching tabs changes the
 * content and nothing else.
 */

// Ablauf leads: it is the only tab that shows the whole path from
// setup to record in one picture, which is the fastest way to
// understand what the app is before reading a single word. Keep this
// in step with `webSections` in the app repo's config/web.ts.
const SECTION_IDS = ['summary', 'modes', 'rules', 'stats', 'mirror'] as const

type SectionId = (typeof SECTION_IDS)[number]

export function AppStorySections({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).appStory
  const [active, setActive] = useState<SectionId>(SECTION_IDS[0])
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const sectionRef = useRef<HTMLElement | null>(null)

  // The tabs advance on their own until the reader takes over. It is
  // the honest answer to "does anyone notice these are clickable": one
  // rotation shows the panel changing and the underline moving, and
  // from the first click or key press it never moves again.
  const [autoplay, setAutoplay] = useState(true)
  const [inView, setInView] = useState(false)
  const [hovered, setHovered] = useState(false)

  // The pictures are compositions of tilted devices, so letting them
  // lean towards the pointer keeps that language going. Kept small on
  // purpose: past a few degrees a flat image stops reading as an object
  // and starts reading as a tilted photograph.
  const [lean, setLean] = useState('')

  function onImageMove(event: React.MouseEvent<HTMLDivElement>) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Measure the untransformed host, never the image: the image sits
    // inside the element being tilted, so reading its own rect would
    // feed the tilt back into its input.
    const host = event.currentTarget.querySelector('[data-picture]')
    if (!host) return
    const box = host.getBoundingClientRect()
    const x = (event.clientX - box.left) / box.width - 0.5
    const y = (event.clientY - box.top) / box.height - 0.5
    setLean(
      `perspective(1400px) rotateY(${(x * 7).toFixed(2)}deg) ` +
        `rotateX(${(-y * 5).toFixed(2)}deg) scale(1.025)`
    )
  }

  function pick(id: SectionId) {
    setActive(id)
    setAutoplay(false)
  }

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!autoplay || !inView || hovered) return
    // Nothing should move for a reader who asked for stillness.
    const still = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (still.matches) return
    const timer = window.setInterval(() => {
      setActive((current) => {
        const next = (SECTION_IDS.indexOf(current) + 1) % SECTION_IDS.length
        return SECTION_IDS[next]
      })
    }, 6000)
    return () => window.clearInterval(timer)
  }, [autoplay, inView, hovered])

  const activeIndex = SECTION_IDS.indexOf(active)

  // Left and right walk the tabs, Home and End jump to the ends. A
  // tablist that only responds to clicks is a keyboard trap for anyone
  // arrowing through it.
  function onKeyDown(event: React.KeyboardEvent) {
    const delta =
      event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
    let next = -1
    if (delta !== 0) {
      next = (activeIndex + delta + SECTION_IDS.length) % SECTION_IDS.length
    } else if (event.key === 'Home') {
      next = 0
    } else if (event.key === 'End') {
      next = SECTION_IDS.length - 1
    }
    if (next === -1) return
    event.preventDefault()
    pick(SECTION_IDS[next])
    tabRefs.current[next]?.focus()
  }

  return (
    <section
      ref={sectionRef}
      id="app-story"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full border-t border-zinc-800 bg-zinc-900"
    >
      <div className="container px-4 md:px-6 mx-auto py-12 md:py-20">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-block rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400 border border-emerald-500/20">
            {t.badge}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {t.title} <span className="text-emerald-400">{t.titleAccent}</span>
          </h2>
          <p className="max-w-[42rem] text-zinc-400 md:text-lg">
            {t.description}
          </p>
        </div>

        {/* The tab row scrolls sideways on a narrow screen: six labels
            do not fit at 390px, and wrapping them into two rows makes
            the underline read as a heading rule instead of a tab. */}
        <div
          role="tablist"
          aria-label={t.badge}
          onKeyDown={onKeyDown}
          className="mt-10 md:mt-14 flex gap-6 md:gap-10 overflow-x-auto border-b border-zinc-800 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center scrollbar-none"
        >
          {SECTION_IDS.map((id, i) => {
            const selected = id === active
            return (
              <button
                key={id}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
                role="tab"
                type="button"
                id={`story-tab-${id}`}
                aria-selected={selected}
                aria-controls={`story-panel-${id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => pick(id)}
                className={`relative shrink-0 whitespace-nowrap pb-3 -mb-px border-b-2 text-base md:text-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-sm ${
                  selected
                    ? 'border-emerald-400 text-zinc-50 font-semibold'
                    : 'border-transparent text-zinc-500 hover:text-zinc-200 hover:border-zinc-600'
                }`}
              >
                {t.sections[id].tab}
                {selected && autoplay && (
                  <span
                    key={id}
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-emerald-400 motion-safe:animate-[storyTab_6s_linear] motion-reduce:hidden"
                  />
                )}
              </button>
            )
          })}
        </div>

        {SECTION_IDS.map((id) => {
          const item = t.sections[id]
          return (
            <div
              key={id}
              role="tabpanel"
              id={`story-panel-${id}`}
              aria-labelledby={`story-tab-${id}`}
              hidden={id !== active}
            >
              {/* min-height keeps the stage from jumping as the reader
                  moves between a short panel and a long one. */}
              <div
                key={`${id}-${active}`}
                onMouseMove={onImageMove}
                onMouseLeave={() => setLean('')}
                className="grid gap-8 md:gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center pt-10 md:pt-14 md:min-h-[26rem] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-500"
              >
                <div data-picture>
                  <div
                    style={{ transform: lean || undefined }}
                    className="transition-transform duration-300 ease-out will-change-transform"
                  >
                    <img
                      src={`/app/${lang}/${id}.webp`}
                      alt={item.imageAlt}
                      width={2400}
                      height={1360}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-emerald-400/80 font-medium">
                    {item.kicker}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{item.body}</p>
                  <ul className="flex flex-wrap gap-2 pt-1">
                    {item.proof.map((chip) => (
                      <li
                        key={chip}
                        className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100"
                      >
                        {chip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
