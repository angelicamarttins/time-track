import { Data } from '../../Types/types'
import ExerciseImg from '../../assets/images/icon-exercise.svg'
import { FunctionComponent, useContext } from 'react'
import PlayImg from '../../assets/images/icon-play.svg'
import SelfCareImg from '../../assets/images/icon-self-care.svg'
import SocialImg from '../../assets/images/icon-social.svg'
import StudyImg from '../../assets/images/icon-study.svg'
import { StyledContainer } from './Container.styles'
import { TimeTrackCards } from '../TimeTrackCards/TimeTrackCards'
import WorkImg from '../../assets/images/icon-work.svg'

type ContainerProps = {
	data: Data[]
	period: string
}

const images = [WorkImg, PlayImg, StudyImg, ExerciseImg, SocialImg, SelfCareImg]

export const Container: FunctionComponent<ContainerProps> = ({
	data,
	period
}) => {
	
	return (
		<StyledContainer>
			{data.map(({ title, timeframes }: Data, index: number) => (
				<TimeTrackCards
					key={title}
					title={title}
					image={images[index]}
					timeframes={timeframes}
					period={period}
				/>
			))}
		</StyledContainer>
	)
}
