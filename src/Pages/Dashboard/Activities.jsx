import { useState, useEffect } from "react";
import api from "../../service/api";

export default function ActivitiesDashboard() {
  const [tab, setTab] = useState("gurukulam");
  const [gurukulamData, setGurukulamData] = useState([]);
  const [adrishyaData, setAdrishyaData] = useState([]);
  const [form, setForm] = useState({ title: "", des: "", image: null });
  const [editId, setEditId] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const [uploadTarget, setUploadTarget] = useState(null);

  const endpoints = {
    gurukulam: "gukulam_activities/",
    adrishya: "adrishya/activities/",
    adrishyaImage: "adrishya/image/",
  };

  const fetchGurukulam = async () => {
    try {
      const res = await api.get(endpoints.gurukulam);
      setGurukulamData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAdrishya = async () => {
    try {
      const res = await api.get(endpoints.adrishya);
      setAdrishyaData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGurukulam();
    fetchAdrishya();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) =>
    setForm({ ...form, image: e.target.files[0] });

  const resetForm = () => {
    setForm({ title: "", des: "", image: null });
    setEditId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (tab === "gurukulam") {
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("des", form.des);
        if (form.image) formData.append("image", form.image);

        if (editId) {
          await api.put(`${endpoints.gurukulam}${editId}/`, formData);
          alert("Gurukulam updated");
        } else {
          await api.post(endpoints.gurukulam, formData);
          alert("Gurukulam created");
        }
        fetchGurukulam();
      } else if (tab === "adrishya") {
        const payload = { title: form.title, des: form.des };

        if (editId) {
          await api.put(`${endpoints.adrishya}${editId}/`, payload);
          alert("Adrishya updated");
        } else {
          await api.post(endpoints.adrishya, payload);
          alert("Adrishya created");
        }
        fetchAdrishya();
      }
      resetForm();
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Error: " + JSON.stringify(err.response?.data));
    }
  };

  const handleEdit = (activity) => {
    setForm({ title: activity.title, des: activity.des, image: null });
    setEditId(activity.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      const endpoint = tab === "gurukulam" ? endpoints.gurukulam : endpoints.adrishya;
      await api.delete(`${endpoint}${id}/`);
      alert("Deleted successfully");
      tab === "gurukulam" ? fetchGurukulam() : fetchAdrishya();
    } catch (err) {
      console.error(err);
    }
  };

  const handleImageUpload = async (e, activityId) => {
    e.preventDefault();
    if (!uploadImage) {
      alert("Select an image first");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("adrishya", activityId);
      formData.append("images", uploadImage);

      await api.post(endpoints.adrishyaImage, formData);
      alert("Image uploaded");
      setUploadImage(null);
      setUploadTarget(null);
      fetchAdrishya();
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Upload error: " + JSON.stringify(err.response?.data));
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      {/* Tab Switch */}
      <div className="flex gap-4">
        {["gurukulam", "adrishya"].map((type) => (
          <button
            key={type}
            onClick={() => {
              setTab(type);
              resetForm();
            }}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
              tab === type
                ? "bg-gray-700 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold mb-6">
          {editId ? "✏️ Edit" : " Create"} {tab} Activity
        </h2>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Activity Title"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-gray-700 focus:border-gray-800"
          required
        />
        <textarea
          name="des"
          value={form.des}
          onChange={handleChange}
          placeholder="Activity Description"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-gray-700 focus:border-gray-800"
          required
        />
        {tab === "gurukulam" && (
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-gray-700
                file:text-white
                hover:file:brightness-110
                cursor-pointer
              "
          />
        )}
        <button
          type="submit"
          className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700"
        >
          {editId ? "Update" : "Create"}
        </button>
      </form>

      {/* Activity List */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {tab === "gurukulam" ? "🏫 Gurukulam Activities" : "🕶️ Adrishya Activities"}
        </h2>

        <div className="space-y-6">
          {(tab === "gurukulam" ? gurukulamData : adrishyaData).map((act) => (
            <div
              key={act.id}
              className="bg-white p-4 rounded-lg shadow-md space-y-2"
            >
              <h3 className="text-lg font-bold">{act.title}</h3>
              <p className="text-gray-600">{act.des}</p>

              {/* Image Preview (Gurukulam) */}
              {tab === "gurukulam" && act.image && (
                <img
                  src={act.image}
                  alt="activity"
                  className="w-32 h-32 object-cover rounded mt-2 border"
                />
              )}

              {/* Adrishya Image Gallery */}
              {tab === "adrishya" && act.image?.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-2">
                  {act.image.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="gallery"
                      className="w-24 h-24 object-cover rounded border"
                    />
                  ))}
                </div>
              )}

              {/* Upload Section for Adrishya */}
              {tab === "adrishya" && (
                <>
                  {uploadTarget === act.id ? (
                    <form
                      onSubmit={(e) => handleImageUpload(e, act.id)}
                      className="flex items-center gap-3 mt-3"
                    >
                      <input
                        type="file"
                        onChange={(e) => setUploadImage(e.target.files[0])}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-gray-800
                file:text-white
                hover:file:brightness-110
                cursor-pointer
              "
                      />
                      <button
                        type="submit"
                        className="bg-gray-900 text-white px-3 py-1 rounded hover:bg-gray-800"
                      >
                        Upload
                      </button>
                      <button
                        type="button"
                        onClick={() => setUploadTarget(null)}
                        className="text-sm text-gray-500 underline"
                      >
                        Cancel
                      </button>
                    </form>
                  ) : (
                    <button
                      onClick={() => setUploadTarget(act.id)}
                      className="bg-gray-700 text-white px-3 py-1 rounded mt-2 hover:bg-gray-800"
                    >
                      Add Image
                    </button>
                  )}
                </>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => handleEdit(act)}
                  className="bg-gray-700 text-white px-4 py-1 rounded hover:bg-gray-900"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(act.id)}
                  className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
