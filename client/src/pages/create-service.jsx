import { useState } from "react";

// Page de creation de service
export const CreateService = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    const data = new FormData();
    data.set("name", name);
    data.set("description", description);
    data.set("imageUrl", imageUrl[0]);
    e.preventDefault();
    // setLoading(true);
    const res = await fetch("/api/service/create", {
      method: "POST",
      body: data,
    });
    await res.json();
    // setLoading(false);
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <h1 className="text-3xl text-center font-semibold my-7">
          Creer un nouveau service
        </h1>
        <input
          id="name"
          type="text"
          value={name}
          placeholder="Nom du service"
          className="border p-3 rounded-lg"
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          id="description"
          value={description}
          rows={5}
          placeholder="Description du service"
          className="border p-3 rounded-lg"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label htmlFor="imageUrl">Inserer une image : </label>
        <input
          id="imageUrl"
          type="file"
          accept="image/*"
          className="p-3 rounded-lg"
          onChange={(e) => setImageUrl(e.target.files)}
        />
        <button
          // disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {/* {loading ? "Loading..." : "Ajouter Service"} */}
          Ajouter Service
        </button>
      </form>
      {/* {error && (
        <p className="text-red-500 mt-5 text-center font-semibold">{error}</p>
      )} */}
    </div>
  );
};
