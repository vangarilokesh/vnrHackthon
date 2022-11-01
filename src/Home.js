import React,{useState, useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

export default function UploadImages(){
  const [images, setImages]=useState([]);
  const [imagesURLs,setImageURLs]=useState([]);

  useEffect(()=>{
    if(images.length<1) return;
    const newImageUrls=[];
    images.forEach(image=>newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  },[images]);

  function onImageChange(e){
    setImages([...e.target.files]);
  }

  return(
    <>
      <br/><br/><br/><br/>
      <input type="file" multiple accept="image*" onChange={onImageChange} />
      <br/><br/><br/><br/>
      {imagesURLs.map(imageSrc=><img src={imageSrc}  className="img-fluid mw-50 mh-50"/>)}
    </>
  );
}