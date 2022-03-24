function TaskInput({value, handleChange, onKey}){
    return (
        <input type="text"
               value={value}
               onChange={handleChange}
               onKeyUp={onKey}
        />
    );
}

export default TaskInput;