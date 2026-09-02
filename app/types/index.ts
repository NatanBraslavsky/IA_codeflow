export type Severity = 'high' | 'med' | 'low'

export type DiffLineType = 'add' | 'del' | 'neutral'

export interface DiffLine {
  type: DiffLineType
  text: string
}

export interface Issue {
  id: number
  severity: Severity
  title: string
  file: string
  line?: number
  language?: string
  description?: string
}

export interface Repo {
  id: number
  icon: string
  name: string
  language: string
  commits: number
  updatedAt: string
}

export interface Step {
  num: string
  title: string
  description: string
  time: string
}

export interface Plan {
  name: string
  price: string
  period: string
  features: { label: string; highlight?: boolean }[]
  cta: string
  featured?: boolean
  locked?: boolean
  to?: string
}

export interface Metric {
  label: string
  value: string
  delta: string
  tone?: 'high' | 'ok' | 'accent' | 'dim'
  deltaTone?: 'up' | 'down' | 'dim'
}

export interface BarRow {
  label: string
  value: number
  percent: number
  tone?: 'accent' | 'low' | 'med' | 'faint' | 'high'
}

export interface Activity {
  id: number
  tone: 'ok' | 'accent' | 'low' | 'med'
  text: string
  time: string
}

export interface ScanLine {
  tone: 'trace' | 'ok' | 'warn'
  text: string
}

export type IconName =
  | 'arrow-right'
  | 'check'
  | 'clock'
  | 'github'
  | 'grid'
  | 'plug'
  | 'pull-request'
  | 'settings'
  | 'sparkle'
  | 'upload'
  | 'user'
  | 'users'
  | 'x'
