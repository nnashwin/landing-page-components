import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	max-width: 900px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	text-align: left;
	padding: 0px 40px;
	height: 100%;
`;

const StyledNavButton = styled.a`
	&:-moz-focus-inner { border: 0; padding: 0; margin:0; }
	background-color: rgb(0, 123, 255);
	border-radius: 8px;
	border: 0px solid rgb(0, 123, 255);
	padding: 0px 8px;
	cursor: pointer;
	color: white;
	height: 40px;
	font-size: 20px;
	&:hover {
		background-color: #0069d9;
		border-color: #0062cc;
		transition: background-color .15s ease-in-out;
	}
	display: flex;
	align-items: center;
`;

const StyledNavLink = styled.a`
	font-size: 20px;
	height: 40px;
	display: flex;
	align-items: center;
`;
	
const Navbar = ({className, links}) => {
	return (
		<nav className={className}>
			<Container>
				{links.map((link) => {
					let {href, text, isButton} = link;
					return (isButton ? <StyledNavButton>{text}</StyledNavButton> : <StyledNavLink href={href}>{text}</StyledNavLink>);
				})}
			</Container>
		</nav>
	);
};

export const StyledNav = styled(Navbar)`
	display: flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	height: 60px;
`;
