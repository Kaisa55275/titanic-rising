/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ReactElement, Suspense, createElement, forwardRef } from "react"
import { lowlight as low } from "lowlight/lib/common.js"
import { Options, Span, Text } from "lowlight/lib/core.js"
import { MDXRemote } from "next-mdx-remote/rsc"
import { BookMark } from "src/app/blog/[post]/_components/bookmark"
import { MusicLink } from "./music-link"

type Child = Span | Text

const isSpan = (child: Child): child is Span => {
  return (child as Span).tagName !== undefined
}

const isText = (child: Child): child is Text => {
  return (child as Text).value !== undefined
}

function mapChild(child: Child, i: number, depth: number): ReactElement | string {
  if (isSpan(child)) {
    if (child.tagName) {
      const props = Object.assign({ key: "lo-" + depth + "-" + i }, child.properties)
      const children = child.children ? child.children.map(mapWithDepth(depth + 1)) : null

      return createElement(child.tagName, props, children)
    }
  }

  if (isText(child)) {
    return child.value
  }

  return ""
}

const mapWithDepth = (depth: number) => {
  const mapChildrenWithDepth = (child: Child, i: number) => {
    return mapChild(child, i, depth)
  }

  return mapChildrenWithDepth
}

export const MDXRenderer = ({ source }: { source: string }) => {
  const Lowlight = forwardRef(
    (
      props: {
        value: string
        language: string
        inline: boolean
        className?: string
        lowOptions?: Options
      } = {
        className: "lowlight",
        inline: false,
        value: "",
        language: "markdown",
        lowOptions: {},
      },
      ref
    ) => {
      if (process.env.NODE_ENV !== "production") {
        if (!props.language && low.listLanguages().length === 0) {
          console.warn(
            "No language definitions seems to be registered, " +
              "did you forget to call `Lowlight.registerLanguage`?"
          )
        }
      }

      const result = props.language
        ? low.highlight(props.language, props.value, props.lowOptions)
        : low.highlightAuto(props.value, props.lowOptions)

      const ast = result.children

      const value = ast.length === 0 ? props.value : ast.map(mapWithDepth(0))

      const codeProps = {
        className: "hljs",
        style: {},
        ref: null,
      }

      const preProps = {
        ref,
        className: props.className,
      }

      if (result.data.language) {
        codeProps.className += " " + result.data.language
      }

      if (props.inline) {
        codeProps.style = { display: "inline" }
      }

      const code = createElement("code", codeProps, value)
      return props.inline ? code : createElement("pre", preProps, code)
    }
  )

  return (
    <MDXRemote
      source={source}
      components={{
        // @ts-expect-error なんかエラーになる
        MusicLink,
        a: (props) => {
          const PlaneAnchor = () => {
            return (
              <a {...props} target="_blank" rel="noopener noreferrer" className="plane-anchor" />
            )
          }
          if (typeof props.children === "string" && props.children.includes("!!BOOKMARK!!")) {
            return (
              <Suspense fallback={<PlaneAnchor />}>
                <BookMark
                  href={props.href || ""}
                  title={props.title?.replace("!!BOOKMARK!!", "")}
                />
              </Suspense>
            )
          }

          return <PlaneAnchor />
        },
        code: (props) => {
          const language = props.className?.replace("language-", "")

          if (language === "planetext") {
            return <code className="hljs">{props.children}</code>
          }

          return (
            <Lowlight
              language={language || "markdown"}
              value={`${props.children}`}
              className="llt"
              inline={false}
            />
          )
        },
      }}
    />
  )
}
