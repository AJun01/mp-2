import React from "react";
import { ImageWrapper, Image, ImageTitle, InfoWrapper } from "./StyledRoboImage";

function RoboImage({ data }) {
  return (
    <ImageWrapper>
      <ImageTitle>Here is your Robo Image:</ImageTitle>
      <Image src={data.imageUrl} alt={`Generated Robo Image: ${data.name}`} />
      <InfoWrapper>
        <p><strong>ID:</strong> {data.id}</p>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Generated At:</strong> {data.timestamp}</p>
        <p><strong>Image Size:</strong> {data.size}</p>
      </InfoWrapper>
    </ImageWrapper>
  );
}

export default RoboImage;
