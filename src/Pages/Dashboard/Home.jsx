import { useEffect, useState } from "react";

export default function Home() {
  const [adminName, setAdminName] = useState("Admin");
  const [messages, setMessages] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [contacts, setContacts] = useState([]);

  // Simulate API call on mount
  useEffect(() => {
    // You can replace this with actual API calls later
    setAdminName("Ravi Sharma");

    setMessages([
      { id: 1, from: "Sita", content: "Amazing initiative! Keep it up." },
      { id: 2, from: "Ankit", content: "I’d love to contribute as a designer." },
    ]);

    setVolunteers([
      { id: 1, name: "Priya Mehta", role: "Content Writer", date: "2025-09-14" },
      { id: 2, name: "Rahul Verma", role: "Field Volunteer", date: "2025-09-12" },
    ]);

    setContacts([
      { id: 1, name: "Kiran", email: "kiran@gmail.com", message: "Need help understanding your model." },
      { id: 2, name: "Deepak", email: "deepak@gmail.com", message: "Can we collaborate on a local campaign?" },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-indigo-600">Welcome, {adminName} 👋</h2>
      <p className="text-gray-600 mb-6">Here's what's happening in your dashboard today:</p>

      {/* Section: Messages */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-slate-700">📬 Latest Messages</h3>
        <div className="space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-white p-4 rounded shadow-sm border border-gray-100">
              <p className="text-gray-800 font-medium">{msg.from}</p>
              <p className="text-gray-600 text-sm">{msg.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Volunteers */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-slate-700">🙋 Volunteer Requests</h3>
        <div className="space-y-3">
          {volunteers.map((vol) => (
            <div key={vol.id} className="bg-white p-4 rounded shadow-sm border border-gray-100">
              <p className="font-medium text-gray-800">{vol.name} – <span className="text-sm text-blue-500">{vol.role}</span></p>
              <p className="text-sm text-gray-500">Requested on: {vol.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Contact Submissions */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-slate-700">📞 Contact Form Submissions</h3>
        <div className="space-y-3">
          {contacts.map((contact) => (
            <div key={contact.id} className="bg-white p-4 rounded shadow-sm border border-gray-100">
              <p className="font-medium text-gray-800">{contact.name} – <span className="text-sm text-gray-500">{contact.email}</span></p>
              <p className="text-gray-600 text-sm">{contact.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
