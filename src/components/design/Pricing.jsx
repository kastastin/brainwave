import { lines } from "../../assets";

export const LeftLine = () => (
  <div className="pointer-events-none absolute right-full top-1/2 hidden h-[11.0625rem] w-[92.5rem] -translate-y-1/2 lg:block">
    <img src={lines} alt="Lines" width={1480} height={177} className="w-full" />
  </div>
);

export const RightLine = () => (
  <div className="pointer-events-none absolute left-full top-1/2 hidden h-[11.0625rem] w-[92.5rem] -translate-y-1/2 -scale-x-100 lg:block">
    <img src={lines} alt="Lines" width={1480} height={177} className="w-full" />
  </div>
);
