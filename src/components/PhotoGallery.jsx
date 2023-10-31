"use client";
import ImageGallery from "react-image-grid-gallery";

const imagesArray = [
  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "http://example.com/image1.jpg",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "http://example.com/image2.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "http://example.com/image3.webp",
  },
];

export default function PhotoGallery() {
  return (
    <div>
        <ImageGallery imgArray={imagesArray} columnWidth={230} gapSize={24} />
    </div>
  
  
  
  );
}