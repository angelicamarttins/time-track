import colors from '../../Theme/colors'
import styled from 'styled-components'

type StyledTimeTrackCardsProps = {
	color: Colors
}

export enum Colors {
	Work = 'Work',
	Play = 'Play',
	Exercise = 'Exercise',
	Social = 'Social',
	'Self Care' = 'Self Care'
}

export const StyledTimeTrackCards = styled.div<StyledTimeTrackCardsProps>`
	min-width: 260px;
	border-radius: 50%;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	background-color: ${({ color }) => colors[color]};
	

	@media (min-width: 850px) {
		min-width: 200px;
	}
`

export const HeaderCard = styled.div<StyledTimeTrackCardsProps>`
	display: flex;
	justify-content: end;
	align-items: center;
	height: 30px;
	overflow: hidden;
	background-color: ${({ color }) => colors[color]};
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;

	img {
		width: 45px;
		padding-right: 1rem;
	}
`
export const MainDataCard = styled.div`
	border-radius: 15px;
	background-color: ${colors.backgroundCardsLinks};
	/* min-width: 202px; */

	&:hover {
		background-color: ${colors.fontLinksAndHoverCards};
	}
`

export const TitleCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.25rem 1rem 0 1rem;

	img {
		cursor: pointer;

		&:hover {
			filter: brightness(10);
		}
	}

	h2 {
		font-size: 1rem;
		font-weight: 500;
	}
`

export const DataCard = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 1rem 1rem 1rem;

	p {
		font-size: 2rem;
		font-weight: 300;
		margin: 0;
	}

	p:last-child {
		color: ${colors.fontPreviousHours};
		font-size: 0.75rem;
		margin: 0.75rem 0;
	}

	@media (min-width: 850px) {
		flex-direction: column;
		padding: 1rem;

		p {
			font-size: 2.25rem;
		}
	}
`
