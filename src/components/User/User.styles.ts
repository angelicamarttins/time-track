import colors from '../../Theme/colors'
import styled from 'styled-components'

export const StyledUser = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
  
	background-color: ${colors.backgroundUser};
	padding: 1rem;
	border-radius: 10px;

	img {
		width: 50px;
		border: 3px solid white;
		border-radius: 50%;
		/* margin-bottom: 1.75rem; */
	}

	p {
		margin: 0;
		font-size: 0.75rem;
		color: ${colors.fontPreviousHours};
	}

	p:last-child {
    margin-top: 0.25rem;
		font-size: 1.25rem;
		font-weight: 300;
		color: white;
	}

	@media (min-width: 850px) {
    display: block;
    padding: 1.5rem 0 3.5rem 1.5rem;
    max-width: 225px;
    
    img {
      width: 65px;
    }

    p {
      margin-top: 2rem;
    }

    p:last-child {
		  font-size: 2.25rem;
	  }
	}
`
