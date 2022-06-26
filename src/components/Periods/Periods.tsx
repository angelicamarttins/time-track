import { Links, StyledPeriods } from './Periods.styles'

import { FunctionComponent } from 'react'

type PeriodProps = {
	handlePeriod: (period: string) => void
}

export const Periods: FunctionComponent<PeriodProps> = ({ handlePeriod }) => {
	return (
		<StyledPeriods>
			<Links onClick={() => handlePeriod('daily')}>Daily</Links>
			<Links onClick={() => handlePeriod('weekly')}>Weekly</Links>
			<Links onClick={() => handlePeriod('monthly')}>Monthly</Links>
		</StyledPeriods>
	)
}
