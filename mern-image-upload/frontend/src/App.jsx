import { useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3400/api/upload",
        formData
      );

      setUploadedImage(res.data.imageUrl);
      setPreview(null);
      setImage(null);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Image Upload
        </h1>

        {/* File Input */}
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-indigo-400 transition">

          <input
            type="file"
            onChange={handleImageChange}
            className="hidden"
            id="fileUpload"
          />

          <label
            htmlFor="fileUpload"
            className="cursor-pointer text-indigo-600 font-medium"
          >
            Click to select an image
          </label>

          <p className="text-sm text-gray-400 mt-2">
            PNG, JPG supported
          </p>
        </div>

        {/* Preview */}
        {preview && (
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-2">Preview</p>

            <img
              src={preview}
              alt="preview"
              className="w-48 h-48 object-cover rounded-lg mx-auto shadow"
            />
          </div>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-medium disabled:bg-gray-400"
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>

        {/* Uploaded Image */}
        {uploadedImage && (
          <div className="mt-8 text-center">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Uploaded Image
            </h2>

            <img
              src={uploadedImage}
              alt="uploaded"
              className="w-48 h-48 object-cover rounded-lg mx-auto shadow-lg"
            />
          </div>
        )}

      </div>

    </div>
  );
}

export default App;