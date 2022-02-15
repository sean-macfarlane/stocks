export type Symbol = {
  description: string;
  displaySymbol: string;
  symbol: string;
  typ: string;
};

export type Quote = {
  c: number;
  d: number;
  dp: number;
  h: number;
  l: number;
  o: number;
  pc: number;
};

export type Company = {
  country: string;
  currency: string;
  exchange: string;
  ipo: string;
  marketCapitalization: number;
  shareOutstanding: number;
  name: string;
  phone: string;
  ticker: string;
  weburl: string;
  logo: string;
  finnhubIndustry: string;
};
