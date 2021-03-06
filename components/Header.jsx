import { useState, useEffect } from 'react'
import { useMedia } from 'react-use'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import cn from 'classnames'
import { timeline } from 'motion'

function NavItem({ href, text }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive ? 'font-semibold text-gray-800 dark:text-gray-200' : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden rounded-lg p-1 transition-all hover:bg-gray-200 mr-4 dark:hover:bg-gray-800 sm:px-3 sm:py-2 md:inline-block ml-[-0.60rem]'
        )}>
        <span className="capsize">{text}</span>
      </a>
    </Link>
  )
}

function MobileNav({ href, text }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive ? 'font-semibold text-gray-800 dark:text-gray-200' : 'font-normal text-gray-600 dark:text-gray-400',
          'md:hidden inline-block mr-4'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  )
}

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // After mounting, we have access to the theme.
  useEffect(() => setMounted(true), [])

  // Current system prefers color scheme.
  const prefersColorScheme = useMedia('(prefers-color-scheme: dark)', false) ? 'dark' : 'light'

  // Switch theme between light and dark.
  const setSystemTheme = async () => {
    if (document.getElementById('theme-switcher')) {
      return
    }

    // Lock body scrolling while changing theme.
    document.body.classList.add('lock-on-theme-switching')

    // Create an animated theming element, and append it to the switcher button.
    const themeButton = document.getElementById('theme-button')
    const themeSwitcher = document.createElement('div')

    await themeButton.appendChild(themeSwitcher)

    // Animation timeline.
    const startingAnimation = [['#theme-switcher', { height: '100vh', width: '100vw' }, { duration: 0.5 }]]
    const actingAnimation = [['#theme-switcher', { opacity: 0 }, { duration: 0.5 }]]

    timeline(startingAnimation).finished.then(() => {
      if (mounted) {
        if (prefersColorScheme === 'dark') {
          resolvedTheme === prefersColorScheme ? setTheme('light') : setTheme('system')
        } else {
          resolvedTheme === prefersColorScheme ? setTheme('dark') : setTheme('system')
        }

        timeline(actingAnimation).finished.then(() => {
          // After animation ends, remove the animated theming element from the switcher button.
          themeButton.removeChild(themeSwitcher)

          // Unlock body scrolling while changing theme.
          document.body.classList.remove('lock-on-theme-switching')
        })
      }
    })
  }

  return (
    <div className="flex flex-col justify-center px-8">
      <nav className="relative mx-auto flex w-full max-w-2xl items-center justify-between border-gray-200 pt-8 pb-8 text-gray-900 dark:border-gray-700  dark:text-gray-100 sm:pb-16">
        <div>
          <NavItem href="/" text="Home" />
          <NavItem href="/blog" text="Blog" />
          {/* <NavItem href="/resume" text="Resume" /> */}
          <MobileNav href="/" text="Home" />
          <MobileNav href="/blog" text="Blog" />
        </div>
        <button
          id="theme-button"
          type="button"
          className="relative z-50 flex h-9 w-9 appearance-none items-center justify-center rounded-lg border-none bg-gray-200 ring-gray-300 transition-all hover:ring-2 focus:outline-none focus:ring-2 dark:bg-gray-600"
          onClick={() => setSystemTheme()}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-5 w-5 text-gray-800 dark:text-gray-200"
            >
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </nav>
    </div>
  )
}
