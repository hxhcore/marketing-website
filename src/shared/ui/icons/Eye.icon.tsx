import type { IconType } from '@/shared/types/ui/shared';

export const EyeIcon = ({ className, color }: IconType) => {
	return (
		<svg
			viewBox='0 0 22 16'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<g clipPath='url(#clip0_1923_3128)'>
				<path
					d='M1.06202 8.34787C0.978677 8.12336 0.978677 7.87639 1.06202 7.65187C1.87372 5.68373 3.25153 4.00091 5.02079 2.81677C6.79004 1.63263 8.87106 1.00049 11 1.00049C13.129 1.00049 15.21 1.63263 16.9792 2.81677C18.7485 4.00091 20.1263 5.68373 20.938 7.65187C21.0214 7.87639 21.0214 8.12336 20.938 8.34787C20.1263 10.316 18.7485 11.9988 16.9792 13.183C15.21 14.3671 13.129 14.9993 11 14.9993C8.87106 14.9993 6.79004 14.3671 5.02079 13.183C3.25153 11.9988 1.87372 10.316 1.06202 8.34787Z'
					stroke='#A7A7A7'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z'
					stroke='#A7A7A7'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1923_3128'>
					<rect width='22' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};
