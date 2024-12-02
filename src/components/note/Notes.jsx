import { useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { Flex, Button, Space, Input } from 'antd';
import { addNewNoteActionCreator, updateNewNoteActionCreator } from "../../redux/notesReducer";

export default function NotesPage(props) {
	
	const textInput = useRef(null);

	let addNote = () => {				
		props.dispatch(addNewNoteActionCreator());
	}

	let inputOnChangeHandler = (e) => {
		props.dispatch(updateNewNoteActionCreator(e.target.value));		
	}

	return (
		<div>
			<Flex wrap gap="small">
				<Space direction="vertical" size="middle" style={{ display: 'flex', margin: 40 }}>
				
					{props.state.notesPage.notes.map((item) => (	
						<Link key={item.id} to={`/notes/${item.id}`}>
							<span id={item.id}>Topic-{item.id}</span>
						</Link>
					))}					
					{/* Add new Note */}					
					<Input
						value={props.state.newNoteText}
						onChange={inputOnChangeHandler}
						ref={textInput}
						name="newNote"
						placeholder="Enter new note topic here"
						
					/>
					<Button type="primary" onClick={ addNote }>
						Save Note
					</Button>
					<hr />
				</Space>
				
				<Space direction="vertical" style={{ padding: "15px", width: "75%", display: 'flex', margin: 40, backgroundColor: "#f4f5f2" }}>
					<Outlet context={{notes: props.state.notesPage.notes}}/>	
				</Space>
				
			</Flex>		
					
		</div>
	);
}