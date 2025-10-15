// Currency and helpers
export const formatCurrency = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n)

export const uuid = () => (globalThis.crypto?.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2))
