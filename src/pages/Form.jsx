import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !age) return;

    const newUser = { name, email, age };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setAge("");
  }

  function handleDelete(index) {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  }

  return (
    <div className="container mx-auto min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">User Form</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <Input
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <Input
            label="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />
          <button
            type="submit"
            className="w-full btn btn-info"
          >
            Add user
          </button>
        </form>

        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Users</h2>
          <ul className="space-y-2">
            {users.map((user, index) => (
              <UserItem
                key={index}
                user={user}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Input({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

function UserItem({ user, onDelete }) {
  return (
    <li className="flex justify-between items-center p-2 border rounded-lg bg-gray-50">
      <div>
        <p className="text-gray-800 font-medium">{user.name}</p>
        <p className="text-gray-600 text-sm">{user.email}</p>
        <p className="text-gray-600 text-sm">Age: {user.age}</p>
      </div>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-600"
      >
        Delete
      </button>
    </li>
  );
}

export default Form;