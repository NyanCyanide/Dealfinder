import { useState, useEffect } from "react";
import Header from "./components/header";
import Card from "./components/card";

export default function App() {
  const [deals, setDeals] = useState(null);

  const getDeals = async () => {
    try {
      const response = await fetch("http://localhost:8000/deals", {
        method: "GET",
      });
      const data = await response.json();
      setDeals(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDeals();
  }, []);

  console.log(deals);

  return (
    <>
      <section className="container h-screen overflow-hidden bg-c3 md:mx-auto">
        <Header />
        <div className="px-4  mt-5 md:mt-0 md:px-20">
          <div>
            <p className="text-2xl font-semibold font-smg">Best Deals!</p>
          </div>
          <div className="bg-c2 overflow-hidden rounded-3xl h6 overflow-y-auto  h-[74vh] md:h-[64vh]">
            <div className="grid bg-red-00 grid-cols-1 overflow-hidden md:grid-cols-3 grid-flow-row gap-2 md:gap-4 md:mx-4 mx-2 py-3 md:py-4">
              {deals?.map((deal) => (
                <Card key={deal.pos} item={deal} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
