/* eslint-disable @typescript-eslint/ban-types */
declare global {
  type RequireOne<T, K extends keyof T = keyof T> = K extends keyof T
    ? PartialRequire<T, K>
    : never

  type ArgsType<T> = T extends (...args: infer U) => unknown ? U : never

  type PartialRequire<O, K extends keyof O> = {
    [P in K]-?: O[P]
  } &
    O

  type PartOf<T> = RequireOne<{ [key in keyof T]?: T[key] }>

  type ArgumentTypes<F extends Function> = F extends (...args: infer A) => never
    ? A
    : never

  type FReturn<P> = ReturnType<P> extends Promise<infer T> ? T : never
}

export default global
