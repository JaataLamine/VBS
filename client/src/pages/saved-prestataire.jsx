import { useEffect, useState } from "react";

export const SavedPrestataire = () => {
  const [prestataires, setPrestataires] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChecked = async () => {
    await fetch("/api/prestataire/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    setIsValid(!isValid);
  };
  console.log(isValid);

  const handlePrestataire = async () => {
    await fetch("/api/prestataire");
  };

  useEffect(() => {
    const fetchPrestataires = async () => {
      setLoading(true);
      const res = await fetch("/api/prestataire/pending");
      const resData = await res.json();
      setPrestataires(resData);
      setLoading(false);
    };
    fetchPrestataires();
  }, []);

  return (
    <div className="mb-10 p-3 max-w-lg mx-auto">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table-auto border-collapse border border-slate-400">
          <caption className="caption-top text-3xl text-center font-semibold my-7">
            Prestataire en attente de validation
          </caption>
          <thead>
            <tr>
              <th className="border border-slate-700">Nom</th>
              <th className="border border-slate-700">Adresse</th>
              <th className="border border-slate-700">Telephone</th>
              <th className="border border-slate-700">Service</th>
              <th className="border border-slate-700">Validate</th>
              <th className="border border-slate-700">Confirmer</th>
            </tr>
          </thead>
          <tbody>
            {prestataires.map((prestataire, idx) => (
              <tr key={idx}>
                <td className="border border-slate-700">{prestataire.name}</td>
                <td className="border border-slate-700">
                  {prestataire.address}
                </td>
                <td className="border border-slate-700">{prestataire.phone}</td>
                <td className="border border-slate-700">
                  {prestataire.serviceID}
                </td>
                <td className="border border-slate-700">
                  <input
                    type="checkbox"
                    name="validation"
                    value={isValid}
                    onChange={handleChecked}
                  />
                  <input type="text" value={prestataire.id} hidden />
                </td>
                <td>
                  <button
                    onClick={handlePrestataire}
                    className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                  >
                    Confirmer prestataire
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
