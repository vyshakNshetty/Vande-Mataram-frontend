// src/components/ContactFormSection.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const ContactFormSection = () => {
  const position = [15.6361, 74.5049]; // Thimmapur-M-Tadakod, Karnataka
  const mapsUrl = "https://maps.app.goo.gl/v1HWcK2NWuwTZUJM9";
  const addressText = "Thimmapur-M-Tadakod, Khanapur-M-Tadakod, Karnataka 581105";

  return (
    <section className="bg-white py-20 font-sans overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Form */}
          <div className="w-full">
            <h2 className="text-2xl font-bold text-gray-800 font-heading mb-6">
              Send us a Message
            </h2>
            <form action="#" method="POST">
              <div className="space-y-5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-4 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="w-full p-4 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Message"
                  className="w-full p-4 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                ></textarea>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-yellow-400 text-gray-800 font-bold py-3 px-8 rounded-md hover:bg-yellow-500 transition duration-300"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Map and Contact Info */}
          <div className="w-full min-h-[500px] flex flex-col justify-between overflow-hidden">
            <div className="w-full h-[400px] rounded-md overflow-hidden">
              <MapContainer
                center={position}
                zoom={15}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <div className="space-y-1">
                      <div className="font-semibold">VM Gurukulam</div>
                      <div className="text-sm">
                        Thimmapur-M-Tadakod, Khanapur-M-Tadakod, Karnataka 581105
                      </div>
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-600 underline text-sm"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            {/* Contact Details */}
            <div className="mt-6 text-gray-600 text-sm leading-relaxed">
              <p>
                <span className="font-bold">Address:</span> {addressText} •{" "}
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline"
                >
                  Open in Google Maps
                </a>
              </p>
              <p>
                <span className="font-bold">Email:</span>{" "}
                <a href="mailto:contact@vmgurukulam.org" className="text-yellow-600 underline">
                  contact@vmgurukulam.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
