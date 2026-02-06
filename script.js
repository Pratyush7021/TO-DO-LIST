document.querySelector(".reload").addEventListener("click", () => {
    location.reload();
});
const Inputbox = document.querySelector("#InputBox");
const todolist = document.querySelector(".todo-list");


const addtodo = () => {
    const Textbox = Inputbox.value.trim();  //trim -> remove extra space

    if(Textbox.length <= 0){                 // If the length of Textbox means the InputBox is empty(length is equal or less than 0).
        alert("You must write something in your to do ");

    }else{
        const li = document.createElement('li');
        const Input = document.createElement('Input');
        Input.type = 'checkbox';
        const span = document.createElement("span");

        // Text Add
        span.innerText = Textbox;
        li.appendChild(Input);
        li.appendChild(span);
        todolist.appendChild(li);
        
        // Delete Button
        const delbtn = document.createElement('button');
        delbtn.classList.add('delete-btn');
        delbtn.innerHTML = '<img src = "pics/icons8-trash-can-64.png" alt="loading gif"/>';
        li.appendChild(delbtn);

        // Function to Remove the list
        delbtn.addEventListener('click', () => {
            li.remove();
        });

        // Edit the Text
        const editbtn = document.createElement('edit');
        editbtn.classList.add('edit-btn');
        editbtn.innerHTML = '<img src = "pics/writing.png" alt="loading gif"/>';
        li.appendChild(editbtn);
        let isEditing = false;

        // Function to Edit the list 
        editbtn.addEventListener('click', () => {
            if (!isEditing) {
                Inputbox.value = span.textContent;
                Inputbox.focus();
                editbtn.innerHTML = '<img src = "pics/cloud.png" alt="loading gif"/>';;
                isEditing = true;
            }else {
            const newText = Inputbox.value.trim();
                if (newText !== "") {
                    span.textContent = newText;
                }
                    Inputbox.value = "";
                    editbtn.innerHTML = '<img src = "pics/writing.png" alt="loading gif"/>';
                    isEditing = false;
            }
        });
    }
}
const addbutton = document.querySelector(".add-btn");
addbutton.addEventListener('click', addtodo);





        