import { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Flex, Button, Space, Input } from 'antd';
import { addNewNoteActionCreator, updateNewNoteActionCreator, getAllCommentsActionCreator } from "../../redux/store";

export default function NotesPage(props) {
	
	const textInput = useRef(null);

	const [allComments, setAllComments] = useState([])

	let addNote = () => {				
		props.dispatch(addNewNoteActionCreator());
	}

	let inputOnChangeHandler = (e) => {
		props.dispatch(updateNewNoteActionCreator(e.target.value));		
	}

	const getAllComments = (e) =>  {		
		props.dispatch(getAllCommentsActionCreator(e.target.id));
		setAllComments(props.state.notesPage.allCommentsList);
	}
	
	return (
		<div>
			<Flex wrap gap="small">
				<Space direction="vertical" size="middle" style={{ display: 'flex', margin: 40 }}>
				
					{props.state.notesPage.notes.map((item) => (	
						<Link key={item.id} to={`/notes/${item.id}`}>
							<span id={item.id} onClick={ getAllComments }>Note-{item.id}: {item.topic}</span>
						</Link>
					))}					
					{/* Add new Note */}					
					<Input
						value={props.state.newNoteText}
						onChange={inputOnChangeHandler}
						ref={textInput}
						name="newNote"
						placeholder="Enter new note here"
						
					/>
					<Button type="primary" onClick={ addNote }>
						Save Note
					</Button>
					<hr />
				</Space>
				
				<Space direction="vertical" style={{ display: 'flex', margin: 40 }}>
					<Outlet context={{allComments}}/>	
				</Space>
				
			</Flex>		
					
		</div>
	);
}