import { useState, useEffect } from "react";
import axios from "../../service/api"; // your axios instance

export default function Backgrounds() {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
  });
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);

  const fetchBgItems = async () => {
    try {
      const res = await axios.get("bgname/"); // endpoint for Bgname
      setItems(res.data);
    } catch (err) {
      console.error("Error fetching backgrounds:", err);
    }
  };

  useEffect(() => {
    fetchBgItems();
  }, []);

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // update Bgname + BgImages
  const updateBackground = async (id) => {
    try {
      // update Bgname (text field)
      await axios.put(`bgname/${id}/`, { name: formData.name });

      // if a new image was selected → update image
      if (formData.image) {
        const imgData = new FormData();
        imgData.append("bgname", id);
        imgData.append("image", formData.image);

        // try PUT first
        try {
          await axios.put(`bgimages/${id}/`, imgData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        } catch (err) {
          // if no BgImages exists → fallback to POST
          if (err.response?.status === 404) {
            await axios.post(`bgimages/`, imgData, {
              headers: { "Content-Type": "multipart/form-data" },
            });
          } else {
            throw err;
          }
        }
      }

      alert("Background updated!");
      fetchBgItems();
      setFormData({ name: "", image: null });
      setEditId(null);
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
      alert("Update failed!");
    }
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateBackground(editId);
    } else {
      alert("This demo only supports editing existing records.");
    }
  };

  const handleEdit = (item) => {
    setFormData({ name: item.name, image: null });
    setEditId(item.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
      {/* Form */}
      <div className="md:w-1/2 w-full bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6">
          {editId ? "Edit Background" : "Select Background to Edit"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-semibold"
          >
            {editId ? "Update" : "Select an Item First"}
          </button>
        </form>
      </div>

      {/* List */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-2xl font-bold mb-6">Backgrounds</h2>
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white shadow p-4 rounded-xl"
            >
              {item.bg_images_for_each?.image && (
                <img
                  src={item.bg_images_for_each.image}
                  alt={item.name}
                  className="w-28 h-28 rounded-xl object-cover"
                />
              )}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <button
                  onClick={() => handleEdit(item)}
                  className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
