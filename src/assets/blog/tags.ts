export const tags = [
  ['Tech', '#0F264D'],
  ['Poem', '#0F264D'],
  ['CSS', '#0077B6'],
  ['TypeScript', '#023e8a'],
  ['Other', '#0F264D'],
  ['Food', '#90E0EF'],
  ['Music', '#0077B6'],
  ['Movies', '#03045E'],
  ['Football', '#48CAE4']
] as const

export type TagName = typeof tags[number][0]

export const tagNames = tags.map((tag) => tag[0])

export const getTagColor = (name: string) => {
  return tags.find((tag) => name === tag[0])?.[1]
}

export const isInTags = (name: string) => {
  return tags.some((tag) => tag[0] === name)
}
