


const taskList = document.getElementById("task-list");


document.getElementById("add-task").addEventListener("click", function(event) {
	event.preventDefault(); 
	const newTask = document.getElementById("new-task").value;
	const taskUrgency = document.getElementById("task-urgency").value;
	if (newTask === "") {
		
		document.getElementById("new-task-error").style.display = "block";
	} else {
		
		const listItem = document.createElement("li");
		listItem.innerHTML = newTask + ' <span class="glyphicon glyphicon-remove"></span>';
		listItem.className = "list-group-item";
		
		if (taskUrgency === "urgent") {
			listItem.classList.add("list-group-item-danger");
		} else {
			listItem.classList.add("list-group-item-info");
		}
		
		taskList.appendChild(listItem);
		
		document.getElementById("new-task").value = "";
		
		document.getElementById("new-task-error").style.display = "none";
	}
});


taskList.addEventListener("click", function(event) {
	if (event.target.classList.contains("glyphicon-remove")) {
		var listItem = event.target.parentNode;
		taskList.removeChild(listItem);
	}
});
