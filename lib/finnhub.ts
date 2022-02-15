import axios from "axios";

export const FINNHUB_API_URL = "https://finnhub.io/api/v1/";
export const API_KEY = process.env.NEXT_PUBLIC_FINNHUB_KEY;

export async function fetchCompany(symbol) {
  try {
    const res = await axios.get(`${FINNHUB_API_URL}stock/profile2`, {
      params: {
        token: API_KEY,
        symbol,
      },
    });

    return res.data;
  } catch (error) {
    return { error };
  }
}

export async function fetchSearch(query) {
  try {
    const res = await axios.get(`${FINNHUB_API_URL}search`, {
      params: {
        token: API_KEY,
        q: query,
      },
    });

    return res.data.result;
  } catch (error) {
    return { error };
  }
}

export async function fetchQuote(symbol) {
  try {
    const res = await axios.get(`${FINNHUB_API_URL}quote`, {
      params: {
        token: API_KEY,
        symbol,
      },
    });

    return res.data;
  } catch (error) {
    return { error };
  }
}
