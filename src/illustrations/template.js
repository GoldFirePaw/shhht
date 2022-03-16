import React from 'react';
import styled from 'styled-components';

const Sizer = styled.div`
text-align: center;
& g {
	stroke: white;
}
@media print {
	width: 50%;
	& g {
		stroke: black;
	}
}
`

export default () => (
	<Sizer id="lineDrawing">
		<svg viewBox="0 0 498.84 498.84">
			<title>cerf</title>
			<g fill="none" fillRule="evenodd" strokeWidth="3" className="lines">

			</g>
		</svg>
	</Sizer>
)


