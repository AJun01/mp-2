import styled from 'styled-components';

export const ImageWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ImageTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

export const InfoWrapper = styled.div`
  margin-top: 20px;
  font-size: 1rem;
  color: #555;
  text-align: left;
  p {
    margin: 5px 0;
  }
  strong {
    font-weight: bold;
  }
`;
