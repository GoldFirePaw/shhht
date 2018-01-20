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
			<title>canard</title>
			<g fill="none" fillRule="evenodd" strokeWidth="3" className="lines">
				<path d="M6.71,58.24S53.32,45.38,63.94,39,83.18,27,83.18,27s.56-7.78,19-14.86,31.94-2.12,44.62,5.66S166.09,35.48,172,55.29s-3.32,36.79-6.15,43.15S145.29,134.52,152.37,148s34.59,8.49,49.49,9.2,50.39,0,113.29,41c61.48,34,74.93,39.62,102.52,55.89,39.62,9.2,47.4,11.32,48.81,16.27s-17.69,0-17.69,0,12.88,8.49,17.76,17c12.66,5.66,20.44,7.07,23.27,12s-37.49,7.07-37.49,7.07-63,29-77.11,31.83c-14.86,7.07-60.07,9.9-60.07,9.9S241.5,368.69,164.39,334c-44.3-19.81-68.62-50.94-69.33-65.79-10.61-12-28.3-36.29-29.71-86.77s48.6-75.24,43.4-93.63-37-22.64-37-22.64S6.71,64.61,6.71,58.24Z"/><path  d="M107.18,97.78s31.76,2.23,48.38,22.32"/><path  d="M99.6,108.94s35,5.36,52,23.61"/><path  d="M95.06,268.23a123.3,123.3,0,0,0,25.47-17c12-10.61,29.72-36.08,35-46.69s5.74-49.48,5.74-49.48"/><path  d="M83.18,27S77,33.07,76,39.81s-.5,13.48,1.5,17.23S81,63.63,74.66,65.7"/><path  d="M151.53,211.65s27.91,38.95,80.67,53.8,83.52-6.8,83.52-6.8"/><path  d="M307.1,263.17a88.68,88.68,0,0,1,18.32,11c8.2,6.66,17.93,12.81,22,19.46s3.59,20-3.59,30.22-28.72,24.32-28.72,24.32"/><path  d="M448.78,270.35s-26,3.3-54.72,9.45-46.61,13.83-46.61,13.83,19.5,3.18,26.64,23.05,1.12,21.59,1.12,21.59"/><line  x1="366.55" y1="304.31" x2="452.32" y2="306.43"/><path  d="M342.23,287.56s5.22-7.08,20.07-16.89,28.18-18.14,28.18-18.14"/><path  d="M203.52,201.43s65.48-10.57,111.62-3.24c0,0-58.07-28-81.52-29.54s-70.71-6.3-73.66,12.82c-.64,12.8,33.82,21.5,43.55,20,3.07,8.71,2.55,12.81,44.82,13.83-.25,8.71,4.87,15.37,27.41,15.37,2.56,16.9,42.51,13.32,42.51,13.32s-4.1,7.42,6.15,8.57,13.09-4.48,42.14-4a277.67,277.67,0,0,1,51.11,5.53c-43.51-6.26-96.33,8.3-124.5,4.21s-81.44-36.37-107.05-49.17-26.78-21.47-26.78-21.47"/><path  d="M248.33,215.26s31-6.15,53.53-6.15A210.4,210.4,0,0,1,342.23,213"/><path  d="M275.74,230.63s37-4.61,52.82-5.12,46.51,5.12,46.51,5.12"/><path  d="M318.25,243.94s22-4.24,39.44-4.17,42.19,4.17,42.19,4.17"/><path  d="M332.67,279.78s17.64-15.54,37.92-26.35"/><path  d="M336.67,282.86s27.89-20.7,44-30.05"/><path  d="M347.45,293.63a441,441,0,0,0,57.45,2.62c30.54-.72,40.75-4,47.42-8.69s0-14.68,0-14.68S466.9,283,456.84,293s-54.56,12.41-54.56,12.41"/><path  d="M386.65,281.47s40.07,8.58,52.23,1.38C448.12,277.39,444,271,444,271s14.71,8.78,3,15.52c-22.44,12.88-80.41.4-80.41.4"/><path  d="M384.17,256.51s20.62.38,26.88-3.08"/><path  d="M375.07,263.17s36.89,2,51.15-6.65"/><path  d="M362.31,270.66s55.46,4.85,76.32-11.64"/><path  d="M80.9,144a17.19,17.19,0,0,0,0,8.06"/><path  d="M102.64,144s-2,4.21-1.52,8.06"/><path  d="M90.72,155.08s.14,7.56,2.17,11.9"/><path  d="M74.66,167a16,16,0,0,0,0,9.6"/><path  d="M87.91,181.46s.7,5.29,2.81,8.45"/><path  d="M80.43,209.11s.47,7.8,4.68,12.71"/><path  d="M102.64,207.09a32.6,32.6,0,0,0,7,10.17"/><path  d="M128.18,125.75a9.8,9.8,0,0,0-4.15,8.42"/><path  d="M121.22,152a23.24,23.24,0,0,0,0,13"/><path  d="M109.65,179a24.82,24.82,0,0,0,7,10.87"/><path  d="M143.31,148a18.56,18.56,0,0,0,6,10.52"/><path  d="M139.11,176.59a15.38,15.38,0,0,0,7.19,9.1"/><path  d="M128.18,203.59a21.21,21.21,0,0,0,9.53,8.6"/><path  d="M101,237.25a45.44,45.44,0,0,0,6.13,11.22"/><path  d="M113.16,116.63s-4.6,3.16-6,11.22"/><path  d="M95.06,120.1s-5,6.35-3.26,9.86"/><path  d="M232,352.48s1.81,2.38-1.49,6.42-2.57,7.34,0,13.21c0,14.31-.38,32.66-2.21,38.16s-54.38-2.57-53.42,0a28.22,28.22,0,0,0,3.09,5.5s-2.87,2.57-9.11,2.57-18.11-.73-17.31,2.94,8.07,1.83,9.76,3.67a5,5,0,0,1-2,8.07c-4.42,1.83-9.92-1.83-11,2.2s29.14,4,42.09,3.3,48.18-3.67,54.78-11.37-3.67-14.31-2.94-52.47c3.67-5.5,6.13-5.2,2.94-13.21l-3.2-8"/><path  d="M178,415.77s38.6-2.2,39,0-43.43,2-43.43,2"/><path  d="M161.29,424.94s54-2.2,54.07,0-56,8.07-56,8.07"/><path  d="M270.12,354.2s-.37,33,1.83,38.82,5.5,13.21,0,15.78-25.19,7.5-25.19,7.5"/><path  d="M259.11,354.18s-1.46,33.7-3.3,36.64-13.19,0-13.19,0"/><path  d="M230.17,392.12s-27.19-4.2-27.56,0c-.28,3.09,4.58,4.81,4.58,4.81a75,75,0,0,1-9.35,1.23c-2.32,0-18.71.37-18.34,4,7,1.83,14.43,3.34,9.95,8.28"/><path  d="M188.77,405.18s37.78-2,40.49,0"/><path  d="M207.18,396.93s22.3-.21,22.69,1.31-27.44,0-27.44,0"/><circle  cx="109.65" cy="31.14" r="8.64"/><circle  cx="109.65" cy="31.14" r="4.74"/><path d="M150,460.8s.3,8.25-5.08,8-5.77-19.2,2.54-19.2,3.76,24.21,5.06,32.33,5.69,11.61,8.77,11.61,8.61-4.3,8.61-9V449.07"/><path d="M169.91,484.49s1,9,8.29,9,8.61-13.56,4.22-13.56c-1.65,0-2.63,1.33-3.21,3"/><path d="M187.34,486.73s2.07-8.57,5-8.41,2.11,15.19,2.11,15.19"/><path d="M194.17,482.21a5,5,0,0,1,5.32-3.9c4.39.33,3.62,6.64,3.62,6.64l.05,5.27s.84,3.67,3.91,3,6.09-8,6.09-8"/><path d="M244.58,479.94s-3.85-3-7.7-.7-4,5.35-4,7.49,3.06,6.67,7.61,6.54,8.39-6.54,8.39-6.54"/><path d="M263.64,484s-2.27-6-7.35-5.66-6.73,4.11-6.65,8.34,4.11,6.78,7,6.78,6.21-3.08,7-5.52"/><path d="M264.08,477.75v12.59s.26,2.92,2.45,2.92,5.07-4,6.21-6.6,1.84-8.21,5.16-8.3,2,15.14,2,15.14l.22-11.06a4.17,4.17,0,0,1,4.75-4.09l.1,0c3.32.61,3.67,3.84,3.67,5.15v6.73s.61,3,3.24,3,6.47-6.86,6.47-6.86"/><path d="M312.53,483.17a7.16,7.16,0,0,0-7-4.8c-5.42.17-7.35,4.45-6.73,8.83a6.66,6.66,0,0,0,6.81,6.07c2.9,0,6.31-2.05,6.92-5.11"/><path d="M313,477.75s-.09,11.63.44,13.47,1.66,2.18,2.36,2.05,3.59-.74,6.21-6.95,5.25-12,1.31-11.37c-1.75.35-1,4.63,3.59,4s6.73.61,5.86,3.76-3.41,8.82,1.57,10.53,8.13-8.26,8.13-8.26"/><path d="M356.69,483.09s-2.36-5.33-8-4.72-6.82,6.12-6.3,8.48,3,6.46,7.07,6.42,7.18-4.94,7.18-4.94"/><path d="M356.69,463.85v26.23s.26,3.19,2.62,3.19,5.51-4.59,7.26-8.26"/>
			</g>
	  </svg>
	</Sizer>
)


