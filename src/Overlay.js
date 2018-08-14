import React from 'react';
import styled, { css } from 'styled-components';

const TextDiv = styled.div`
	height: 205px;
`;

const Header = ({className, children}) => {
	return (
		<header>
			<div className={className}>
				{children}
			</div>
		</header>
	);
};

export const StyledHeader = styled(Header)`
	box-sizing: border-box;
	font-size: 16px;
	color: rgba(0, 0, 0, 0);
	height: 223px;

	${props => props.imageUrl && css`
		background-image: url(${props.imageUrl});
		background-origin: padding-box;
		background-size: cover;
		background-position-x: ${props => props.backgroundPositionX ? props.backgroundPositionX : ''};
		background-position-y: ${props => props.backgroundPositionY ? props.backgroundPositionY : ''};
		padding: 250px 0px;
		text-align: center;
		position: relative;
	`};
`;
