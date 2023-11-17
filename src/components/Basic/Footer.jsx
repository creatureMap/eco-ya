import styles from "styled-components";
import logo from "../../assets/logo_eco.png";

const FooterWrapper = styles.footer`
    position: relative;
    margin-top: 20px;
	width: fill-available;
	height: 150px;
    padding: 0px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #FFFFFF;
`;

const FooterTextBox = styles.div`
  display: flex;
  flex-direction: column;
`;

const FooterBox = styles.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	color: white;
`;

const FooterImg = styles.img`
	width: 150px;
	height: 75px;
	object-fit: contain;
`;

const P = styles.p`
    color:#1AAB0E;
	font-size: 0.8rem;
    margin: 0.5rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterBox>
        <FooterImg src={logo} alt="DeepScience X 로고" />
        <FooterTextBox>
          <P>에코야 ECO</P>
          <P>팀 이름: 고려대학교 에코브릿지</P>
          <P>팀 소개: 김대연 김의찬 민선익 박병영 박소연 박소현 이동규</P>
        </FooterTextBox>
        <FooterTextBox>
          <P>연락처: 010-1234-5678</P>
          <P>메일: edu@ecoya.save</P>
          <P>All Right Reserved 2023.</P>
        </FooterTextBox>
      </FooterBox>
    </FooterWrapper>
  );
}
