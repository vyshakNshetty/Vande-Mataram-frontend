import { useState, useEffect } from "react";
import axios from "../../service/api"; // Your axios instance

export default function SteeringTeam() {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
  });

  const [members, setMembers] = useState([]);
  const [editId, setEditId] = useState(null);

  const endpoint = "steeringboard-team/";

  // Handle text input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input
  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Fetch members
  const fetchMembers = async () => {
    try {
      const response = await axios.get(endpoint);
      setMembers(response.data);
    } catch (error) {
      console.error("Error fetching team members:", error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  // Handle submit (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      if (editId) {
        await axios.put(`${endpoint}${editId}/`, formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Member updated!");
      } else {
        await axios.post(endpoint, formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Member added!");
      }

      setFormData({ name: "", image: null });
      setEditId(null);
      fetchMembers();
    } catch (error) {
      alert("Failed to submit: " + (error.response?.data || error.message));
    }
  };

  // Delete member
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this member?")) return;

    try {
      await axios.delete(`${endpoint}${id}/`);
      alert("Deleted successfully!");
      fetchMembers();
    } catch (error) {
      alert("Error deleting: " + (error.response?.data || error.message));
    }
  };

  // Edit member
  const handleEdit = (member) => {
    setFormData({ name: member.name, image: null });
    setEditId(member.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Cancel edit
  const cancelEdit = () => {
    setFormData({ name: "", image: null });
    setEditId(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
      {/* Left side: form */}
      <div className="md:w-1/2 w-full bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900 tracking-wide">
          {editId ? "Edit Member" : "Add Steering Board Member"}
        </h2>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-6"
        >
          {/* Name */}
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

          {/* Image Upload */}
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
              name="image"
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

          {/* Buttons */}
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

      {/* Right side: list */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900 tracking-wide">
          Steering Team
        </h2>

        {members.length === 0 ? (
          <p className="text-center text-gray-400 italic text-lg">
            No team members available.
          </p>
        ) : (
          <div className="space-y-8">
            {members.map((member) => (
              <div
                key={member.id}
                className="flex flex-col md:flex-row items-center md:items-start gap-6
                  bg-white shadow-xl rounded-3xl p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image */}
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover shadow-md"
                    loading="lazy"
                  />
                )}

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-extrabold text-gray-900">
                    {member.name}
                  </h3>

                  {/* Actions */}
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
