import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Title, Text } from 'styledComponents';
import saveForRetirement from 'assets/save_for_retirement.png';
import CtaButton from './CtaButton';
import { ChevronRight } from 'icons';

const WhiteTitle = styled(Title)`
  color: #fff;
`;

const WhiteText = styled(Text)`
  color: #fff;
`;

const NavLink = styled(Text)`
  color: #fff;
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  padding: 6px 0;

  ${({ selected }) => selected && `color: #D84713;`}
`;

const HeaderLeft = styled.div`
  //   width: 368px;
`;

const ImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const AlternateCtaButton = styled(CtaButton)`
  background-color: #d84713;
`;

const ProductVerticalRight = (props) => {
  const { selectedInnerVertical } = props;

  const name = selectedInnerVertical?.name || '';
  const ctaText = selectedInnerVertical?.ctaText || '';

  return (
    <div style={{ marginLeft: 300 }}>
      <WhiteTitle size="24">{name} Insurance</WhiteTitle>
      <WhiteText size="18">Easy streamlined process. We do the work so you dont have to. </WhiteText>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ImageStyle src={saveForRetirement} alt="Save for retirement" />
        <AlternateCtaButton style={{ width: 200 }}>
          <Title size="15" style={{ paddingRight: 3 }}>
            {ctaText}
          </Title>
          <ChevronRight />
        </AlternateCtaButton>
      </div>
    </div>
  );
};

const ProductVerticalLeft = (props) => {
  const { selectedVertical } = props;
  const navLinks = selectedVertical?.children || [];

  const [selectedInnerVertical, setSelectedInnerVertical] = useState(navLinks?.[0]);
  useEffect(() => {
    setSelectedInnerVertical(navLinks?.[0]);
  }, [navLinks]);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 120 }}>
        <WhiteTitle size="24" style={{ marginBottom: 20 }}>
          Insurance
        </WhiteTitle>
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.id}
            size="18"
            selected={selectedInnerVertical?.id === navLink.id}
            onMouseEnter={() => setSelectedInnerVertical(navLink)}
          >
            {navLink.name}
          </NavLink>
        ))}
      </div>
      <ProductVerticalRight selectedInnerVertical={selectedInnerVertical} />
    </div>
  );
};

const HeaderContent = (props) => {
  const { selectedVertical, ...other } = props;
  const SelectedVertical = ProductVerticalLeft;
  return (
    <div>
      <HeaderLeft {...other}>
        <SelectedVertical selectedVertical={selectedVertical} />
      </HeaderLeft>
    </div>
  );
};

export default HeaderContent;
