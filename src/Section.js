import React from 'react';
import styled from 'styled-components';
import sizes from 'point-breaks';

const IconHolder = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
	flex-wrap: wrap;
	max-width: 1140px;
`;

const IconTitle = styled.h3`
	font-size: 28px;
	text-align: center;
	font-weight: 700;
	line-height: 12px;
`;

const IconDesc = styled.p`
	font-size: 20px;
	font-weight: 300;
	line-height: 30px;
	text-align: center;
`;

const IconDiv = styled.div`
	max-width: 320px;
	padding: 20px 0;
`;

const IconPicDiv = styled.div`
	text-align: center;
`;

const IconSection = ({className}) => {
	return (
		<section className={className}>
			<IconHolder>
				<IconDiv>
					<IconPicDiv>picture</IconPicDiv>
					<IconTitle>Title</IconTitle>
					<IconDesc>These are words which will go in the first paragraph</IconDesc>
				</IconDiv>
				<IconDiv>
					<IconPicDiv>picture</IconPicDiv>
					<IconTitle>Title</IconTitle>
					<IconDesc>Use these words from the second paragrapn wisely</IconDesc>
				</IconDiv>
				<IconDiv>
					<IconPicDiv>picture</IconPicDiv>
					<IconTitle>Title</IconTitle>
					<IconDesc>I love cake from the depths of my belly</IconDesc>
				</IconDiv>
			</IconHolder>
		</section>
	);
}

export const StyledIconSection = styled(IconSection)`
	padding: 7rem 0;
`;

export const SplitSection = styled.section`
	display: flex;
	flex-flow: row wrap;
	@media (max-width: ${sizes.smallTablet.width}) {
		flex-direction: column;
		justify-content: center;
	}
`;

export const SplitPicDiv = styled.div`
	flex-basis: 50%;
	max-width: 50%;
	order: ${props => props.order === 'right' ? 2 : 1};
	min-height: 480px;
	background-image: url(${props => props.imageUrl ? props.imageUrl : ''});
	background-repeat: no-repeat;
	@media (max-width: ${sizes.smallTablet.width}) {
		width: 100%;
		max-width: 100%;
	}
`;

export const SplitTextDiv = styled.div`
	flex-basis: 50%;
	display: flex;
	flex-direction: column;
	padding: 112px;
	line-height: 24px;
	max-width: 50%;
	max-height: 480px;
	order: ${props => props.order === 'right' ? 2 : 1};
	width: 538px;
	justify-content: center;
	text-align: left;
	@media (max-width: ${sizes.smallTablet.width}) {
		width: 100%;
		max-width: 100%;
	}
`;

export const SplitTextTitle = styled.h2`
	font-size: 32px;
	line-height: 38.2px;
	margin-bottom: 8px;
	margin-top: 0px;
`;

export const SplitTextBody = styled.p`
	font-size: 20px;
	font-weight: 300;
`;

export const CenteredSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 340px;
	background-color: ${props => props.backgroundColor ? props.backgroundColor : '#0e1a2a'}
	color: ${props => props.color ? props.color : 'whitesmoke'}
`;

export const CenteredTitle = styled.h2`
	font-size: 32px;
	line-height: 38.2px;
	margin-bottom: 8px;
	margin-top: 0px;
	padding-bottom: 0.5rem;
`;

export const CenteredTextBody = styled.p`
	width: 516px;
	font-size: 20px;
	font-weight: 300;
	text-align: center;
`;

export const StyledEmailSection = styled.div`
	display: flex;
`;

export const StyledEmailInput = styled.input.attrs({
	type: 'email',
	placeholder: 'Please enter your email'
})`
	margin-right: 10px;
	width: 300px;
	color: black;
	border-radius: .3rem;
	padding: .3rem 1rem;
	height: 3rem;
`;

export const StyledSubmitButton = styled.button`
	color: white;
	padding: .3rem;
	border: 1px solid transparent;
	border-radius: .3rem;
	background-color: #007bff;
	height: 3rem;
	padding: .6rem;
	&:hover {
		background-color: #0069d9;
		transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
	}
`;

export const FooterSection = styled.section`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	min-height: 150px;
	background-color: ${props => props.backgroundColor ? props.backgroundColor : 'whitesmoke'}
	color: ${props => props.color ? props.color : 'black'}
	padding-left: 3rem;
	@media (max-width: ${sizes.smallTablet.width}) {
		justify-content: center;
		padding-left: 0;
	}
`;

export const FooterLinksDiv = styled.div`
	
`;

export const MediaLinksDiv = styled.div`
	grid-row-start: 3;
	grid-column-start: 4;
	padding: 20px 0px;
	display: flex;
`;

const Link = ({linkUrl, className, children}) => {
	return (
		<a href={linkUrl} className={className}>{children}</a>
	)
}

export const MediaLink = styled(Link)`
	padding: 0 10px;
`;

export const CopyrightText = styled.p`
	color: #6c757d !important
	font-size: 12.8px;
	font-weight: 400;
`;

export const StyledListOfLinks = styled.ul`
	list-style: none;
	padding: 0px;
	display: 'flex';
`;

export const ListLink = ({linkUrl, linkText, className}) => {
	return (
		<li className={className}>
			<a href={linkUrl}>{linkText}</a>
		</li>
	);
};

export const StyledListLink = styled(ListLink)`
	font-size: 16px
	padding-right: ${props => props && props.last ? '0px' : '20px'};
	padding-left: ${props => props && props.first ? '0px' : '20px'};
	border-right: ${props => props && props.last ? '' : '1px solid black'};
	color: rgb(0, 123, 255);
`;
