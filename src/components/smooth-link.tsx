"use client"

import type { AnchorHTMLAttributes, FC, MouseEvent, ReactNode } from "react"

interface SmoothLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export const SmoothLink: FC<SmoothLinkProps> = ({ href, children, ...props }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (href && href.startsWith("#")) {
      e.preventDefault()
      const targetElement = document.querySelector(href)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return <a href={href} onClick={handleClick} {...props}>{children}</a>
}