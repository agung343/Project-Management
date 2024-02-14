import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onAddNewProject, onCancel }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    const modalRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        //validation ...
        if (
            enteredTitle.trim() === "" ||
            enteredDescription.trim() === "" ||
            enteredDueDate.trim() === ""
        ) {
            modalRef.current.open();
            return;
        }

        onAddNewProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <>
            <Modal ref={modalRef} caption="Close">
                <h2 className="heading">Invalid Input</h2>
                <p className="text-stone-400 mb-4">Ops...you forget enter a value</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="justify-end flex items-center gap-4 my-4">
                    <li>
                        <button className="text-stone-800 bg-stone-50" onClick={onCancel}>
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button className="button" onClick={handleSave}>
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input label="Title" type="text" ref={titleRef} />
                    <Input label="Description" textarea ref={descriptionRef} />
                    <Input label="Due Date" type="date" ref={dueDateRef} />
                </div>
            </div>
        </>
    );
}

export default NewProject;
