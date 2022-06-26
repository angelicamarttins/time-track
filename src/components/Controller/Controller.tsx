import { AsideCards, MainCards, StyledController } from './Controller.styles'
import { useEffect, useState } from 'react'

import { Container } from '../Container/Container'
import { Data } from '../../Types/types'
import { Periods } from '../Periods/Periods'
import { User } from '../User/User'

export const Controller = () => {
	const [data, setData] = useState<Data[]>([] as Data[])
	const [period, setPeriod] = useState<string>('weekly')
	
	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json'
		)
			.then((response) => response.json())
			.then((json) => setData(json))
	}, [])

	return (
		<StyledController>
			<AsideCards>
				<User />
				<Periods handlePeriod={setPeriod} />
			</AsideCards>

			<MainCards>
				<Container data={data} period={period} />
			</MainCards>
		</StyledController>
	)
}
