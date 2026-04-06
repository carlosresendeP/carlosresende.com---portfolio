import { IconType } from "react-icons"

export interface FooterLink {
  name: string
  href: string
}

export interface SocialLink {
  icon: IconType
  href: string
  label: string
}
