import { useState } from "react";
import Title from "../components/Title";
import noBooking from "../assets/noBooking.png";
import { CalendarDays, MapPin, Star, Trash2, Users } from "lucide-react";

const MyBookings = () => {
  const [allBookings, setAllBookings] = useState(
    JSON.parse(localStorage.getItem("allBookings")) || [],
  );

  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-21 xl:px-25">
      <div className="flex justify-center items-center">
        <Title
          title="My Bookings"
          subTitle="Easily manage your past, current, and upcomming hotel reservations in one place."
        />
      </div>
      {/* booked hotels */}
      {allBookings.map((booking, idx) => {
        return (
          <div
            key={idx}
            className="mt-10 flex flex-col shadow-xl p-5 rounded-xl"
          >
            <div className="flex gap-6  flex-col md:flex-row lg:flex-row xl:flex-row">
              <div className="flex items-center justify-center">
                <img
                  className="h-65 brightness-120 w-110 object-cover rounded-lg"
                  src={booking.hotel.hotelImage}
                  alt=""
                />
              </div>
              <div className="lg:px-7 xl:px-7 lg:py-2 flex flex-col items-center justify-center">
                <h1 className="xl:text-5xl lg:text-4xl text-3xl font-playfair pb-1.5">
                  {booking.hotel.hotelName}
                </h1>
                <p className="flex items-center lg:text-lg xl:text-lg gap-2 text-gray-700">
                  <MapPin size={17} color="brown" strokeWidth={2.5} />
                  {booking.hotel.hotelCity}
                </p>
                <div className="flex gap-3 pt-3 text-[15px] lg:text-[17px] xl:text-[17px]">
                  <div className="flex gap-1">
                    <Star size={22} color="orange" fill="orange" />
                    <Star size={22} color="orange" fill="orange" />
                    <Star size={22} color="orange" fill="orange" />
                    <Star size={22} color="orange" fill="orange" />
                    <Star size={22} color="orange" />
                  </div>
                  {booking.hotel.rating} ({booking.hotel.reviews} reviews)
                </div>

                <p className="mt-4 py-2 bg-orange-100 font-medium text-gray-800/90 px-5 rounded-md text-lg">
                  ₹ {booking.hotel.hotelPrice}{" "}
                  <span className="text-sm text-gray-600">/night</span>
                </p>
              </div>
            </div>
            {/* <div className="flex lg:flex-row items-center flex-col gap-3 border-t mt-5 border-gray-200 py-7 px-5"> */}
            <div className="flex gap-7 items-center flex-col xl:flex-row lg:justify-between lg:flex-col px-5 xl:px-5 py-5 lg:py-5 xl:py-10 mt-5  border-t border-gray-200">
              <div className="flex flex-col items-start gap-3 md:gap-10 md:flex-row md:justify-between lg:justify-between lg:gap-20 xl:gap-30 xl:pl-10">
                {/* check in */}

                <div className="flex gap-3 items-center">
                  <div className="bg-orange-100 py-3 px-2.5 mx-auto rounded-lg">
                    <CalendarDays color="#56370E" />
                  </div>
                  <div className="">
                    <h1 className="whitespace-nowrap text-[16px] text-gray-600">
                      check-in
                    </h1>
                    <p className="whitespace-nowrap lg:text-lg font-semibold text-gray-800 lg:pt-1 xl:pt-1">
                      {booking.checkIn}
                    </p>
                  </div>
                </div>

                {/* check out */}
                <div className="flex gap-3 items-center flex-wrap">
                  <div className="bg-orange-100 py-3 px-2.5 mx-auto rounded-lg">
                    <CalendarDays color="#56370E" />
                  </div>
                  <div>
                    <h1 className="whitespace-nowrap text-[16px] text-gray-600">
                      check-out
                    </h1>
                    <p className="whitespace-nowrap lg:text-lg font-semibold text-gray-800 lg:pt-1 xl:pt-1">
                      {booking.checkOut}
                    </p>
                  </div>
                </div>
                {/* guests */}
                <div className="flex gap-3 items-center">
                  <div className="bg-orange-100 py-3 px-2.5 mx-auto rounded-lg">
                    <Users color="#56370E" />
                  </div>
                  <div>
                    <h1 className="whitespace-nowrap text-[16px] text-gray-600">
                      guests
                    </h1>
                    <p className="whitespace-nowrap lg:text-lg font-semibold text-gray-800 lg:pt-1 xl:pt-1">
                      {booking.guests}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    const removeId = allBookings.filter((item) => {
                      return item.bookingId !== booking.bookingId;
                    });
                    console.log(removeId);

                    localStorage.setItem(
                      "allBookings",
                      JSON.stringify(removeId),
                    );
                    setAllBookings(removeId);
                  }}
                  className="lg:px-4 xl:px-13 lg:text-medium items-center whitespace-nowrap text-sm px-10 flex xl:mr-20 gap-2 active:scale-90 cursor-pointer hover:border-orange-800 hover:text-orange-800 duration-300 ease-out capitalize lg:py-2 py-2 border border-orange-600 text-orange-600 rounded-md"
                >
                  <Trash2 /> cancel booking
                </button>
              </div>
            </div>
          </div>
        );
      })}


      
      {/* no bookings yet */}
      {allBookings.length === 0 && (
        <div className="flex flex-col items-center">
          <div>
            <img
              className="lg:h-110 xl:h-110 md:h-100 h-80"
              src={noBooking}
              alt=""
            />
          </div>
          <h1 className="font-playfair lg:text-4xl text-2xl pb-3 lg:pb-0.5 text-gray-800 font-semibold">
            No bookings yet
          </h1>
          <p className="text-gray-600 text-sm lg:text-[15px]">
            looks like you haven't booked any hotel yet
          </p>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
