/* eslint-disable class-methods-use-this */
export default class Gui {
  constructor() {
    this.buttons = document.querySelectorAll('.col button');
    this.ulAll = document.querySelectorAll('ul');
    this.widget = document.querySelector('.widget');
    this.cols = document.querySelectorAll('.col');
    this.addcardDiv = document.querySelector('.addcard');
    this.addcardButton = document.querySelector('.addcard button');
    this.addcardInput = document.querySelector('.addcard input');
    this.delCardDiv = document.querySelector('.delcard');
  }

  getTasksListObjFromDom() {
    const tasksList = {};
    this.ulAll.forEach((ul) => {
      const lis = [...ul.children];
      const h3 = ul.closest('.col').children[0].innerText;
      tasksList[h3] = [];
      lis.forEach((li) => {
        tasksList[h3].push(li.innerText);
      });
    });
    return tasksList;
  }

  tasksListFromLS() {
    if (!localStorage.taskBoard) return;
    const tasksList = JSON.parse(localStorage.taskBoard);
    if (!tasksList.Todo) return;

    for (const title in tasksList) {
      if (Object.prototype.hasOwnProperty.call(tasksList, title)) {
        this.cols.forEach((col) => {
          if (col.children[0].innerText === title) {
            const ul = col.children[1];
            ul.innerHTML = '';
            tasksList[title].forEach((li) => {
              ul.innerHTML += `<li class="items-item"> ${li}</li>`;
            });
          }
        });
      }
    }
  }
}
