import { useState, useEffect } from "react";
import axios from "../../service/api";

export default function GalleryToggle() {
  const [galleryType, setGalleryType] = useState("gurukulam");
  const [formData, setFormData] = useState({ date: "", image: null });
  const [images, setImages] = useState([]);

  const endpoint = `gallery/${galleryType}/`;

  const fetchGallery = async () => {
    try {
      const res = await axios.get(endpoint);
      const data = res.data;
      setImages(Array.isArray(data) ? data : [data]);
    } catch (err) {
      console.error("Error fetching gallery:", err);
    }
  };

  useEffect(() => {
    fetchGallery();
    setFormData({ date: "", image: null });
  }, [galleryType]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) =>
    setFormData({ ...formData, image: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("date", formData.date);
    form.append(galleryType === "gurukulam" ? "images" : "image", formData.image);

    try {
      await axios.post(endpoint, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Image uploaded!");
      setFormData({ date: "", image: null });
      fetchGallery();
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed: " + (err.response?.data?.detail || err.message));
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure to delete this image?")) return;
    try {
      await axios.delete(`${endpoint}${id}/`);
      alert("Deleted!");
      fetchGallery();
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-10 gap-6">
        {["gurukulam", "adrishya"].map((type) => (
          <button
            key={type}
            onClick={() => setGalleryType(type)}
            className={`relative px-6 py-3 font-semibold rounded-full transition-all duration-300 
              ${
                galleryType === type
                  ? "bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white shadow-lg shadow-pink-300/50"
                  : "bg-gray-200 text-gray-700 hover:bg-indigo-100"
              }
              before:absolute before:inset-0 before:rounded-full before:opacity-0 before:transition-opacity before:duration-300
              hover:before:opacity-30 before:bg-gradient-to-r before:from-indigo-400 before:via-purple-500 before:to-pink-500
            `}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)} Gallery
          </button>
        ))}
      </div>

      {/* Upload Form */}
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 tracking-wide">
          Upload to {galleryType.charAt(0).toUpperCase() + galleryType.slice(1)} Gallery
        </h2>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="date"
              className="block text-gray-700 font-semibold mb-2"
            >
              Select Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-gray-700 font-semibold mb-2"
            >
              Choose Image
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-gradient-to-r file:from-indigo-600 file:via-purple-600 file:to-pink-600
                file:text-white
                hover:file:brightness-110
                cursor-pointer
              "
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
              text-white font-bold py-3 rounded-full shadow-lg hover:shadow-pink-400/70
              transition duration-300"
          >
            Upload Image
          </button>
        </form>
      </div>

      {/* Gallery Grid */}
      <div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-wide">
          {galleryType.charAt(0).toUpperCase() + galleryType.slice(1)} Gallery
        </h2>

        {images.length === 0 ? (
          <div className="text-center text-gray-400 space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-16 w-16 opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6"
              />
            </svg>
            <p className="text-lg italic">No images uploaded yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((img) =>
              img.image || img.images ? (
                <div
                  key={img.id}
                  className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                >
                  {/* Image */}
                  <img
                    src={img.image || img.images}
                    alt="Gallery"
                    className="w-full aspect-[4/3] object-cover rounded-3xl transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex flex-col justify-end p-4">
                    <p className="text-white text-sm font-semibold mb-2">
                      📅 {img.date || "Unknown Date"}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(img.id);
                      }}
                      className="self-start bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  );
}
