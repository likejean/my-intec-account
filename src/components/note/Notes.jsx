import { createRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { Flex, Input, Button, Space } from 'antd';

const { TextArea } = Input;


export default function NotesPage() {
	const notes = [1, 2, 3, 4, 5, 6];

	const newUserNote = createRef();

	let addNote = () => {
		//debugger;
		let text = newUserNote.current.value;
		console.log(newUserNote.current.value);
	}
	const onChange = (e) => {
		console.log('Change:', e.target.value);
	};
	return (
		<div>
			<Flex wrap gap="small">
				<Space direction="vertical" size="middle" style={{ display: 'flex', margin: 40 }}>
				
					{notes.map((item) => (	
						<Link key={item} to={`/notes/${item}`}>Note {item}</Link>
					))}
					
					{/* Add new Note */}
					
					<textarea ref={newUserNote}>

					</textarea>
					
					<Button type="primary" onClick={ addNote }>
						Save Note
					</Button>
				</Space>
			</Flex>			
			<Outlet />			
		</div>
	);
}