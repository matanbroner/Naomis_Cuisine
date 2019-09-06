import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
 
class Gallery extends React.Component {
 
  render() {
 
    const images = [
      {
        original: 'https://images.squarespace-cdn.com/content/v1/58f35e4815d5db4bbe4e48f4/1493300566294-Y63ORSNVKKT358FD211K/ke17ZwdGBToddI8pDm48kKtijf5x5S0rIV7X_qDH3dB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaZbTVdO5VSPAOxIcVIbmIFLIFeVDbQiz7iBIgNCzklBDD2o6CESiqIlH5ssNFrtmA/Detached+ADU',
        thumbnail: 'https://images.squarespace-cdn.com/content/v1/58f35e4815d5db4bbe4e48f4/1493300566294-Y63ORSNVKKT358FD211K/ke17ZwdGBToddI8pDm48kKtijf5x5S0rIV7X_qDH3dB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaZbTVdO5VSPAOxIcVIbmIFLIFeVDbQiz7iBIgNCzklBDD2o6CESiqIlH5ssNFrtmA/Detached+ADU',
      },
      {
        original: 'https://sightline-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/Johnson-Cottage-by-CAST-Architecture-c-772x433.jpg',
        thumbnail: 'https://sightline-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/Johnson-Cottage-by-CAST-Architecture-c-772x433.jpg',
      },
      {
        original: 'https://hawaiihomemag.com/sites/default/files/styles/front_slideshow/public/images/02-16-ADU-Featured.jpg?itok=Zi4dz5O7',
        thumbnail: 'https://hawaiihomemag.com/sites/default/files/styles/front_slideshow/public/images/02-16-ADU-Featured.jpg?itok=Zi4dz5O7',
      },
    ];
 
    return (
      <ImageGallery
      showThumbnails={false}
      showBullets={true}
       items={images} />
    );
  }
 
}

export default Gallery
