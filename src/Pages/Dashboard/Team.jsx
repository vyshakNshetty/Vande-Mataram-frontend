import { useState, useEffect } from "react";
import axios from "../../service/api"; // Make sure your axios instance is properly configured

export default function Team() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    des: "",
    image: null,
  });

  const [team, setTeam] = useState([]);
  const [editId, setEditId] = useState(null);

  const endpoint = "team/";

  // Fetch team members
  const fetchTeam = async () => {
    try {
      const response = await axios.get(endpoint);
      setTeam(response.data);
    } catch (err) {
      console.error("Error fetching team:", err);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Submit (add or update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    dataToSend.append("name", formData.name);
    dataToSend.append("designation", formData.designation);
    dataToSend.append("des", formData.des);
    if (formData.image) {
      dataToSend.append("image", formData.image);
    }

    try {
      if (editId) {
        await axios.put(`${endpoint}${editId}/`, dataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Team member updated!");
      } else {
        await axios.post(endpoint, dataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Team member added!");
      }

      setFormData({ name: "", designation: "", des: "", image: null });
      setEditId(null);
      fetchTeam();
    } catch (err) {
      console.error("Submit error:", err);
      alert("Failed to submit: " + (err.response?.data?.detail || err.message));
    }
  };

  // Delete
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this member?")) return;

    try {
      await axios.delete(`${endpoint}${id}/`);
      alert("Deleted successfully!");
      fetchTeam();
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete.");
    }
  };

  // Edit
  const handleEdit = (member) => {
    setFormData({
      name: member.name,
      designation: member.designation,
      des: member.des,
      image: null,
    });
    setEditId(member.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setFormData({ name: "", designation: "", des: "", image: null });
    setEditId(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row gap-12">
      {/* Left: Form */}
      <div className="md:w-1/2 w-full bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900 tracking-wide">
          {editId ? "Edit Team Member" : "Add Team Member"}
        </h2>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-2"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                transition"
            />
          </div>

          <div>
            <label
              htmlFor="designation"
              className="block text-gray-700 font-semibold mb-2"
            >
              Designation
            </label>
            <input
              id="designation"
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                transition"
            />
          </div>

          <div>
            <label
              htmlFor="des"
              className="block text-gray-700 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="des"
              name="des"
              rows="4"
              value={formData.des}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                transition"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-gray-700 font-semibold mb-2"
            >
              Image
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required={!editId}
              className="w-full rounded-md cursor-pointer
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-gradient-to-r file:from-indigo-600 file:via-purple-600 file:to-pink-600
                file:text-white hover:file:brightness-110
                transition"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600
                text-white font-bold py-3 rounded-full shadow-lg hover:shadow-pink-400/70
                transition duration-300"
            >
              {editId ? "Update Member" : "Add Member"}
            </button>
            {editId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="flex-1 bg-gray-300 text-gray-700 font-semibold py-3 rounded-full hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Right: Team Members */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900 tracking-wide">
          Team Members
        </h2>

        {team.length === 0 ? (
          <p className="text-center text-gray-400 italic text-lg">
            No team members added yet.
          </p>
        ) : (
          <div className="space-y-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="flex flex-col md:flex-row items-center md:items-start gap-6
                  bg-white shadow-xl rounded-3xl p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover shadow-md"
                    loading="lazy"
                  />
                )}

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-extrabold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-semibold mt-1 text-lg">
                    {member.designation}
                  </p>
                  <p className="mt-3 text-gray-700 text-base leading-relaxed">
                    {member.des}
                  </p>

                  <div className="mt-5 flex justify-center md:justify-start gap-4">
                    <button
                      onClick={() => handleEdit(member)}
                      className="px-5 py-2 rounded-full bg-yellow-500 text-white font-semibold shadow hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(member.id)}
                      className="px-5 py-2 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
