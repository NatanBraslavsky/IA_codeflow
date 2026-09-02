import type { Issue, Repo, ScanLine } from '~/types'

export const REPOS: Repo[] = [
  {
    id: 1,
    icon: '⚡',
    name: 'startup/api-core',
    language: 'Python',
    commits: 243,
    updatedAt: 'há 2h',
  },
  {
    id: 2,
    icon: '🌐',
    name: 'startup/web-frontend',
    language: 'TypeScript',
    commits: 891,
    updatedAt: 'há 1d',
  },
  {
    id: 3,
    icon: '🔧',
    name: 'startup/data-pipeline',
    language: 'Python',
    commits: 156,
    updatedAt: 'há 3d',
  },
]

export const SCAN_LINES: ScanLine[] = [
  { tone: 'trace', text: 'Conectando ao repositório startup/api-core...' },
  { tone: 'ok', text: '✓ Autenticação bem-sucedida' },
  { tone: 'trace', text: 'Detectando linguagem principal...' },
  { tone: 'ok', text: '✓ Python 3.11 detectado' },
  { tone: 'trace', text: 'Analisando estrutura de arquivos (47 arquivos)...' },
  { tone: 'ok', text: '✓ Frameworks: FastAPI, SQLAlchemy' },
  { tone: 'warn', text: '⚠ 3 arquivos com complexidade alta' },
  { tone: 'trace', text: 'Escaneando padrões de código...' },
  { tone: 'ok', text: '✓ Scan concluído: 243 commits analisados' },
  { tone: 'warn', text: '⚠ 8 issues encontradas — 2 críticas' },
]

export const SCAN_STATUSES = [
  'Detectando linguagens e frameworks...',
  'Analisando commits recentes...',
  'Identificando padrões problemáticos...',
  'Gerando fixes...',
]

export const SCAN_RESULTS: Issue[] = [
  {
    id: 1,
    severity: 'high',
    title: 'Variável não definida no escopo',
    file: 'visualizer.py',
    line: 4,
    description:
      'A variável `cep` é usada sem estar definida no escopo da função. Pode causar NameError em produção.',
  },
  {
    id: 2,
    severity: 'high',
    title: 'HTTP error não tratado',
    file: 'api/client.py',
    line: 31,
    description: 'requests.get() sem raise_for_status(). Erros 4xx/5xx passam silenciosamente.',
  },
  {
    id: 3,
    severity: 'med',
    title: 'Sem validação de input',
    file: 'routes/user.py',
    line: 18,
    description: 'Parâmetro `email` não validado antes de consultar o banco.',
  },
  {
    id: 4,
    severity: 'low',
    title: '+ 5 issues de clareza e manutenibilidade',
    file: 'múltiplos arquivos',
    description: 'Funções longas, falta de tipagem, código duplicado.',
  },
]
