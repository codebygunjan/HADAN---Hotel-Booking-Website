import { useParams } from "react-router-dom";
import { allHotelInfo } from "../assets/hotel";
import {
  MapPin,
  Star,
  Wifi,
  WavesLadder,
  Utensils,
  Coffee,
  Dumbbell,
  Flower,
  Clock,
  Ban,
  Cat,
  CreditCard,
} from "lucide-react";
import { useState } from "react";

const HotelDetails = () => {
  const { id } = useParams();

  const hotelData = allHotelInfo.find((hotel) => hotel.hotelId == id);
  const allBookings = JSON.parse(localStorage.getItem("allBookings")) || [];
  const [mainImage, setMainImage] = useState(hotelData.hotelImage);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const [isBooked, setIsBooked] = useState(
    allBookings.some((booking) => {
      return booking.hotel.hotelId == hotelData.hotelId;
    }),
  );

  console.log("current hotel id", hotelData.hotelId);
  console.log("current hotel name", hotelData.hotelName);
  console.log("isBooked", isBooked);

  return (
    <div className="py-30 mt-5 md:py-35 px-4 md:px-16 1g:px-24 x1:px-32">
      <div className="flex  lg:flex-col flex-col lg:items-start items-start md:items-center gap-6">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-medium md:text-4xl font-playfair">
            {hotelData.hotelName}
          </h1>
          <p className="text-xs font-inter py-2 px-3 text-white bg-yellow-600 rounded-full">
            20% OFF
          </p>
        </div>

        {/* room ratings */}
        <div className="flex gap-1.5 items-center">
          <div className="flex items-center gap-1.5">
            <Star color="#E19836" fill="#E19836" size={20} />
            <Star color="#E19836" fill="#E19836" size={20} />
            <Star color="#E19836" fill="#E19836" size={20} />
            <Star color="#E19836" fill="#E19836" size={20} />
            <Star color="#E19836" size={20} />
          </div>
          <p className="text-gray-600 text-[17px] font-semibold">
            {hotelData.rating}({hotelData.reviews} reviews)
          </p>
        </div>

        {/* location */}
        <div className="flex items-center text-gray-600 text-lg">
          <MapPin color="brown" size={17} />
          <p>{hotelData.hotelCity}</p>
        </div>

        {/* hotel images */}
        <div className="flex flex-col items-start lg:flex-row gap-7">
          <div className="lg:h-120">
            <img
              className="lg:w-280 lg:h-110 w-250 h-80 brightness-120 object-cover rounded-xl shadow-xl/30"
              src={mainImage}
              alt="hostel image"
            />
          </div>
          {/* {images gallery} */}
          <div className="grid grid-cols-2 lg:gap-5 gap-5 w-full">
            {hotelData.hotelImgGallery.map((img, index) => (
              <img
                onClick={() => {
                  setMainImage(img);
                }}
                key={index}
                src={img}
                className={`w-120 h-52 rounded-xl shadow-md object-cover object-center cursor-pointer ${mainImage === img && "outline-4 outline-orange-600"}`}
              />
            ))}
          </div>
        </div>
        {/* hotel highlights  */}
        <div>
          <div>
            <h1 className="text-3xl capitalize md:text-4xl font-playfair">
              experience luxury like never before
            </h1>
            <div className="mt-2 flex gap-4 items-center flex-wrap">
              <p className="flex gap-2 font-medium items-center text-sm bg-gray-200/50 p-2 rounded mt-1.5">
                <Wifi color="#000" size={18} strokeWidth={1.7} />
                {hotelData.amenities[0]}
              </p>
              <p className="flex gap-2 font-medium items-center text-sm bg-gray-200/50 p-2 rounded mt-1.5">
                <WavesLadder color="#000" strokeWidth={1.7} size={18} />
                {hotelData.amenities[1]}
              </p>
              <p className="flex gap-2 font-medium items-center text-sm bg-gray-200/50 p-2 rounded mt-1.5">
                <Utensils color="#000" strokeWidth={1.7} size={18} />
                {hotelData.amenities[2]}
              </p>
              <p className="flex gap-2 font-medium items-center text-sm bg-gray-200/50 p-2 rounded mt-1.5">
                <Flower color="#000" strokeWidth={1.7} size={18} />
                {hotelData.extraAmenities[0]}
              </p>
              <p className="flex gap-2 font-medium items-center text-sm bg-gray-200/50 p-2 rounded mt-1.5">
                <Dumbbell color="#000" strokeWidth={1.7} size={18} />
                {hotelData.extraAmenities[1]}
              </p>
              <p className="flex gap-2 font-medium items-center text-sm bg-gray-200/50 p-2 rounded mt-1.5">
                <Coffee color="#000" strokeWidth={1.7} size={18} />
                {hotelData.extraAmenities[2]}
              </p>
            </div>
          </div>
        </div>
        {/* hotel price */}
        <div>
          <p className="text-2xl font-medium">
            ₹{hotelData.hotelPrice}{" "}
            <span className="text-lg text-gray-500">/ night</span>
          </p>
        </div>
      </div>
      {/* hotel description */}
      <div className="mt-10 bg-gray-100 py-5 px-4 rounded-xl lg:w-[75%] w-[90%]">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-medium font-playfair">
            About {hotelData.hotelName}
          </h1>
          <p className="text-lg text-gray-700">{hotelData.hotelDescription}</p>
        </div>
      </div>
      {/* policies section */}
      <div className="mt-7">
        <h1 className="capitalize text-3xl font-medium font-playfair pb-2">
          Hotel policies
        </h1>
        {hotelData.hotelPolicies.map((policy, idx) => {
          return (
            <div key={idx} className="pl-2 flex items-center gap-2">
              <div className="p-2 bg-gray-200/50 rounded-full mt-2">
                {idx === 0 && (
                  <Clock fill="black" color="white" strokeWidth={2} />
                )}
                {idx === 1 && (
                  <Clock fill="black" color="white" strokeWidth={2} />
                )}
                {idx === 2 && (
                  <Ban fill="black" color="white" strokeWidth={2} />
                )}
                {idx === 3 && (
                  <Cat fill="black" color="white" strokeWidth={2} />
                )}
                {idx === 4 && (
                  <CreditCard fill="black" color="white" strokeWidth={2} />
                )}
              </div>
              <div>
                <h1 className="text-lg font-medium text-gray-800 pt-4">
                  {policy.text} :
                </h1>
                <p className="text-sm lg:text-[16px] text-gray-700">
                  {policy.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* check in check out form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const booking = {
            bookingId: Date.now(),
            hotel: hotelData,
            checkIn: checkIn,
            checkOut: checkOut,
            guests: guests,
          };

          console.log(booking.bookingId);
          const allBookings =
            JSON.parse(localStorage.getItem("allBookings")) || [];

          allBookings.push(booking);

          localStorage.setItem("allBookings", JSON.stringify(allBookings));

          setIsBooked(true);

          setCheckIn("");
          setCheckOut("");
          setGuests("");
        }}
        className="flex flex-col lg:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] py-6 px-10 rounded-x1 mx-auto mt-16 w-[90%]"
      >
        <div className="flex flex-col lg:pl-20 flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
          <div className="flex flex-col">
            <label htmlFor="checkInDate" className="font-medium">
              check-In
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => {
                setCheckIn(e.target.value);
              }}
              id="checkInDate"
              placeholder="Check-In"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>
          <div className="h-20 w-px bg-gray-300/70 max-md:hidden"></div>

          <div className="flex flex-col">
            <label htmlFor="checkOutDate" className="font-medium">
              check-Out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => {
                setCheckOut(e.target.value);
              }}
              id="checkOutDate"
              placeholder="Check-Out"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>
          <div className="h-20 w-px bg-gray-300/70 max-md:hidden"></div>
          <div className="flex flex-col">
            <label htmlFor="guests" className="font-medium">
              Guests
            </label>
            <input
              type="number"
              id="guests"
              value={guests}
              placeholder="0"
              onChange={(e) => {
                setGuests(e.target.value);
              }}
              className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>
        </div>
        <button
          disabled={isBooked}
          type="submit"
          className={`capitalize active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-20 whitespace-nowrap py-3 md:py-4 mt-4 text-base cursor-pointer ${isBooked ? "bg-green-500" : "bg-gray-800"}`}
        >
          {isBooked ? "Booked" : "Book Now"}
        </button>
      </form>
    </div>
  );
};

export default HotelDetails;
