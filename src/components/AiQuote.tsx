"use client";

import axios, { isAxiosError } from "axios";
import { useState, useRef } from "react";
import { type PutBlobResult } from "@vercel/blob";
import { upload } from "@vercel/blob/client";
import { useRouter } from "next/navigation";
import { FaPaperclip, FaTrash } from "react-icons/fa";

const GetAiQuote = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    town: "",
    images: [] as File[],
    message: "",
    options: [] as string[],
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const uploadedBlobUrls = await Promise.all(
        formData.images.map(async (file) => {
          const newBlob: PutBlobResult = await upload(file.name, file, {
            access: "public",
            handleUploadUrl: "/api/avatar/upload",
          });
          return newBlob.url;
        })
      );

      await axios.post("/api/admin/quote", {
        name: formData.name,
        town: formData.town,
        phone: formData.phone,
        email: formData.email,
        phoneNumber: formData.phone,
      });

      await axios.post("/api/quote/wash", {
        ...formData,
        imageUrls: uploadedBlobUrls,
      });

      router.push("/thank-you");
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data);
        setErrorMessage(error.response?.data.details || "An error occurred");
      } else {
        setErrorMessage("An unexpected error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData((prevState) => ({
        ...prevState,
        images: [...prevState.images, ...filesArray],
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData((prevState) => ({
      ...prevState,
      images: prevState.images.filter((_, i) => i !== index),
    }));
  };

  const handleOptionChange = (option: string) => {
    setFormData((prevState) => {
      const newOptions = prevState.options.includes(option)
        ? prevState.options.filter((o) => o !== option)
        : [...prevState.options, option];
      return { ...prevState, options: newOptions };
    });
  };

  const inputClasses =
    "w-full bg-gray-50 border border-gray-300 rounded-lg p-3 focus:ring-primary focus:border-primary transition-all";
  const labelClasses = "block text-gray-700 text-sm font-semibold mb-2";

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200/80 w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Get a Free Quote
      </h2>
      <p className="text-gray-600 mb-6">
        Fill out the form below and we&apos;ll get back to you shortly.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={inputClasses}
              placeholder="e.g., John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={inputClasses}
              placeholder="e.g., john.doe@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className={inputClasses}
              placeholder="e.g., (555) 555-5555"
              required
            />
          </div>
          <div>
            <label htmlFor="town" className={labelClasses}>
              Town
            </label>
            <input
              type="text"
              id="town"
              value={formData.town}
              onChange={(e) =>
                setFormData({ ...formData, town: e.target.value })
              }
              className={inputClasses}
              placeholder="e.g., Plymouth"
              required
            />
          </div>
        </div>

        <div>
          <label className={labelClasses}>Services Interested In</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            {[
              "House Wash",
              "Deck Cleaning",
              "Walkway Cleaning",
              "Porch Cleaning",
              "Patio Cleaning",
              "Shed Wash",
              "Fence Cleaning",
              "Stone Wall Cleaning",
            ].map((option) => (
              <label
                key={option}
                className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <input
                  type="checkbox"
                  value={option}
                  checked={formData.options.includes(option)}
                  onChange={() => handleOptionChange(option)}
                  className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                />
                <span className="text-sm font-medium text-gray-700 capitalize">
                  {option.replace(/-/g, " ")}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="images" className={labelClasses}>
            Project Images
          </label>
          <div
            className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-primary/80"
            onClick={() => inputFileRef.current?.click()}
          >
            <div className="space-y-1 text-center">
              <FaPaperclip className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <p className="pl-1">
                  Drag and drop or click to upload (up to 5 images)
                </p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
          <input
            ref={inputFileRef}
            type="file"
            id="images"
            multiple
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />
          {formData.images.length > 0 && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {formData.images.map((file, index) => (
                <div key={index} className="relative group">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <div
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeImage(index)}
                  >
                    <FaTrash size={12} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            className={`${inputClasses} min-h-[120px]`}
            placeholder="Tell us anything else we should know about your project."
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get My Quote"}
          </button>
          {errorMessage && (
            <div className="mt-4 text-red-600 bg-red-100 p-3 rounded-lg">
              <p>{errorMessage}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default GetAiQuote;
