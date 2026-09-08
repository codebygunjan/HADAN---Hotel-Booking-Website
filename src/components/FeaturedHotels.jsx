import { allHotelInfo } from "../assets/hotel";
import HotelCard from "./HotelCard";
import Title from "./Title";

const FeaturedHotels = () => {
  return (
    <div className="mt-5 flex flex-col items-start">
      <Title
        title="popular hotels"
        subTitle="handpicked selection of popular hotels for your stay"
        showButton={true}
      />
      <div className="flex flex-wrap lg:gap-6 items-center mt-5 ml-7">
        <div className="flex flex-wrap lg:gap-6 items-center mt-5">
          {allHotelInfo.slice(0, 3).map((hotelInfo, index) => {
            return (
              <div
                key={hotelInfo.hotelId}
                className={
                  index === 1
                    ? "hidden sm:block"
                    : index === 2
                      ? "hidden lg:block"
                      : ""
                }
              >
                <HotelCard hotelInfo={hotelInfo} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedHotels;
