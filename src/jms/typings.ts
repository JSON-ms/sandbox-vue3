export type JmsLocaleKey = 'en' | 'es'

export type JmsSectionKey = 'default' | 'more'

export type JmsLocaleSet<T> = {
  'en': T
  'es': T
}

export interface JmsFileMeta {
  size?: number | null
  type?: string
  width?: number | null
  height?: number | null
  timestamp?: number
  frameRate?: number
  duration?: number
  originalFileName?: string
}

export interface JmsFile {
  path: string | null
  meta: JmsFileMeta
}

export interface JmsDefaultStepsItems {
  title: JmsLocaleSet<string>
  text: JmsLocaleSet<string>
  hash: string
}

export interface JmsDefault {
  logo: JmsFile | null
  body: JmsLocaleSet<string>
  steps: JmsDefaultStepsItems[]
}

export interface JmsMore {
  title: JmsLocaleSet<string | null>
  body: JmsLocaleSet<string | null>
}

export interface JmsData {
  default: JmsDefault
  more: JmsMore
}