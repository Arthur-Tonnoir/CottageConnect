import React from 'react'

const CottagePhotos = ({handleSubmit, handleFile}) => {

  return (
    <div>
      <form encType='multipart/form-data'>
      <label>Photo
        <input 
          type="file"
          name='photo'
          onChange={handleFile}
        />
      </label>
      <button onClick={ handleSubmit }>Envoyer</button>
      </form>
    </div>
  )
}

export default CottagePhotos