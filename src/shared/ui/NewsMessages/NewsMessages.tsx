'use client';

import type { INewsMessages } from '@/shared/types/ui/elements';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CustomButton } from '../CustomButton/CustomButton';
import styles from './NewsMessages.module.scss';

interface NewsMessagesProps {
	data: INewsMessages;
}

const getColorStyle = (color: 'green' | 'yellow' | 'red' | 'gray') => {
	switch (color) {
		case 'green':
			return styles.green;
		case 'yellow':
			return styles.yellow;
		case 'red':
			return styles.red;
		case 'gray':
			return styles.gray;
		default:
			return styles.gray;
	}
};

export const NewsMessages = ({ data }: NewsMessagesProps) => {
	if (!data || !data.attributes.messages) return null;

	return (
		<Swiper
			className={styles.swiper}
			modules={[Autoplay]}
			autoplay={{
				delay: data.attributes.delay,
			}}
			loop
			centeredSlides
			allowTouchMove={false}
		>
			{data.attributes.messages.map((message) => (
				<SwiperSlide
					key={message.id}
					className={`${styles.news} ${getColorStyle(message.color)}`}
				>
					<div className={styles.container}>
						<p className={styles.label}>{message.label}</p>
						{message.link && message.link.children && (
							<div>
								<CustomButton.Link {...message.link}></CustomButton.Link>
							</div>
						)}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
