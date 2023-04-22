export type Mods = Record<string, string | boolean | undefined>

export const cls = (
  className: string,
  mods: Mods,
  additional: Array<string | undefined> = []
): string => {

  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(" ")
}