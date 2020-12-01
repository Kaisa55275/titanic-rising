export const tags = [
  ['Tech', '#0F264D'],
  ['Poem', '#0F264D'],
  ['CSS', '#0077B6'],
  ['TypeScript', '#023e8a']
] as const

export const tagNames = tags.map((tag) => tag[0])

export const getTagColor = (name: string) => {
  return tags.find((tag) => name === tag[0])[1]
}
