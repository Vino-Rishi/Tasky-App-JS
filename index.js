const state = {
  taskList: [],
};

// DOM Operations
const taskContents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__modal__body");

// Template for the card on screen
// elem identifier key=${id} is been misssing on line 50th

const htmlTaskContent = ({ id, title, description, type, url }) => `
<div class='col-md-6 lg-4 mt-3' id=${id}>

  <div class='card_task d-flex justify-content-end card__task__header'>
    <button class='btn btn-outline-dark mr-1.5 name=${id}'>
      <i class='fas fa-pencil-alt'></i>
    </button>
    <button class='btn btn-outline-danger mr-1.5 name=${id}'>
      <i class='fas fa-trash'></i>
    </button>
  </div>
  
  <div class='card_body'>
    $ {
      url &&
      '<img width='100%' src=${url} class='card-img-top md-3 rounded-lg />'
    }
    <h4 class='card-title task__card__title'>${title}</h4>
    <p class='card-text trim-3-lines text-muted'>${description}</p>
    <div class='tags text-white d-flex flex-wrap'>
    <span class='badge text-bg-dark m-1'>${type}</span>
    </div>
  </div>
  <div class='card_footer'>
    <button class='btn btn-outline-dark float-right data-bs-toggle="modal" data-bs-target="#showTask" '>Open Task</button>
  </div>
</div>
`;

// Modal Body on -> click of Open Task

const htmlModalContent =({id,title,description,url}) => {
  const date = new Date(parseInt(id));
  return `
  <div id=${id}>
  $ 
  {
    url &&
    '<img class='img-fluid mb-3' src=${url} alt='Card Image' />'
  }
  <strong class='text-muted text-sm'>Created on:${date.toDateString()}</strong>
  <h2>${title}</h2>
  <p>${description}</p>
  </div>
  `;
};

const updateLocalStorage = () => {
  localStorage.setItem(
    "task",
    JSON.stringify({
      tasks: state.taskList,
    })
  );
};