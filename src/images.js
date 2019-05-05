import React from 'react';
import Lightbox from 'react-images';

export default class Sample extends React.Component {
  
  render() {
    return (
      <Lightbox
        images={[{ src: 'images/data_normalization_correction.xls.png' }, { src: 'http://example.com/img2.jpg' }]}
        onClose={()=>{alert("test");}}
      />
    );
  }
}