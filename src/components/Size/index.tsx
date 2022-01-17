import React from 'react'
import styled from 'styled-components/native';
interface TextProps {
    color?: string;

}
export const TextBigger = styled.Text <TextProps> `
font-size: 22px;
font-family: 'Roboto';
color: ${({ color }) => color ? color : '#F0F0F3'};
`
export const TextBig = styled.Text<TextProps>`
font-size: 16px;
font-family: 'Roboto';
color: ${({ color }) => color ? color : '#F0F0F3'};
`
export const TextRegular = styled.Text<TextProps>`
font-size: 12px;
font-family: 'Roboto';
color: ${({ color }) => color ? color : '#F0F0F3'};
`
export const TextSmall = styled.Text<TextProps>`
font-size: 8px;
font-family: 'Roboto';
color: ${({ color }) => color ? color : '#F0F0F3'};
`

