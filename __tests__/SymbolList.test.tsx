import { render, screen } from "@testing-library/react";

import SymbolList from "components/SymbolList";

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

describe("SymbolList", () => {
  it("renders nothing with no props", () => {
    render(<SymbolList />);
  });

  it("renders No Results when data list empty", () => {
    render(<SymbolList data={[]} />);

    const text = screen.getByText("No Results.");

    expect(text).toBeInTheDocument();
  });

  it("renders Symbols when data passed", () => {
    render(<SymbolList data={MOCK_SYMBOLS} />);

    const text = screen.getByRole("link", {
      name: `${MOCK_SYMBOLS[0].symbol} ${MOCK_SYMBOLS[0].description}`,
    });

    expect(text).toBeInTheDocument();
  });
});
