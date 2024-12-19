// To-do part
const titleInput = document.querySelector(".title_input");
const descriptionInput = document.querySelector(".description_input");
const publish = document.querySelector(".publish");
const dataBox = document.querySelector(".data_box");
const update = document.querySelector(".update");
const noteCount = document.querySelector(".note_count");

let arr = [
{  userName:"The Joy of Learning to Code",
  description:" Coding is like solving puzzles; it challenges your creativity and logic. With coding, you can build apps, design websites, and even automate tasks. It’s a skill that opens doors to countless opportunities in today’s technology-driven world."},
  {
    userName:" The Language of the Future",
    description:" Learning to code equips you with the ability to communicate with machines and create solutions for real-world problems. Whether it’s AI, web development, or robotics, coding is the foundation of innovation and progress."
  },
  {
    userName:"Empower Your Ideas Through Coding",
    description:" Coding lets you turn your ideas into reality, from building simple programs to crafting complex systems. It teaches you problem-solving, logical thinking, and creativity, making it an invaluable skill for the 21st century."
  }
];

display();
let indexStore;
function storedData() {
  arr.push({
    userName: titleInput.value,
    description: descriptionInput.value,
  });
}

publish.addEventListener("click", () => {
  storedData();
  display();
});

function display() {
  dataBox.innerHTML = "";
  arr.forEach((item,index) => {
    noteCount.innerHTML = `${index + 1} notes`

    dataBox.innerHTML += `<div class="box">
                                  <p class="username">${item.userName}</p>
                                  <p>${item.description}</p>
                                  <button class="edit">Edit</button>
                                  <button class="delete">Delete</button>
                                </div>`;
  });
  deletefun();
  editfun();
}

function deletefun() {
  const deleteButtons = document.querySelectorAll(".delete");
  [...deleteButtons].forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      arr.splice(index, 1);
      display();
    });
  });
}

function editfun() {
  const editButtons = document.querySelectorAll(".edit");
  [...editButtons].forEach((editButton, index) => {
    editButton.addEventListener("click", () => {
      titleInput.value = arr[index].userName;
      descriptionInput.value = arr[index].description;

      publish.style.display = "none";
      update.style.display = "block";
      indexStore = index;
      updatefun();
    });
  });
}

function updatefun() {
  update.addEventListener("click", () => {
    arr[indexStore].userName = titleInput.value;
    arr[indexStore].description = descriptionInput.value;
    publish.style.display = "block";
    update.style.display = "none";
    display();
  });
}

// searching part
descriptionInput.oninput = function () {
  if (descriptionInput.value === "") {
    display();
  }
};

let searching = document.querySelector(".searching");

searching.addEventListener("click", () => {
  dataBox.innerHTML = "";
  arr.forEach((item) => {
    if (
      item.description.slice(0, descriptionInput.value.length) ===
      descriptionInput.value
    ) {
      dataBox.innerHTML += `<div class="box">
                                  <p class="username">${item.userName}</p>
                                  <p>${item.description}</p>
                                  <button class="edit">Edit</button>
                                  <button class="delete">Delete</button>
                                </div>`;
    }
  });
});
