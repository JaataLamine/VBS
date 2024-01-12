export const CreatePrestataire = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        Create Prestataire
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          id="name"
          placeholder="Nom du prestataire"
          className="border p-3 rounded-lg"
        />
        <input
          type="text"
          id="address"
          placeholder="Adresse"
          className="border p-3 rounded-lg"
        />
        <input
          type="number"
          id="phone"
          placeholder="Numero de telephone"
          className="border p-3 rounded-lg"
        />
        <select id="profession" className="border p-3 rounded-lg">
          <option value="">--Choisir un metier--</option>
          <option value="menage">Menage</option>
          <option value="lingerie">Lingerie</option>
          <option value="livreur">Livreur</option>
          <option value="etude">Etude</option>
          <option value="traiteur">Traiteur</option>
          <option value="menuiserie">Menuiserie</option>
          <option value="plomberie">Plomberie</option>
          <option value="mecanique">Mecanique</option>
        </select>
      </form>
    </div>
  );
};
