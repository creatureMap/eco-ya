import { Map, useKakaoLoader } from "react-kakao-maps-sdk";

function KakaoMap() {
  const [error] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_API_KEY,
  });
  if (error) return <div>Loading...</div>;

  return (
    <Map
      center={{
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        width: "80%",
        height: "800px",
      }}
      level={3}
    />
  );
}

export default KakaoMap;
