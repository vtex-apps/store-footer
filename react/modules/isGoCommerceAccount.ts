// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isGoCommerceAccount = (data: string | any): boolean => {
  let account = ''
  if (typeof data === 'string') {
    account = data
  } else {
    account = data.vtex && data.vtex.account
  }
  return account.includes('gc_') || account.includes('gc-')
}
