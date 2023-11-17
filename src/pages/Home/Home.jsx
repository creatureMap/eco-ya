import KakaoMap from "../../components/kakaomap.jsx";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

function Home() {
  return (
    <Container>
      <KakaoMap />
    </Container>
  );
}

export default Home;
