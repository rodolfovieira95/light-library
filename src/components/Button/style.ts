import styled, { css } from "styled-components";
import { ButtonProps } from ".";
import { hexToRgb } from "../../utils/convert";

// Sizes Definitions
const xsProps = css`
  font-size: ${({ theme }) => theme?.font?.fontSizes.xs};
  padding: ${({ theme }) => `0 ${theme?.spacing?.[2]}`};
  height: ${({ theme }) => theme?.spacing?.[6]};
`;
const smProps = css`
  font-size: ${({ theme }) => theme?.font?.fontSizes.sm};
  padding: ${({ theme }) => `0 ${theme?.spacing?.[3]}`};
  height: ${({ theme }) => theme?.spacing?.[8]};
`;
const mdProps = css`
  font-size: ${({ theme }) => theme?.font?.fontSizes.md};
  padding: ${({ theme }) => `0 ${theme?.spacing?.[4]}`};
  height: ${({ theme }) => theme?.spacing?.[10]};
`;
const lgProps = css`
  font-size: ${({ theme }) => theme?.font?.fontSizes.lg};
  padding: ${({ theme }) => `0 ${theme?.spacing?.[6]}`};
  height: ${({ theme }) => theme?.spacing?.[16]};
`;

// Variants Definitions
const primaryProps = css`
  border: none;
  background-color: ${({ theme }) => theme?.colors?.primary};
  color: ${({ theme }) => theme?.colors?.background};
`;

const secondaryProps = css`
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
`;

const ghostProps = css`
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => {
      const rgbColors = hexToRgb(theme.colors.primary);
      return `rgba(${rgbColors?.r},${rgbColors?.g},${rgbColors?.b},0.2)`;
    }};
  }
`;

const linkProps = css`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
`;

export const RootButton = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme?.font?.fontFamilies.body};
  font-weight: ${({ theme }) => theme?.font?.fontWeights.semibold};
  border-radius: ${({ theme }) => theme?.spacing?.["1-5"]};

  cursor: pointer;

  // Variants selection
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return primaryProps;
      case "secondary":
        return secondaryProps;
      case "ghost":
        return ghostProps;
      case "link":
        return linkProps;
    }
  }}

  // Sizes selection
  ${({ size }) => {
    switch (size) {
      case "xs":
        return xsProps;
      case "sm":
        return smProps;
      case "md":
        return mdProps;
      case "lg":
        return lgProps;
    }
  }}
`;
