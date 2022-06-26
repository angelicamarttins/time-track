export type Period = {
  current: number;
  previous: number  
}

export type Timeframes = {
  daily: Period,
  weekly: Period,
  monthly: Period  
}

export type Data = {
  title: string
  timeframes: Timeframes
}

export type ContextType = {
  value: object
}