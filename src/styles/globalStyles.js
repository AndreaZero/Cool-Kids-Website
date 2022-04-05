import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "center")};
  align-items: ${({ ai }) => (ai ? ai : "center")};
  background-color: ${({ test }) => (test ? "" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const openseaContainer = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "center")};
  align-items: ${({ ai }) => (ai ? ai : "center")};
  background-color: ${({ test }) => (test ? "" : "none")};
  width: 10%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;
export const mintContainer = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "center")};
  align-items: ${({ ai }) => (ai ? ai : "center")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const ContainerLogo = styled.div`
box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
border: 0px dashed var(--secondary);
border-radius: 15%;
width: 200px;
@media (min-width: 900px) {
  width: 250px;
}
@media (min-width: 1000px) {
  width: auto;
}
transition: width 0.5s;
`;

export const ContainerTwitter = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 1)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "center")};
  align-items: ${({ ai }) => (ai ? ai : "center")};
  width: 40%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  border: none;
`;

export const ContainerInstagram = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 1)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "center")};
  align-items: ${({ ai }) => (ai ? ai : "center")};
  width: 40%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  border: none;
`;

export const ContainerCollapseText = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 1)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "center")};
  align-items: ${({ ai }) => (ai ? ai : "center")};
  width: 40%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  border: 5px;
`;

export const TextTitle = styled.p`
  color: var(--primary-text);
  font-size: 22px;
  font-weight: 500;
  line-height: 1.6;
`;

export const TextFounders = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
`;

export const TextSubTitle = styled.p`
  color: var(--primary-text);
  font-size: 18px;
  line-height: 1.6;
`;

export const TextDescription = styled.p`
  color: var(--primary-text);
  font-size: 16px;
  line-height: 1.6;
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;
