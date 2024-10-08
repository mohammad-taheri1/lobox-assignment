import { ISelectItem } from '../types/general.types.ts';
import { FcGraduationCap, FcVideoProjector, FcBrokenLink, FcSportsMode, FcMindMap, FcLike } from 'react-icons/fc';

export const mockSelectItems: ISelectItem[] = [
	{
		value: 'Education',
		icon: <FcGraduationCap />
	},
	{
		value: 'Yeeeah, science!',
		icon: <FcVideoProjector />
	},
	{
		value: 'Art',
		icon: <FcBrokenLink />
	},
	{
		value: 'Sport',
		icon: <FcSportsMode />
	},
	{
		value: 'Games',
		icon: <FcMindMap />
	},
	{
		value: 'Health',
		icon: <FcLike />
	}
];
