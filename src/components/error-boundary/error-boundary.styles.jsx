import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #546a7b;
  animation: bounce 1s infinite;
  @keyframes bounce {

            0%,
            100% {
                transform: translateY(-25%);
            }
    
            50% {
                transform: translateY(0);
            }
        }
`;

export const HomePageLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background: #546a7b;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s ease-in-out;

  &:hover {
      transform: scale(1.1);
      color: black;
      background: #778da9;
  }
`