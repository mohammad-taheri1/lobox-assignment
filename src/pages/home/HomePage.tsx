import LoboxIcon from '../../assets/icons/LoboxIcon.tsx';
import Select from '../../components/select/Select.tsx';
import { mockSelectItems } from '../../_mocks/mockSelectItems.tsx';
import './homePage.scss';

const HomePage = () => {
	return (
		<div className='home'>
			<nav>
				<LoboxIcon />
				<input type='text' className='search' placeholder='search...' />
			</nav>
			<div className='content'>
				<Select items={mockSelectItems} onSelect={item => console.log(item)} />
			</div>
		</div>
	);
};

export default HomePage;
