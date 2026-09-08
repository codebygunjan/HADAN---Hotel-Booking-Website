import { Heart, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HotelCard = ({ hotelInfo }) => {
  return (
    <div className="bg-gray-100 p-2 mb-4 ml-7 md:w-100 w-100 lg:w-110 relative rounded-2xl shadow-md">
      <Link to={`/hotel-details/${hotelInfo.hotelId}`}>
        <img
          className="lg:h-65 md:h-70 h-70 w-full object-cover brightness-125 rounded-2xl"
          src={hotelInfo.hotelImage}
        />
        <div className="absolute top-7 right-7 p-2 rounded-full border border-white">
          <Heart size={18} color="white" strokeWidth={4} />
        </div>
        <h2 className="text-[20px] py-1 text-gray-700 font-semibold">
          {hotelInfo.hotelName}
        </h2>
        <div className="flex justify-between text-gray-700 items-center text-md font-medium">
          <h4 className="flex items-center gap-1">
            <MapPin color="#762C0A" size={16} strokeWidth={2} />

            {hotelInfo.hotelCity}
          </h4>
          <h4 className="flex items-center gap-1 ">
            <Star color="#C98430" fill="#C98430" size={18} strokeWidth={1} />{" "}
            {hotelInfo.rating}({hotelInfo.reviews})
          </h4>
        </div>
        <h2 className="text-[17px] font-semibold text-gray-800 py-2">
          ₹{hotelInfo.hotelPrice}{" "}
          <span className="text-gray-500 text-sm">/ night</span>
        </h2>
      </Link>
    </div>
  );
};

export default HotelCard;
