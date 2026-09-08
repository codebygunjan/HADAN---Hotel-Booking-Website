import { useNavigate } from "react-router-dom";
import { allHotelInfo } from "../assets/hotel";
import { MapPin, Star, Utensils, WavesLadder, Wifi, Heart } from "lucide-react";
import { useState } from "react";

const Hotels = () => {
  const navigate = useNavigate();

  const [selectedCity, setSelectedCity] = useState("");

  const [selectedPrice, setSelectedPrice] = useState("");

  const [selectedOptions, setSelectedOptions] = useState("");

  const [wishlistHotels, setWishlistHotels] = useState(
    JSON.parse(localStorage.getItem("wishlistHotels")) || [],
  );

  const destinations = [
    "Jaipur",
    "New Delhi",
    "Hyderabad",
    "Udaipur",
    "Kolkata",
    "Agra",
    "Jodhpur",
    "Mumbai",
  ];

  const priceRanges = [
    "₹0 - ₹5,000",
    "₹10,000 - ₹15,000",
    "₹15,000 - ₹20,000",
    "₹20,000+",
  ];

  const sortOptions = ["Price: Low to High", "Price: High to Low"];

  return (
    <div className="flex lg:flex-row relative py-5 flex-col-reverse items-start bg-orange-100/50 justify-between pt-28 md:pt-35 px-4 md:px-16 1g:px-24 x1:px-32">
      {/* left side hotesls */}
      <div>
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl capitalize text-primary font-medium mt-5">
            explore hotels
          </h1>
          <p className="text-sm md:text-base text-primary pt-3 max-w-170">
            Find the perfect stay for your next gateway
          </p>
        </div>

        {/* all hotels */}
        {allHotelInfo
          .filter((hotel) => {
            if (selectedCity !== "") {
              return hotel.hotelCity.includes(selectedCity);
            } else if (selectedPrice !== "") {
              if (selectedPrice === "₹20,000+") {
                return hotel.hotelPrice >= 20000;
              } else {
                const priceRange = selectedPrice.split("-");

                const minPriceRange = priceRange[0]
                  .replace("₹", "")
                  .replace(",", "")
                  .trim();

                const maxPriceRange = priceRange[1]
                  .replace("₹", "")
                  .replace(",", "")
                  .trim();

                return (
                  hotel.hotelPrice >= minPriceRange &&
                  hotel.hotelPrice <= maxPriceRange
                );
              }
            } else {
              return true;
            }
          })

          .map((hotel) => {
            const alreadyAdded = wishlistHotels.find((wishlistHotel) => {
              return wishlistHotel.hotelId == hotel.hotelId;
            });

            return (
              <div
                key={hotel.hotelId}
                className="flex flex-col md:flex-row items-start py-10 pr-5 gap-6 border-b border-gray-300 last:pb-30 last:border-0 bg-gray-50"
              >
                <div className="relative">
                  <img
                    onClick={() => {
                      navigate(`/hotels/${hotel.hotelId}`);
                    }}
                    src={hotel.hotelImage}
                    alt="hotel image"
                    className="h-70  md:w-90 shadow-lg cursor-pointer lg:w-120 brightness-107 rounded-lg bg-center object-cover"
                  />
                  {/* wishlist */}

                  <button
                    onClick={() => {
                      console.log(hotel);

                      const alreadyAdded = wishlistHotels.find(
                        (wishlistHotel) => {
                          return wishlistHotel.hotelId == hotel.hotelId;
                        },
                      );

                      if (alreadyAdded) {
                        const updatedWishlist = wishlistHotels.filter(
                          (wishlistHotel) => {
                            return wishlistHotel.hotelId != hotel.hotelId;
                          },
                        );

                        setWishlistHotels(updatedWishlist);

                        localStorage.setItem(
                          "wishlistHotels",
                          JSON.stringify(updatedWishlist),
                        );

                        return;
                      }

                      const updatedWishlist = [...wishlistHotels, hotel];

                      setWishlistHotels(updatedWishlist);

                      localStorage.setItem(
                        "wishlistHotels",
                        JSON.stringify(updatedWishlist),
                      );
                    }}
                    className={`absolute top-5 left-8 cursor-pointer p-3 border-white rounded-full border ${
                      alreadyAdded ? "bg-white" : "border-white"
                    }`}
                  >
                    <Heart
                      size={alreadyAdded ? 25 : 19}
                      color={alreadyAdded ? "#F6355F" : "white"}
                      fill={alreadyAdded ? "#F6355F" : "transparent"}
                      strokeWidth={4}
                    />
                  </button>
                </div>

                <div>
                  <p className="lg:text-3xl text-2xl font-playfair my-2">
                    {hotel.hotelName}
                  </p>

                  <p className="flex gap-1 items-center mb-2 text-gray-500">
                    <MapPin size={18} /> {hotel.hotelCity}
                  </p>
                  <div className="flex gap-1 items-center whitespace-nowrap mt-3">
                    <Star fill="orange" color="orange" size={16} />
                    <p className="text-orange-500">{hotel.rating}</p>
                    <p>({hotel.reviews}+ reviews)</p>
                  </div>

                  <div className="my-2 flex gap-4 items-center flex-wrap">
                    <p className="flex gap-1 items-center text-sm bg-gray-200 p-1.5 rounded my-4">
                      <Wifi color="#000" size={16} strokeWidth={1.7} />
                      {hotel.amenities[0]}
                    </p>
                    <p className="flex gap-1 items-center text-sm bg-gray-200 p-1.5 rounded my-4">
                      <WavesLadder color="#000" strokeWidth={1.7} size={16} />
                      {hotel.amenities[1]}
                    </p>
                    <p className="flex gap-1 items-center text-sm bg-gray-200 p-1.5 rounded my-4">
                      <Utensils color="#000" strokeWidth={1.7} size={16} />
                      {hotel.amenities[2]}
                    </p>
                  </div>

                  <p className="text-xl">
                    ₹{hotel.hotelPrice}
                    <span className="text-gray-500 text-[16px] pl-1">
                      /night
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
      </div>

      {/* right side filters */}
      <div className="bg-white w-80  border-gray-300 pb-5  lg:sticky lg:top-30">
        <div className=" border-b border-gray-200 flex p-5  items-center justify-between">
          <h2 className="text-lg capitalize text-gray-800 font-medium">
            filters
          </h2>
          <button
            onClick={() => {
              setSelectedPrice("");
              setSelectedCity("");
            }}
            className="text-gray-400 active:bg-gray-200 active:scale-95 p-2 rounded cursor-pointer"
          >
            clear
          </button>
        </div>
        <div className="px-5 py-2">
          <h2 className="text-primary font-medium text-[17px]  pt-3 pb-1">
            Destinations
          </h2>
          {destinations.map((place, index) => {
            return (
              <label
                key={index}
                className="flex gap-2 text-gray-500 text-[14px]"
              >
                <input
                  type="checkbox"
                  checked={selectedCity === place}
                  onChange={() => {
                    setSelectedCity(place);
                  }}
                />

                <span>{place}</span>
              </label>
            );
          })}

          <h2 className="text-primary font-medium text-[17px]  pt-3 pb-1">
            Price Range
          </h2>
          {priceRanges.map((range, index) => {
            return (
              <label
                key={index}
                className="flex text-[14px] text-gray-500 gap-2"
              >
                <input
                  type="checkbox"
                  checked={selectedPrice === range}
                  onChange={() => {
                    setSelectedPrice(range);
                  }}
                />
                <span>{range}</span>
              </label>
            );
          })}

          <h2 className="text-primary font-medium text-[17px] pt-3 pb-1">
            Sort By
          </h2>
          {sortOptions.map((options, index) => {
            return (
              <label
                key={index}
                className="flex gap-2 text-gray-500 text-[14px]"
              >
                <input
                  type="radio"
                  checked={selectedOptions === options}
                  onChange={() => {
                    setSelectedOptions(options);
                  }}
                />
                {options}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
