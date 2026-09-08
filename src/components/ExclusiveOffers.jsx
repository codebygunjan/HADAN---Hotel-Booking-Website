import { CalendarDays } from "lucide-react";
import { exclusiveoffers } from "../assets/offers";
import Title from "./Title";

const ExclusiveOffers = () => {
  return (
    <div>
      <div className="mt-15">
        <Title
          title="exclusive offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />
      </div>
      <div className="flex items-start overflow-x-auto gap-7 mt-6 ml-10 mb-15 no-scrollBar">
        {exclusiveoffers.map((offers) => {
          return (
            <div key={offers.offerName}>
              <div
                className="lg:h-72 pl-4 lg:w-120 h-60 w-110 object-cover bg-no-repeat bg-center flex flex-col gap-2 text-white rounded-xl "
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), transparent),url(${offers.offerImg})`,
                }}
              >
                <p className="py-2 px-3 ml-4 bg-yellow-600 mx-auto mt-9 rounded-sm">
                  {offers.offer}
                </p>

                <p className="ml-3 text-2xl font-semibold lg:mt-15 mt-5">
                  {offers.offerName}
                </p>

                <p className="ml-3 text-sm pr-4">{offers.description}</p>

                <p className="flex gap-2 items-center text-[15px] font-semibold">
                  <CalendarDays size={15} strokeWidth={2} />
                  valid till {offers.validTill}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
