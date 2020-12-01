import React from 'react'
import Prism from 'prismjs'
import styled from 'styled-components'
import { prismjsStyles } from 'src/assets/styles/prismjsStyles'

type Props = {
  className?: string
  language: string
}

const Code: React.FC<Props> = (props) => {
  const language = props.language === 'TypeScript' ? 'tsx' : props.language
  const grammar: Prism.Grammar =
    Prism.languages[language.toLowerCase()] || Prism.languages.tsx

  React.useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className={props.className}>
      <pre>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(String(props.children), grammar, language)
          }}
        />
      </pre>
    </div>
  )
}

export default styled(Code)`
  ${prismjsStyles}
`
