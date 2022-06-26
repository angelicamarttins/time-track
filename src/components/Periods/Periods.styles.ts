import colors from '../../Theme/colors'
import styled from 'styled-components'

export const StyledPeriods = styled.div`
  display: flex;
  justify-content: space-between;
  
  padding: 1rem;
  border-radius: 10px;
  background-color:${colors.backgroundCardsLinks};

  @media (min-width: 850px) {
    flex-direction: column;
  }
`

export const Links = styled.a`
  padding: 0.25rem;
  margin: 0.25rem;
  font-size: 0.85rem;
  color: ${colors.fontLinksAndHoverCards};
  cursor: pointer;

  &:hover {
    color: white;
  }
`