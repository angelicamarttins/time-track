import { StyledUser } from "./User.styles"
import UserImage from "./image-jeremy.png"

export const User = () => {
	return <StyledUser>
    <img src={UserImage} alt='User photo'/>
    <div>
      <p>Report for</p>
      <p>Jeremy Robson</p>
    </div>
  </StyledUser>
}
