import Title from "../components/Title";
import wishlistImg from "../assets/wishlistImg.png";
import { useState } from "react";
import { MapPin, Star, Heart } from "lucide-react";

const Wishlist = () => {
  const [wishlistHotels, setWishlistHotels] = useState(
    JSON.parse(localStorage.getItem("wishlistHotels")) || [],
  );
  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-21 xl:px-25">
      <Title
        title="My Wishlist"
        subTitle="Save hotels you love and find them here anytime "
      />

      {wishlistHotels.map((wishlist) => {
        return (
          <div
            key={wishlist.hotelId}
            className="mt-5 py-5 shadow-lg lg:w-250 xl:w-250 flex flex-col md:flex-row lg:flex-row xl:flex-row lg:gap-7 rounded-md"
          >
            {/* img */}
            <div className="relative">
              <img
                className="h-75 w-120 object-cover brightness-120 p-2 rounded-2xl"
                src={wishlist.hotelImage}
                alt=""
              />
              <button
                onClick={() => {
                  const updatedWishlist = wishlistHotels.filter(
                    (wishlistHotel) => {
                      return wishlistHotel.hotelId !== wishlist.hotelId;
                    },
                  );

                  setWishlistHotels(updatedWishlist);

                  localStorage.setItem(
                    "wishlistHotels",
                    JSON.stringify(updatedWishlist),
                  );
                }}
                className="absolute top-7 cursor-pointer left-10 p-3 rounded-full border bg-white border-white"
              >
                <Heart
                  size={21}
                  color="#F6355F"
                  fill="#F6355F"
                  strokeWidth={4}
                />
              </button>
            </div>
            {/* info */}
            <div className="mt-10 ml-7">
              <h1 className="text-3xl font-playfair text-gray-800 ">
                {wishlist.hotelName}
              </h1>
              <p className="flex items-center lg:text-lg xl:text-lg mt-2 gap-2 text-gray-700">
                <MapPin size={17} color="brown" strokeWidth={2.5} />
                {wishlist.hotelCity}
              </p>
              <div className="flex gap-1 items-center whitespace-nowrap mt-3">
                <Star fill="orange" color="orange" size={16} />
                <p className="text-orange-500">{wishlist.rating}</p>
                <p>({wishlist.reviews}+ reviews)</p>
              </div>
              <p className=" mt-4 text-gray-800/90 font-semibold rounded-md text-[19px]">
                ₹ {wishlist.hotelPrice}{" "}
                <span className="text-sm text-gray-600">/night</span>
              </p>
            </div>
          </div>
        );
      })}

      {wishlistHotels.length === 0 && (
        <div className="flex flex-col items-center">
          <div>
            <img
              className="lg:h-110 xl:h-110 md:h-100 h-80"
              src={wishlistImg}
              alt=""
            />
          </div>
          <h1 className="font-playfair lg:text-4xl text-2xl pb-3 lg:pb-1 text-gray-800 font-semibold">
            Your wishlist is empty
          </h1>
          <p className="text-gray-600 text-sm lg:text-[15px]">
            looks like you haven't added any hotel to your wishlist.
          </p>
          <p className="text-gray-600 text-sm lg:text-[15px]">
            start exploring and add hotels you love
          </p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
