function ImageItem({ img }) {
  console.log(img);
  return (
    <div>
      <img
        className="imageItem"
        src={img.urls.small}
        alt={img.alt_description}
      />
    </div>
  );
}

export default ImageItem;
