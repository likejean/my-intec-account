import { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { DeleteOutlined } from '@ant-design/icons';
import { Flex, Button, Modal, Space, Input, Row, Tooltip } from 'antd';

const notesListStyle = { display: 'flex', margin: 40 };
const styleNoteTitle = {color: 'blue', padding: '4px 2px', margin: '2px'};
const styleDeleteButton = {color: 'red', padding: '4px 2px', margin: '2px'};
const selectedNoteStyle = { padding: "15px", width: "75%", display: 'flex', margin: 40, backgroundColor: "#f4f5f2" };

export default function NotesPage(props) {

	const { notes, newNoteText, addNewNoteHandler, inputOnChangeHandler } = props;
	const textInput = useRef(null);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const addNewNote = () => addNewNoteHandler();
	const changeNewNote = (e) => inputOnChangeHandler(e.target.value);	

	return (
		<div>
			<Flex wrap gap="small">
				<Space direction="vertical" size="middle" style={notesListStyle}>
				
					{notes.map((item) => (
						<Row key={item.id}>
							<Link style={styleNoteTitle} to={`/notes/${item.id}`}>
								<span id={item.id}>Topic-{item.id}</span>
							</Link>
							<Tooltip title="Delete">
								<Button onClick={showModal} style={styleDeleteButton} icon={<DeleteOutlined />} />
							</Tooltip>							
						</Row>	
						
					))}					
					{/* Add new Note */}					
					<Input
						value={newNoteText}
						onChange={ changeNewNote }
						ref={textInput}
						name="newNote"
						placeholder="Enter new note topic here"
						
					/>
					<Button type="primary" onClick={ addNewNote }>
						Save Note
					</Button>
					<hr />
					<Modal title="Delete Note" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
						<p>Are You Sure?</p>
					</Modal>
				</Space>
				
				<Space direction="vertical" style={selectedNoteStyle}>
					<Outlet context={{notes: props.notes}}/>	
				</Space>
			</Flex>	
		</div>
	);
}