export const SITE_CONFIG = {
  name: "Casa Guarguaridad",
  description: "Luxury villa rental in Playa Hermosa, Costa Rica",
  url: "https://casa-guarguaridad.com",
  maxGuests: 6,
  bedrooms: 2,
  bathrooms: 3,
} as const;

export const CONTACT_INFO = {
  email: "randallgba@gmail.com",
  phone: "+506-8708-4555",
} as const;

export const PROPERTY_LOCATION = {
  name: "Casa Guarguaridad",
  address: "Casa #15, Quebrada Amarilla, Puntarenas, 61101, Costa Rica",

  // Full URL with all parameters for business profile
  googleMapsUrl:
    "https://www.google.com/maps/place/Casa+Guarguaridad/@9.562676,-84.5582804,17z/data=!3m1!4b1!4m6!3m5!1s0x8fa1bf6a646695b9:0xad34553286bd97e6!8m2!3d9.562676!4d-84.5582804!16s%2Fg%2F11vpn3ktqp?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D",

  // Correct embed code from Google Maps Share → Embed
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3934.3781516558565!2d-84.55917089339295!3d9.562633680984767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1bf6a646695b9%3A0xad34553286bd97e6!2sCasa%20Guarguaridad!5e0!3m2!1ses-419!2scr!4v1771350828617!5m2!1ses-419!2scr",

  latitude: 9.562676,
  longitude: -84.5582804,
  plusCode: "HC7R+3M Quebrada Amarilla, Puntarenas",
} as const;
