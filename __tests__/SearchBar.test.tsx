import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import SearchBar from "components/SearchBar";
import { FINNHUB_API_URL, API_KEY } from "../lib/finnhub";

const MOCK_SYMBOLS = [
  {
    description: "APPLE INC",
    displaySymbol: "AAPL",
    symbol: "AAPL",
    type: "Common Stock",
  },
  {
    description: "APPLE INC",
    displaySymbol: "AAPL.SW",
    symbol: "AAPL.SW",
    type: "Common Stock",
  },
  {
    description: "APPLE INC",
    displaySymbol: "APC.BE",
    symbol: "APC.BE",
    type: "Common Stock",
  },
  {
    description: "APPLE INC",
    displaySymbol: "APC.DE",
    symbol: "APC.DE",
    type: "Common Stock",
  },
];

const server = setupServer(
  rest.get(
    `${FINNHUB_API_URL}search?token${API_KEY}&q=aapl`,
    (req, res, ctx) => {
      return res(ctx.json({ result: MOCK_SYMBOLS }));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("SearchBar", () => {
  it("renders", () => {
    render(<SearchBar />);
  });

  it("renders the placeholder by default", () => {
    render(<SearchBar />);

    expect(screen.getByRole("searchbox")).toHaveAttribute(
      "placeholder",
      "Search for Stocks..."
    );
  });

  it("renders SymbolList after typing", async () => {
    render(<SearchBar />);

    const input = screen.getByRole("searchbox");

    fireEvent.change(input, {
      target: { value: "aapl" },
    });

    expect(input.value).toBe("aapl");

    await screen.findAllByText(`${MOCK_SYMBOLS[0].symbol}`);
  });

  it("handles server error", async () => {
    server.use(
      rest.get(
        `${FINNHUB_API_URL}search?q=aapl&token${API_KEY}`,
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    render(<SearchBar />);
  });
});
