import React from "react";

const CottageInfos = ({
  nextStep,
  handleChange,
  values,
  prestations,
  regions,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <div>
        <label>
          Adresse du logement
          <input
            type="text"
            placeholder="Adresse du logement"
            value={values.adress}
            onChange={handleChange("adress")}
          />
        </label>
        <label>
          Choix d'une region
          <select
            name="regions"
            onChange={handleChange("id_regions")}
            value={values.id_regions}
          >
            {regions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Ville
          <input
            type="text"
            placeholder="Ville du logement"
            value={values.city}
            onChange={handleChange("city")}
          />
        </label>
        <label>
          Code postal du logement
          <input
            type="text"
            placeholder="Code postal du logement"
            value={values.code_postal}
            onChange={handleChange("code_postal")}
          />
        </label>
      </div>
      <div>
        <label>
          Voyageurs
          <input
            type="number"
            value={values.max_personnes}
            onChange={handleChange("max_personnes")}
          />
        </label>
      </div>
      <div>
        <label>
          Choix d'une prestation
          <select
            name="categorie"
            onChange={handleChange("id_prestation")}
            value={values.id_prestation}
          >
            {prestations.map((prestation) => (
              <option key={prestation.id} value={prestation.id}>
                {prestation.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button onClick={Continue}>Suivant</button>
    </div>
  );
};

export default CottageInfos;
