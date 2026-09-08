import rambaghPalace from "./hotels/rambagh-palace.png";
import tajPalace from "./hotels/taj-palace.png";
import itcKohenur from "./hotels/itc-kohenur.png";
import hyatt from "./hotels/hyatt.png";
import leelaPalace from "./hotels/leela-palace.png";
import oberoiAmarvilas from "./hotels/oberoi-amarvilas.png";

import amarvilasbathroom from "./amarvilas/bathroom.png";
import amarvilasbedroom from "./amarvilas/bedroom.png";
import amarvilaspool from "./amarvilas/pool.png";
import amarvilasrestaurant from "./amarvilas/restaurant.png";

import rambaghbathroom from "./rambagh/bathroom.png";
import rambaghbedroom from "./rambagh/bedroom.png";
import rambaghpool from "./rambagh/pool.png";
import rambaghrestaurant from "./rambagh/restaurant.png";

import hyattbathroom from "./hyatt/bathroom.png";
import hyattbedroom from "./hyatt/bedroom.png";
import hyattpool from "./hyatt/pool.png";
import hyattrestaurant from "./hyatt/restaurant.png";

import kohenurbathroom from "./kohenur/bathroom.png";
import kohenurbedroom from "./kohenur/bedroom.png";
import kohenurpool from "./kohenur/pool.png";
import kohenurrestaurant from "./kohenur/restaurant.png";

import leelaPalacebathroom from "./leelaPalace/bathroom.png";
import leelaPalacebedroom from "./leelaPalace/bedroom.png";
import leelaPalacepool from "./leelaPalace/pool.png";
import leelaPalacerestaurant from "./leelaPalace/restaurant.png";

import tajPalacebathroom from "./tajPalace/bathroom.png";
import tajPalacebedroom from "./tajPalace/bedroom.png";
import tajPalacepool from "./tajPalace/pool.png";
import tajPalacerestaurant from "./tajPalace/restaurant.png";

export const allHotelInfo = [
  {
    hotelId: 1,
    hotelName: "Rambagh Palace",
    hotelCity: "Jaipur, India",
    hotelImage: rambaghPalace,
    hotelImgGallery: [
      rambaghbathroom,
      rambaghbedroom,
      rambaghpool,
      rambaghrestaurant,
    ],
    hotelPolicies: [
      {
        text: "Check-in",
        description: "Check-in starts from 2:00 PM.",
      },
      {
        text: "Check-out",
        description: "Check-out is until 12:00 PM.",
      },
      {
        text: "Cancellation",
        description:
          "Free cancellation is available up to 24 hours before check-in.",
      },
      {
        text: "Pets",
        description: "Pets are not allowed inside the hotel.",
      },
      {
        text: "Payment",
        description: "Major credit and debit cards are accepted.",
      },
    ],
    hotelDescription:
      "Rambagh Palace is a magnificent heritage palace in Jaipur, known for its royal architecture, lush Mughal gardens and elegant rooms and suites. Once the residence of the Maharaja of Jaipur, the palace combines historic grandeur with modern luxury, fine dining and relaxing wellness experiences.",
    extraAmenities: ["spa", "gym", "breakfast"],
    hotelPrice: 25000,
    rating: 4.8,
    reviews: 1240,
    amenities: ["free Wifi  ", "  pool ", "  Restaurant"],
  },

  {
    hotelId: 2,
    hotelName: "Taj Palace",
    hotelCity: "New Delhi, India",
    hotelImage: tajPalace,
    amenities: ["free Wifi  ", "  pool ", "  Restaurant"],
    hotelImgGallery: [
      tajPalacebedroom,
      tajPalacebathroom,
      tajPalacepool,
      tajPalacerestaurant,
    ],
    extraAmenities: ["spa", "gym", "breakfast"],
    hotelDescription:
      "Taj Palace, New Delhi is a luxurious retreat surrounded by six acres of greenery in the heart of the capital. The hotel combines elegant interiors, spacious rooms, fine dining, a swimming pool, spa and fitness facilities, making it suitable for both business and leisure stays.",
    hotelPrice: 14000,
    rating: 4.7,
    reviews: 980,
    hotelPolicies: [
      {
        text: "Check-in",
        description: "Check-in starts from 2:00 PM.",
      },
      {
        text: "Check-out",
        description: "Check-out is until 12:00 PM.",
      },
      {
        text: "Cancellation",
        description:
          "Free cancellation is available up to 24 hours before check-in.",
      },
      {
        text: "Pets",
        description: "Pets are not allowed inside the hotel.",
      },
      {
        text: "Payment",
        description: "Major credit and debit cards are accepted.",
      },
    ],
  },

  {
    hotelId: 3,
    hotelName: "ITC Kohenur",
    hotelCity: "Hyderabad, India",
    amenities: ["free Wifi  ", "  pool ", "  Restaurant"],
    hotelImgGallery: [
      kohenurbedroom,
      kohenurbathroom,
      kohenurpool,
      kohenurrestaurant,
    ],
    hotelDescription:
      "ITC Kohenur is a luxury hotel in Hyderabad's HITEC City overlooking the picturesque Durgam Lake. The hotel offers spacious rooms and suites, distinctive dining experiences, wellness facilities and elegant spaces for business and celebrations, combining modern luxury with regional cultural influences.",
    extraAmenities: ["spa", "gym", "breakfast"],
    hotelPolicies: [
      {
        text: "Check-in",
        description: "Check-in starts from 2:00 PM.",
      },
      {
        text: "Check-out",
        description: "Check-out is until 12:00 PM.",
      },
      {
        text: "Cancellation",
        description:
          "Free cancellation is available up to 24 hours before check-in.",
      },
      {
        text: "Pets",
        description: "Pets are not allowed on the property.",
      },
      {
        text: "Payment",
        description: "Major credit and debit cards are accepted.",
      },
    ],
    hotelPrice: 11000,
    hotelImage: itcKohenur,
    rating: 4.6,
    reviews: 760,
  },

  {
    hotelId: 4,
    hotelName: "Hyatt Regency Kolkata",
    hotelCity: "Kolkata, India",
    amenities: ["free Wifi  ", "  pool ", "  Restaurant"],
    hotelImgGallery: [hyattbedroom, hyattbathroom, hyattpool, hyattrestaurant],
    extraAmenities: ["spa", "gym", "breakfast"],
    hotelDescription:
      "Hyatt Regency Kolkata is a premium five-star hotel offering elegant rooms, recreational facilities and a variety of dining options. Guests can enjoy its outdoor swimming pool, landscaped gardens, spa and fitness centre, while its location in Salt Lake makes it convenient for both business and leisure travellers.",
    hotelPrice: 25000,
    hotelImage: hyatt,
    rating: 4.7,
    reviews: 890,
    hotelPolicies: [
      {
        text: "Check-in",
        description: "Check-in starts from 2:00 PM.",
      },
      {
        text: "Check-out",
        description: "Check-out is until 12:00 PM.",
      },
      {
        text: "Cancellation",
        description:
          "Free cancellation is available up to 24 hours before check-in.",
      },
      {
        text: "Pets",
        description: "Pets are not allowed inside the hotel.",
      },
      {
        text: "Payment",
        description: "Major credit and debit cards are accepted.",
      },
    ],
  },

  {
    hotelId: 5,
    hotelName: "The Leela Palace Udaipur",
    hotelCity: "Udaipur, India",
    amenities: ["free Wifi  ", "  pool ", "  Restaurant"],
    hotelImgGallery: [
      leelaPalacebedroom,
      leelaPalacebathroom,
      leelaPalacepool,
      leelaPalacerestaurant,
    ],
    extraAmenities: ["spa", "gym", "breakfast"],
    hotelDescription:
      "The Leela Palace Udaipur is a luxurious lakeside retreat overlooking the tranquil waters of Lake Pichola. Inspired by Rajasthan's royal heritage, the palace features grand architecture, elegant rooms and suites, fine dining, a serene spa and beautiful gardens, creating a regal experience in the heart of Udaipur.",
    hotelPrice: 30000,
    hotelImage: leelaPalace,
    rating: 4.9,
    reviews: 1120,
    hotelPolicies: [
      {
        text: "Check-in",
        description: "Check-in starts from 2:00 PM.",
      },
      {
        text: "Check-out",
        description: "Check-out is until 12:00 PM.",
      },
      {
        text: "Cancellation",
        description:
          "Free cancellation is available up to 24 hours before check-in.",
      },
      {
        text: "Pets",
        description: "Pets are not allowed inside the hotel.",
      },
      {
        text: "Payment",
        description: "Major credit and debit cards are accepted.",
      },
    ],
  },

  {
    hotelId: 6,
    hotelName: "The Oberoi Amarvilas",
    hotelCity: "Agra, India",
    amenities: ["free Wifi  ", "  pool ", "  Restaurant"],
    hotelImgGallery: [
      amarvilasbedroom,
      amarvilasbathroom,
      amarvilaspool,
      amarvilasrestaurant,
    ],
    extraAmenities: ["spa", "gym", "breakfast"],
    hotelDescription:
      "The Oberoi Amarvilas is a luxurious hotel in Agra located just 600 metres from the Taj Mahal. Inspired by Mughal palace architecture, the property features elegant rooms and suites, beautiful gardens, reflection pools and personalised hospitality, with Taj Mahal views from all rooms and suites.",
    hotelPrice: 19000,
    hotelImage: oberoiAmarvilas,
    rating: 4.9,
    hotelPolicies: [
      {
        text: "Check-in",
        description: "Check-in starts from 2:00 PM.",
      },
      {
        text: "Check-out",
        description: "Check-out is until 12:00 PM.",
      },
      {
        text: "Cancellation",
        description:
          "Free cancellation is available up to 24 hours before check-in.",
      },
      {
        text: "Pets",
        description: "Pets are not allowed inside the hotel.",
      },
      {
        text: "Payment",
        description: "Major credit and debit cards are accepted.",
      },
    ],
    reviews: 1050,
  },
];
