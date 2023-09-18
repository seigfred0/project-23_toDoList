document.querySelector('#push').onclick = () => {
    if (document.querySelector('.new-task input').value.length == 0) {
        alert("Please Enter a Task")
    } else {
        document.querySelector('#task').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('.new-task input').value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>   
                </button>
            </div>
        `;

        let currentTask = document.querySelectorAll(".delete");

        for (let i = 0; i < currentTask.length; i++) {
          currentTask[i].onclick = function() {
            this.parentNode.remove();
          }
        }

        let tasks = document.querySelectorAll('.task');
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed')
            }
        }

        document.querySelector(".new-task input").value = "";

    };
};