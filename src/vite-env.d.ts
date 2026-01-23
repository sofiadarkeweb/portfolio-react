/// <reference types="vite/client" />

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}

declare module 'aos' {
  interface AosOptions {
    duration?: number
    once?: boolean
    offset?: number
    delay?: number
    easing?: string
  }
  
  const Aos: {
    init: (options?: AosOptions) => void
    refresh: () => void
  }
  
  export default Aos
}
