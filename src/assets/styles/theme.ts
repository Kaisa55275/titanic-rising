export const normal = {
  name: 'NORMAL',
  color: {
    main: '#ffffff',
    text: '#0d2930',
    gray: '#5e5e5e'
  },
  shadow: {
    main: '0px 2px 8px rgba(0, 0, 0, 0.2)'
  }
} as const

export const dark = {
  name: 'DARK',
  color: {
    main: '#111111',
    text: '#ffffff',
    gray: '#e5e5e5'
  },
  shadow: {
    main: '0px 2px 8px rgba(255, 255, 255, 0.2)'
  }
} as const
