import { useState, useEffect } from "react";
import axios from "../../service/api";

export default function Dashboard_news() {
  const [formData, setFormData] = useState({
    news_name: "",
    description: "",
    date: "",
    image: null,
  });

  const [newsList, setNewsList] = useState([]);
  const [editId, setEditId] = useState(null);
  const endpoint = "news/";

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(endpoint);
      setNewsList(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) =>
    setFormData({ ...formData, image: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("news_name", formData.news_name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("date", formData.date);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      if (editId) {
        await axios.put(`${endpoint}${editId}/`, formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("News updated!");
      } else {
        await axios.post(endpoint, formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("News added!");
      }

      setFormData({
        news_name: "",
        description: "",
        date: "",
        image: null,
      });
      setEditId(null);
      fetchNews();
    } catch (error) {
      alert(
        "Failed to submit: " +
          (error.response?.data
            ? JSON.stringify(error.response.data)
            : error.message)
      );
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this news item?")) return;

    try {
      await axios.delete(`${endpoint}${id}/`);
      alert("Deleted successfully!");
      fetchNews();
    } catch (error) {
      alert(
        "Error deleting: " +
          (error.response?.data
            ? JSON.stringify(error.response.data)
            : error.message)
      );
    }
  };

  const handleEdit = (item) => {
    setFormData({
      news_name: item.news_name,
      description: item.description,
      date: item.date,
      image: null,
    });
    setEditId(item.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setFormData({
      news_name: "",
      description: "",
      date: "",
      image: null,
    });
    setEditId(null);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {editId ? "✏️ Edit News" : "📰 Add News"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                News Title
              </label>
              <input
                type="text"
                name="news_name"
                value={formData.news_name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                {editId ? "Change Image (optional)" : "Upload Image"}
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm"
                required={!editId}
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-4 py-2 rounded-md"
              >
                {editId ? "Update" : "Submit"}
              </button>
              {editId && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-medium px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* News List Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 overflow-y-auto max-h-[calc(100vh-160px)]">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">📋 News Items</h2>
          <div className="space-y-4">
            {newsList.length === 0 ? (
              <p className="text-gray-500">No news available.</p>
            ) : (
              newsList.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Image */}
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.news_name}
                      className="w-24 h-24 object-cover rounded-md border"
                    />
                  )}

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.news_name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">
                      {item.description}
                    </p>
                    <p className="text-gray-400 text-xs">📅 {item.date}</p>

                    <div className="mt-2 flex gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="bg-gray-700 hover:bg-gray-900 text-white text-sm px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
