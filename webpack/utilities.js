import path from 'path'

export const fromRoot = (_path) => path.resolve(__dirname, '../', _path)
export const fromSrc = (_path) => path.resolve(fromRoot('src'), _path)
