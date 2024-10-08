import type { IComponentProps } from '@/shared/types/ui/blocks';

// 11.07.2024 / v.1.0.1
// Функция проверяет пропсы на валидность
export const isPropsValid = <T extends IComponentProps>(
	props: any,
	propType: T,
): props is T => {
	if (!propType.data.data) {
		return false;
	}

	return Object.keys(propType).every((key) => key in props);
};
