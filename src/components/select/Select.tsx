import { useState, useRef, useEffect } from 'react';
import { ISelectItem } from '../../types/general.types.ts';
import { FaCheck } from 'react-icons/fa';

import './select.scss';

interface IProps {
	items: ISelectItem[];
	onSelect: (item: ISelectItem) => void;
}
const Select = ({ items, onSelect }: IProps) => {
	const copyItemsArray = [...items];
	const [localItems, setLocalItems] = useState<ISelectItem[]>(copyItemsArray);
	const [selectedItem, setSelectedItem] = useState<ISelectItem>();
	const [isListOpen, setIsListOpen] = useState<boolean>(false);

	const expandableRef = useRef(null);

	const keyUpHandler = e => {
		if (e.code === 'Enter') {
			const newItem: ISelectItem = {
				value: e.target.value
			};
			if (localItems.some(q => q.value === newItem.value)) {
				alert('Duplicate Item can not be inserted');
				return;
			}
			const itemsCopy = [...localItems];
			itemsCopy.unshift(newItem);
			setLocalItems(itemsCopy);
			e.target.value = '';
		}
	};

	const checkIfClickOutside = (event: MouseEvent) => {
		if (isListOpen && expandableRef.current && !(expandableRef.current as HTMLElement).contains(event.target as Node)) {
			setIsListOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', checkIfClickOutside);

		return () => {
			document.removeEventListener('mousedown', checkIfClickOutside);
		};
	}, [isListOpen]);

	return (
		<div className='container'>
			<input type='text' placeholder='Type and press enter to add...' onKeyUp={keyUpHandler} />
			<div className='select'>
				<div className={`selected-item ${isListOpen ? 'open' : ''}`} onClick={() => setIsListOpen(prev => !prev)}>
					{selectedItem ? selectedItem.value : null}
				</div>
				{isListOpen ? (
					<div ref={expandableRef} className='expandable'>
						<ul className='scrollabe'>
							{localItems.map((item, index) => (
								<li
									key={index}
									className={`${item.value === selectedItem?.value ? 'selected' : ''}`}
									onClick={() => setSelectedItem(item)}>
									<div className='contents'>
										<span>{item.value}</span>
										{item.icon ? item.icon : null}
									</div>
									{item.value === selectedItem?.value ? <FaCheck /> : null}
								</li>
							))}
						</ul>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Select;
