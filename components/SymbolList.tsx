import { Symbol as SymbolType } from "../interfaces";
import Symbol from "./Symbol";

type Props = {
  data: SymbolType[] | null;
};

const SymbolList = ({ data }: Props) => {
  if (!data) {
    return null;
  }

  if (data.length == 0) {
    return <div>No Results.</div>;
  }

  return (
    <>
      {data.map((i) => (
        <Symbol key={i.symbol} data={i} />
      ))}
    </>
  );
};
export default SymbolList;
