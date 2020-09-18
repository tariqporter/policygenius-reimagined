import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Title, Text } from 'styledComponents';
import CtaButton from 'components/CtaButton';
import { ChevronRight } from 'icons';
import { PRODUCTS_NAME } from 'data/navLinks';

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

const WhiteLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: block;
  margin: 10px 0;
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
  const img = selectedInnerVertical?.image || '';
  const alt = selectedInnerVertical?.alt || '';
  const width = selectedInnerVertical?.width || 0;
  const columns = selectedInnerVertical?.columns || [];

  return (
    <div style={{ display: 'flex', marginLeft: 300 }}>
      <div>
        <div style={{ width: 300 }}>
          <WhiteTitle size="24">{name} Insurance</WhiteTitle>
          <WhiteText size="18">Easy streamlined process. We do the work so you dont have to. </WhiteText>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <ImageStyle src={img} alt={alt} style={{ width }} />
          <AlternateCtaButton style={{ width: 200 }}>
            <Title size="15" style={{ paddingRight: 3 }}>
              {ctaText}
            </Title>
            <ChevronRight />
          </AlternateCtaButton>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        {columns.map((column) => (
          <div key={column.id} style={{ margin: '0 20px' }}>
            <WhiteTitle size="24">{column.name}</WhiteTitle>
            {column.links.map((link) => (
              <WhiteLink key={link.id} href={link.href}>
                {link.name}
              </WhiteLink>
            ))}
          </div>
        ))}
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

  let SelectedVertical = null;
  if (selectedVertical?.name === PRODUCTS_NAME) {
    SelectedVertical = ProductVerticalLeft;
  } else {
    return null;
  }

  return (
    <div {...other}>
      <SelectedVertical selectedVertical={selectedVertical} />
    </div>
  );
};

export default HeaderContent;
