import type { DiffLine, Plan, Step } from '~/types'

export const FEATURES = [
  'Pull Requests automáticos',
  'Análise com IA',
  'GitHub integrado',
  'Correções automáticas',
]

export const HERO_DIFF: DiffLine[] = [
  { type: 'neutral', text: 'try:' },
  { type: 'del', text: '-    cep_response = requests.get(f"https://viacep.com.br/{cep}/json/")' },
  { type: 'del', text: '-    dados = cep_response.json()' },
  { type: 'del', text: '-    if dados.get("erro"):' },
  { type: 'del', text: '-        print("Erro! CEP Inexistente.")' },
  { type: 'add', text: '+def consultar_cep(cep: str) -> dict | None:' },
  { type: 'add', text: '+    """Consulta CEP via ViaCEP com validação e tratamento de erro."""' },
  { type: 'add', text: '+    if not isinstance(cep, str) or not cep.isdigit() or len(cep) != 8:' },
  { type: 'add', text: '+        print(f"CEP \'{cep}\' inválido. Use 8 dígitos numéricos.")' },
  { type: 'add', text: '+        return None' },
  {
    type: 'add',
    text: '+    cep_response = requests.get(f"https://viacep.com.br/ws/{cep}/json/")',
  },
  { type: 'add', text: '+    cep_response.raise_for_status()' },
  { type: 'add', text: '+    dados = cep_response.json()' },
  { type: 'add', text: '+    if dados.get("erro"):' },
  { type: 'add', text: '+        print(f"CEP \'{cep}\' não encontrado.")' },
  { type: 'add', text: '+        return None' },
  { type: 'add', text: '+    return dados' },
]

export const STATS = [
  { value: '5min', label: 'até o primeiro fix' },
  { value: '0', label: 'linhas de config' },
  { value: '12+', label: 'linguagens suportadas' },
]

export const STEPS: Step[] = [
  {
    num: '01',
    title: 'Instala o GitHub App',
    description:
      'Um clique. Sem YAML, sem CI, sem configuração. Você escolhe quais repositórios conectar.',
    time: '→ < 2 minutos',
  },
  {
    num: '02',
    title: 'Scan automático do repositório',
    description:
      'Analisa histórico de commits, detecta padrões do seu stack e identifica problemas por severidade.',
    time: '→ < 3 minutos',
  },
  {
    num: '03',
    title: 'Fix automático com explicação',
    description:
      'Para cada problema, gera o fix + uma explicação curta do porquê. Abre PR automaticamente ou commita direto.',
    time: '→ PR aberto em segundos',
  },
  {
    num: '04',
    title: 'Dashboard de time',
    description:
      'Visualize quais erros se repetem, por repositório e por dev. CTO e tech lead têm visibilidade real da saúde do código.',
    time: '→ dados em tempo real',
  },
]

export const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: '$0',
    period: 'para sempre',
    features: [
      { label: '1 repositório', highlight: true },
      { label: 'Fixes ilimitados', highlight: true },
      { label: 'Dashboard básico' },
      { label: 'Suporte por email' },
    ],
    cta: 'Começar grátis',
    to: '/onboarding',
  },
  {
    name: 'Team',
    price: '$49',
    period: 'por mês',
    features: [
      { label: 'Repos ilimitados', highlight: true },
      { label: 'Dashboard de time completo', highlight: true },
      { label: 'PR automático', highlight: true },
      { label: 'Alertas por Slack', highlight: true },
      { label: 'Até 30 devs' },
    ],
    cta: 'Começar trial de 14 dias',
    featured: true,
    locked: true,
  },
  {
    name: 'Scale',
    price: '$149',
    period: 'por mês',
    features: [
      { label: 'Tudo do Team', highlight: true },
      { label: 'Regras customizadas', highlight: true },
      { label: 'SSO / SAML', highlight: true },
      { label: 'Devs ilimitados' },
      { label: 'SLA + suporte dedicado' },
    ],
    cta: 'Falar com vendas',
    locked: true,
  },
]
