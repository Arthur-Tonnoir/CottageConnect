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
    <div className="caseGlobal">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77824581129!2d2.264634977882136!3d48.858938434568685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1688992494367!5m2!1sfr!2sfr"
          // width="40%"
          // height="500"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        
      <div className="caseInfos">
        <h2 className="titre">Parlez-nous de votre logement.</h2>
        <label className="ddeAdresse">
          Adresse du logement
          <br/>
          <br/>
          <input className="adresse"
            type="text"
            placeholder="Adresse du logement"
            value={values.adress}
            onChange={handleChange("adress")}
          />
        </label>
        <br></br>
        {/* <label>
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
        </label> */}
        {/* <label>
          Ville
          <input
            type="text"
            placeholder="Ville du logement"
            value={values.city}
            onChange={handleChange("city")}
          />
        </label> */}
        {/* <label>
          Code postal du logement
          <input
            type="text"
            placeholder="Code postal du logement"
            value={values.code_postal}
            onChange={handleChange("code_postal")}
          />
        </label> */}
        <label className="ddeAdresse">Informations supplémentaires</label>
        <br/>
  <div className="infosup">
      <div className="autresInfos autresInfos2">
        <div className="labels">
        <label>
          Voyageurs
          </label>
        
          {/* <input
            type="number"
            value={values.max_personnes}
            onChange={handleChange("max_personnes")}
          /> */}
        <label>
          Chambres
        </label>
        <label>
          Lits
        </label>
        <label>
          Salles de bain
        </label>
        </div>

<div className="inputs">
  <div>
  <input type="button" value="-" class="button-minus" data-field="quantity"/>
  <input type="number" step="1" max="5" value="1" name="quantity" class="quantity-field"/>
  <input type="button" value="+" class="button-plus" data-field="quantity"/>
  </div>      
  <div>
  <input type="button" value="-" class="button-minus" data-field="quantity"/>
  <input type="number" step="1" max="5" value="1" name="quantity" class="quantity-field"/>
  <input type="button" value="+" class="button-plus" data-field="quantity"/>
  </div>
  <div>
  <input type="button" value="-" class="button-minus" data-field="quantity"/>
  <input type="number" step="1" max="5" value="1" name="quantity" class="quantity-field"/>
  <input type="button" value="+" class="button-plus" data-field="quantity"/>
  </div>
  <div>
  <input type="button" value="-" class="button-minus" data-field="quantity"/>
  <input type="number" step="1" max="5" value="1" name="quantity" class="quantity-field"/>
  <input type="button" value="+" class="button-plus" data-field="quantity"/>
  </div>     
  </div>

      </div>

        {/* <label>
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
        </label> */}
        <div className="autresInfos">
          <div className="autreLabel">
            <label>Wi-fi</label>
            <label>Parking gratuit</label>
            <label>Climatisation</label>
            <label>Piscine/Jaccuzi</label>
            </div>

            <div className="autreInput">
            <input type="radio" id="wifi" name="wifi" value={1}/>
            <input type="radio" id="parking" name="parking" value={2}/>
            <input type="radio" id="clim" name="clim" value={3}/>
            <input type="radio" id="piscine" name="piscine" value={4}/>
            </div>
      </div>

    </div>
      </div></div>
      // <button onClick={Continue}>Suivant</button>
  );
};

export default CottageInfos;
