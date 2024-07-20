"use client";

import axios from "axios";
import { useState } from "react";

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    images: [] as File[],
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData.images.length);

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);
    formData.images.forEach((file) => {
      form.append("images", file);
    });

    try {
      const res = await axios.post("/api/quote", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("sent data");
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      console.log(filesArray);

      setFormData((prevState) => ({
        ...prevState,
        images: [...prevState.images, ...filesArray],
      }));
    }
  };

  return (
    <div className=" py-12">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800">Get A Quote</h1>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Fill out the form below to get a finalized quote today.
        </p>
      </div>
      <div className="container mx-auto px-4">
        <form
          className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <label
            className="block text-gray-700 text-lg font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="e.g., John Doe"
            required
          />
          <label
            className="block text-gray-700 text-lg font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="e.g., example@example.com"
            required
          />
          <label
            className="block text-gray-700 text-lg font-semibold mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="e.g., 555-555-5555"
            required
          />
          <label
            className="block text-gray-700 text-lg font-semibold mb-2"
            htmlFor="images"
          >
            Images (optional)
          </label>
          <input
            type="file"
            id="images"
            multiple
            onChange={handleFileChange}
            className="w-full p-3 mb-4 border rounded-lg"
          />
          {formData.images.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {formData.images.map((file, index) => (
                <div key={index}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}
          <label
            className="block text-gray-700 text-lg font-semibold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="Tell us about your project..."
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetAQuote;
