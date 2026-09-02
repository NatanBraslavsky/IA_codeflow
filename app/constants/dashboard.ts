import type { Activity, BarRow, DiffLine, IconName, Issue, Metric } from '~/types'

export const SIDEBAR_GROUPS: {
  label: string
  items: { label: string; icon: IconName; active?: boolean }[]
}[] = [
  {
    label: 'visão geral',
    items: [
      { label: 'Dashboard', icon: 'grid', active: true },
      { label: 'Issues', icon: 'clock' },
      { label: 'Pull Requests', icon: 'pull-request' },
      { label: 'Time', icon: 'users' },
    ],
  },
  {
    label: 'configurações',
    items: [
      { label: 'Regras', icon: 'settings' },
      { label: 'Integrações', icon: 'plug' },
    ],
  },
]

export const METRICS: Metric[] = [
  { label: 'issues abertas', value: '8', delta: '↑ 3 novas hoje', tone: 'high', deltaTone: 'down' },
  { label: 'fixes aplicados', value: '24', delta: '↑ 6 essa semana', tone: 'ok', deltaTone: 'up' },
  { label: 'PRs abertos', value: '3', delta: 'aguardando review', deltaTone: 'dim' },
  {
    label: 'score do código',
    value: '74',
    delta: '↑ +8 vs semana passada',
    tone: 'accent',
    deltaTone: 'up',
  },
]

export const OPEN_ISSUES: Issue[] = [
  {
    id: 1,
    severity: 'high',
    title: 'Variável não definida no escopo',
    file: 'visualizer.py',
    line: 4,
    language: 'Python',
  },
  {
    id: 2,
    severity: 'high',
    title: 'HTTP error não tratado',
    file: 'api/client.py',
    line: 31,
    language: 'Python',
  },
  {
    id: 3,
    severity: 'med',
    title: 'Sem validação de input',
    file: 'routes/user.py',
    line: 18,
    language: 'Python',
  },
  {
    id: 4,
    severity: 'med',
    title: 'SQL query sem parametrização',
    file: 'db/queries.py',
    line: 55,
    language: 'Python',
  },
  {
    id: 5,
    severity: 'low',
    title: 'Função com 80+ linhas',
    file: 'services/payment.py',
    line: 12,
    language: 'Python',
  },
]

export const AI_PULL_REQUEST: Issue = {
  id: 42,
  severity: 'high',
  title: 'Fix: HTTP error não tratado',
  file: 'api/client.py',
  line: 42,
  description: 'A IA detectou ausência de raise_for_status().',
}

export const RECURRING_ERRORS: BarRow[] = [
  { label: 'Sem tratamento', value: 14, percent: 78, tone: 'accent' },
  { label: 'Sem tipagem', value: 10, percent: 55, tone: 'low' },
  { label: 'Código duplicado', value: 8, percent: 44, tone: 'med' },
  { label: 'Funções longas', value: 6, percent: 33, tone: 'faint' },
  { label: 'Sem validação', value: 4, percent: 22, tone: 'high' },
]

export const ISSUES_BY_DEV: BarRow[] = [
  { label: 'Pedro', value: 12, percent: 80, tone: 'accent' },
  { label: 'Ana', value: 8, percent: 53, tone: 'low' },
  { label: 'Carlos', value: 6, percent: 40, tone: 'med' },
  { label: 'Mariana', value: 3, percent: 20, tone: 'faint' },
]

export const ACTIVITIES: Activity[] = [
  {
    id: 1,
    tone: 'ok',
    text: 'PR <strong>#47</strong> com fix de HTTP errors mergeado por <strong>Ana</strong>',
    time: 'há 12 min',
  },
  {
    id: 2,
    tone: 'accent',
    text: '<strong>3 novos issues</strong> detectados no push de <strong>Pedro</strong>',
    time: 'há 2h',
  },
  {
    id: 3,
    tone: 'low',
    text: 'Scan completo: <strong>api-core</strong> analisado, 8 issues encontradas',
    time: 'há 2h',
  },
  {
    id: 4,
    tone: 'ok',
    text: 'PR <strong>#45</strong> com fix de SQL injection mergeado',
    time: 'ontem',
  },
  {
    id: 5,
    tone: 'med',
    text: 'PR <strong>#44</strong> aguarda review de <strong>Carlos</strong>',
    time: 'ontem',
  },
]

export const FIX_DIFF: DiffLine[] = [
  { type: 'del', text: '-  cep_response = requests.get(f"https://viacep.com.br/{cep}/json/")' },
  { type: 'del', text: '-  dados = cep_response.json()' },
  { type: 'del', text: '-  if dados.get("erro"):' },
  { type: 'del', text: '-      print("Erro! CEP Inexistente.")' },
  { type: 'add', text: '+def consultar_cep(cep: str) -> dict | None:' },
  { type: 'add', text: '+    if not isinstance(cep, str) or not cep.isdigit() or len(cep) != 8:' },
  { type: 'add', text: '+        return None' },
  { type: 'add', text: '+    r = requests.get(f"https://viacep.com.br/ws/{cep}/json/")' },
  { type: 'add', text: '+    r.raise_for_status()' },
  { type: 'add', text: '+    dados = r.json()' },
  { type: 'add', text: '+    return None if dados.get("erro") else dados' },
]

export const FIX_EXPLANATION =
  'A variável `cep` não estava definida no escopo do bloco try. Encapsulamos em uma função com tipagem explícita, validação de formato (8 dígitos numéricos) e tratamento de HTTP errors via raise_for_status(). O código agora é reutilizável e testável.'
