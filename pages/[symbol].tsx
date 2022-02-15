/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import Quote from "components/quote";
import { fetchCompany, fetchSearch, fetchQuote } from "../lib/finnhub";

import { Company, Quote as QuoteType } from "../interfaces";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { symbol } = params;

  const res = await fetchCompany(symbol);
  const res2 = await fetchQuote(symbol);

  return {
    props: { symbol, company: res, quote: res2 },
  };
};

type Props = {
  symbol: string;
  company: Company;
  quote: QuoteType;
};

const Stock: NextPage = ({ symbol, company, quote }: Props) => {
  return (
    <>
      <Link href="/">
        <a>
          <h1 className="text-3xl font-bold p-6">VinoFi</h1>
        </a>
      </Link>
      <div className="container mx-auto">
        {company?.name ? (
          <div className="md:flex no-wrap">
            <div className="w-full sm:w-3/12 md:mx-2">
              <div className="bg-white p-3">
                <div className="image overflow-hidden">
                  <img
                    className="h-auto w-full mx-auto"
                    src={company.logo}
                    alt={company.name}
                  />
                </div>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  {symbol}
                </h1>
                <p className="text-gray-600 font-lg text-semibold leading-6">
                  {company.name}
                </p>
              </div>
            </div>
            <div className="w-full sm:w-9/12 mx-2 h-64">
              <Quote symbol={symbol} quote={quote} />
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <h4>Company</h4>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Name</div>
                      <div className="px-4 py-2">{company.name}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Country</div>
                      <div className="px-4 py-2">{company.country}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Exchange</div>
                      <div className="px-4 py-2">{company.exchange}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">IPO</div>
                      <div className="px-4 py-2">{company.ipo}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Phone</div>
                      <div className="px-4 py-2">{company.phone}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Web URL</div>
                      <a
                        href={company.weburl}
                        target="_blank"
                        className="px-4 py-2"
                        rel="noreferrer"
                      >
                        {company.weburl}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          "No Company found."
        )}
      </div>
    </>
  );
};

export default Stock;
