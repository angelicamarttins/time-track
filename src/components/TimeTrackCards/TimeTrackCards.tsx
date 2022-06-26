import {
	Colors,
	DataCard,
	HeaderCard,
	MainDataCard,
	StyledTimeTrackCards,
	TitleCard
} from './TimeTrackCards.styles'
import { FunctionComponent, useEffect, useState } from 'react'

import { Timeframes } from '../../Types/types'
import ellipsis from '../../assets/images/icon-ellipsis.svg'

type TimeTrackCardsProps = {
	image: string
	title: string
	timeframes: Timeframes
	period: string
}

export const TimeTrackCards: FunctionComponent<TimeTrackCardsProps> = ({
	title,
	image,
	timeframes,
	period
}) => {
	const { daily, weekly, monthly } = timeframes
	const [previousHours, setPreviousHours] = useState(weekly.previous)
	const [currentHours, setCurrentHours] = useState(weekly.current)
	const [currentPeriod, setCurrentPeriod] = useState('Week')

	useEffect(() => {
		getPeriod()
	}, [period])

	function getPeriod() {
		switch (period) {
			case 'daily':
				setPreviousHours(daily.previous)
				setCurrentHours(daily.current)
				setCurrentPeriod('Day')
				break

			case 'weekly':
				setPreviousHours(weekly.previous)
				setCurrentHours(weekly.current)
				setCurrentPeriod('Week')
				break

			case 'monthly':
				setPreviousHours(monthly.previous)
				setCurrentHours(monthly.current)
				setCurrentPeriod('Month')
				break
		}
	}

	return (
		<StyledTimeTrackCards color={title as Colors}>
			<HeaderCard color={title as Colors}>
				<img src={image} alt={title} />
			</HeaderCard>
			<MainDataCard>
				<TitleCard>
					<h2>{title}</h2>
					<img src={ellipsis} alt={title} />
				</TitleCard>
				<DataCard>
					<p>{currentHours}hrs</p>
					<p>
						Last {currentPeriod} - {previousHours}hrs
					</p>
				</DataCard>
			</MainDataCard>
		</StyledTimeTrackCards>
	)
}
