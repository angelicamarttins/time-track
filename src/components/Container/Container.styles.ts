import styled from 'styled-components'

export const StyledContainer = styled.div`
	display: grid;
	/* grid-template-rows: repeat(1, 1fr); */
	/* grid-template-columns: repeat(3, minmax(150px, 33%)); */
	gap: 1rem;
	width: 80%;

	@media (min-width: 850px) {
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(3, minmax(150px, 33%));
		gap: 2rem 5rem;
	}
`
