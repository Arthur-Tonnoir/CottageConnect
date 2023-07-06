import React from 'react'

const CottageInfos = ({nextStep, handleChange, values, regions}) => {
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <div>
    <div>
      <label>Adresse du logement
        <input 
          type="text" 
          placeholder="Adresse du logement" 
          value={values.adress} 
          onChange={handleChange('adress')}
        />
      </label>
      <label>Choix d'une region
              <select 
                name="regions"
                onChange={handleChange('id_regions')}
                value={values.id_regions}
              >
                {regions.map(region => (
                  <option key={region.id} value={region.id}>
                    {region.name}
                  </option>
                ))}
              </select>
            </label>
      <label>Ville
        <input 
          type="text" 
          placeholder="Ville du logement" 
          value={values.city} 
          onChange={handleChange('city')}
        />
      </label>
      <label>Code postal du logement
        <input 
          type="text" 
          placeholder="Code postal du logement" 
          value={values.cp} 
          onChange={handleChange('cp')}
        />
      </label>
        </div>
        <div>
      <label>Voyageurs
        <input 
          type="number"
          value={values.max_personnes} 
          onChange={handleChange('max_personnes')}
        />
      </label>
      <label>Chambres
        <input 
          type="number"
          value={values.room_count} 
          onChange={handleChange('room_count')}
        />
      </label>
      <label>Lits
        <input 
          type="number"
          value={values.bed_count} 
          onChange={handleChange('bed_count')}
        />
      </label>
      </div>
      <div>
      <label>Wifi
        <input 
          type="checkbox"
          value="true"
          checked={values.has_wifi} 
          onChange={handleChange('has_wifi')}
        />
      </label>
      <label>Parking gratuit
        <input 
          type="checkbox"
          value="true"
          checked={values.has_parking} 
          onChange={handleChange('has_parking')}
        />
      </label>
      <label>Climatisation
        <input 
          type="checkbox"
          value="true"
          checked={values.has_clim} 
          onChange={handleChange('has_clim')}
        />
      </label>
      <label>Piscine
        <input 
          type="checkbox"
          value="true"
          checked={values.has_pool} 
          onChange={handleChange('has_pool')}
        />
      </label>
      </div>

      <button onClick={ Continue }>Suivant</button>
    </div>
  )
}

export default CottageInfos