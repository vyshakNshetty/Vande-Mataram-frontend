import React, { useState, useEffect } from "react";
import axios from "../../service/api"; // Adjust this path to your axios instance

const SECTIONS = [
  { label: "Home", key: "home", endpoint: "home_bg/" },
  { label: "Our Model", key: "ourmodel", endpoint: "ourmodel_bg/" },
  { label: "Activities", key: "activities", endpoint: "activities_bg/" },
  { label: "Gallery", key: "gallery", endpoint: "gallery_bg/" },
  { label: "Support Us", key: "supportus", endpoint: "supportus_bg/" },
  { label: "About", key: "about", endpoint: "about_bg/" },
  { label: "Contact", key: "contact", endpoint: "contact_bg/" },
];

const BackgroundSection = ({ section }) => {
  const [bgData, setBgData] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBg = async () => {
    try {
      const res = await axios.get(section.endpoint);
      setBgData(res.data?.[0] || null); // assuming response is a list
    } catch (err) {
      console.error(`Error fetching ${section.label}:`, err);
    }
  };

  useEffect(() => {
    fetchBg();
  }, []);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) return alert("Please select an image.");

    const formData = new FormData();
    formData.append("bg", imageFile);

    setLoading(true);
    try {
      if (bgData) {
        // PUT if already exists
        await axios.put(`${section.endpoint}${bgData.id}/`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert(`${section.label} background updated!`);
      } else {
        // POST if doesn't exist
        await axios.post(section.endpoint, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert(`${section.label} background uploaded!`);
      }
      fetchBg();
      setImageFile(null);
    } catch (err) {
      console.error("Error uploading:", err.response?.data || err.message);
      alert("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 space-y-4 w-full">
      <h2 className="text-xl font-bold">{section.label} Background</h2>

      {bgData?.bg ? (
        <img
          src={bgData.bg}
          alt={`${section.label} Background`}
          className="w-full h-64 object-cover rounded-lg"
        />
      ) : (
        <p className="text-gray-500">No background uploaded yet.</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full"
        />
        <button
          type="submit"
          className={`bg-indigo-600 text-white px-4 py-2 rounded-lg ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"
          }`}
          disabled={loading}
        >
          {bgData ? "Update" : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default function AllBackgroundsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {SECTIONS.map((section) => (
        <BackgroundSection key={section.key} section={section} />
      ))}
    </div>
  );
}
