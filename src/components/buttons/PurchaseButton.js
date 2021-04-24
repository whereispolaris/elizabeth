import React from "react";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";
import { Link } from "react-router-dom";
import image from "../../static/images/icons/credit.svg";
import ring from "../../static/images/icons/icon-ring.svg";

export default function PurchaseButton(props) {
  const { title, subtitle } = props;
  return (
    <Link to="page-2">
      <Wrapper>
        <IconWrapper>
          <Icon src={image} />
          <Ring src={ring} />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Learn to Code"}</Title>
          <Subtitle>{subtitle || "$19 per month"}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  max-width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  gap: 20px;
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`;

const Title = styled(Caption2)`
  color: black;
`;
const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`;

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;
`;

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;
`;

const Icon = styled.img`
  width: 29px;
  height: 29px;
`;
