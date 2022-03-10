import { Giscus } from '@giscus/react'
import { useTheme } from 'next-themes'

export default function Comment() {
  const { resolvedTheme } = useTheme()
  const currentTheme =  resolvedTheme === 'dark' ? 'transparent_dark' : 'light'


  return (
    <Giscus
      repo="yapkhaichuen/khaichuen"
      repoId="R_kgDOG-Do6Q"
      category="General"
      categoryId="DIC_kwDOG-Do6c4COA2p"
      mapping="pathname"
      term="Giscus Blog"
      inputPosition="top"
      reactionsEnabled="1"
      emitMetadata="0"
      theme={currentTheme}
    />
  )
}
