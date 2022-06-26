import colors from '../../Theme/colors'
import styled from 'styled-components'

export const StyledController = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	margin: auto;

	@media (min-width: 850px) {
		flex-direction: row;
		position: absolute;
		left: 5%;
		top: 45%;
		bottom: 50%;
		width: 90%;
	}
`

export const AsideCards = styled.aside`
	min-width: 260px;
	background-color: ${colors.backgroundCardsLinks};
	border-radius: 15px;

	@media (min-width: 850px) {
		min-width: 200px;
	}
`

export const MainCards = styled.main`
	margin: 2rem;
`
