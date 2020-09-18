import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import GridCol from 'components/GridCol';
import GridRow from 'components/GridRow';
import { Title, Subtitle, AccentTitle } from 'styledComponents';
import CtaButton from 'components/CtaButton';
import { ChevronRight } from 'icons';
import { PRODUCTS_NAME } from 'data/navLinks';

const bounce = keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  10% {
    transform: translateX(-10px);
  }

  50% {
    transform: translateX(10px);
  }

  70% {
    transform: translateX(-10px);
  }

  70% {
    transform: translateX(0);
  }
`;

const WhiteTitle = styled(Title)`
  color: #fff;
  hr {
    width: 65px;
    border-bottom: 5px solid #fff;
  }
`;

const InsuranceAccentTitle = styled(AccentTitle)`
  color: #fff;
  margin-bottom: 8px;
  hr {
    width: 65px;
    border-bottom: 5px solid #fff;
  }
`;

const InsuranceAccentSubTitle = styled(Subtitle)`
  color: #fff;
  font-weight: 700;
  line-height: 35px;
`;

const NavLink = styled(Subtitle)`
  color: #fff;
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  padding: 6px 0;
  font-weight: 700;

  ${({ selected }) => selected && `color: #D84713;`}
`;

const WhiteLink = styled(Subtitle)`
  color: #fff;
  text-decoration: none;
  display: block;
  margin: 18px 0;
`;

const ImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const AlternateCtaButton = styled(CtaButton)`
  background-color: #d84713;
`;

const ProductVerticalRightStyle = styled.div`
  ${({ visible }) =>
    visible &&
    css`
      animation: 0.55s ${bounce} backwards;
    `}
`;

const ProductVerticalRight = (props) => {
  const { selectedInnerVertical } = props;

  const name = selectedInnerVertical?.name || '';
  const ctaText = selectedInnerVertical?.ctaText || '';
  const img = selectedInnerVertical?.image || '';
  const alt = selectedInnerVertical?.alt || '';
  const columns = selectedInnerVertical?.columns || [];

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 550);
  }, [selectedInnerVertical]);

  return (
    <ProductVerticalRightStyle visible={visible}>
      <GridRow desktop={8}>
        <GridCol desktop={4} style={{ display: 'grid', height: 400, marginTop: 40 }}>
          <div style={{ height: 388 }}>
            <InsuranceAccentTitle size="24">{name} Insurance</InsuranceAccentTitle>
            <InsuranceAccentSubTitle size="18">
              Easy streamlined process. We do the work so you dont have to.{' '}
            </InsuranceAccentSubTitle>
            <div style={{ textAlign: 'right', paddingTop: 5 }}>
              <ImageStyle src={img} alt={alt} style={{ height: 226 }} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <AlternateCtaButton style={{ width: 250 }}>
                <Title size="15" style={{ paddingRight: 3 }}>
                  {ctaText}
                </Title>
                <ChevronRight />
              </AlternateCtaButton>
            </div>
          </div>
        </GridCol>
        {columns.map((column) => (
          <GridCol desktop={2} style={{ display: 'grid', height: 400, marginTop: 40 }}>
            <div key={column.id}>
              <WhiteTitle size="18">{column.name}</WhiteTitle>
              {column.links.map((link) => (
                <a href={link.href} style={{ textDecoration: 'none' }}>
                  <WhiteLink size="14" key={link.id} href={link.href}>
                    {link.name}
                  </WhiteLink>
                </a>
              ))}
            </div>
          </GridCol>
        ))}
      </GridRow>
    </ProductVerticalRightStyle>
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
    <GridRow>
      <GridCol desktop={4} style={{ marginTop: 40, marginBottom: 60, borderRight: '0.5px solid #fff' }}>
        <WhiteTitle size="24" style={{ marginBottom: 8 }}>
          Insurance
          <hr align="left" />
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
      </GridCol>
      <GridCol desktop={8}>
        <ProductVerticalRight selectedInnerVertical={selectedInnerVertical} />
      </GridCol>
    </GridRow>
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
