import React from "react";
import Link from "next/link";

import { Symbol } from "../interfaces";

type Props = {
  data: Symbol;
};

const Symbol = ({ data }: Props) => (
  <div className="bg-white p-2 border-b-2 border-gray-300">
    <Link href="/[symbol]" as={`/${data.symbol}`}>
      <a>
        <div className="text-xl font-medium text-black">{data.symbol}</div>
        <p className="text-slate-500">{data.description}</p>
      </a>
    </Link>
  </div>
);

export default Symbol;
