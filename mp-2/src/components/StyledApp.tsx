import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  box-sizing: border-box;
`;

export const InputField = styled.input`
  padding: 15px;
  font-size: 18px;
  margin-right: 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
  width: 250px;
  margin-bottom: 20px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 0 8px rgba(72, 174, 89, 0.5);
  }
`;

export const Button = styled.button`
  padding: 12px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  width: 250px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;

export const Message = styled.p`
  font-size: 1.2rem;
  color: #777;
  margin-top: 20px;
  text-align: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

