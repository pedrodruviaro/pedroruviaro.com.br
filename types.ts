declare global {
  interface Window {
    cronitor?: any
  }
}

export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl: string
}
