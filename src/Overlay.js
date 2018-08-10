import React from 'react';
import styled, { css } from 'styled-components';

const TextDiv = styled.div`
	height: 205px;
`;

const Header = ({className, imageUrl}) => {
	return (
		<header className={className}>
			<div>
				<TextDiv>
					Embrace Random
				</TextDiv>
			</div>
		</header>
	);
};

export const StyledHeader = styled(Header)`
	box-sizing: border-box;
	font-size: 16px;
	color: rgba(0, 0, 0, 0);

	${props => props.imageUrl && css`
		background-image: url(${props.imageUrl});
		background-origin: padding-box;
		background-size: cover;
		padding: 192px 0px;
		text-align: center;
		position: relative;
	`};
`;
