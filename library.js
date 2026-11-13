const noteTitle = document.querySelector("#note-title");
const noteDesc = document.querySelector("#note-desc");
const noteCategory = document.querySelector("#note-category");
const noteForm = document.querySelector("#note-form");
const notesContainer = document.querySelector("#notes-container");

let title;
let desc;
let category;

let notes = [];

noteTitle.addEventListener("input", function () {
  title = noteTitle.value;
});

noteDesc.addEventListener("input", function () {
  desc = noteDesc.value;
});

noteCategory.addEventListener("input", function () {
  category = noteCategory.value;
});

let canEdit = { state: false, indexOfBook: "" };
let noteToEdit;

function editNote(title, index) {
  console.log(title);
  canEdit.state = true;
  canEdit.indexOfBook = index;

  noteToEdit = notes.find(function (value, id) {
    return value.title == title;
  });

  noteTitle.value = noteToEdit.title;
  noteDesc.value = noteToEdit.desc;
  noteCategory.value = noteToEdit.category;

  console.log(noteToEdit);
}

noteForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const note = {
    title: title,
    desc: desc,
    category: category,
  };

  if (!canEdit.state) {
    notes.unshift(note);
  } else if (canEdit.state) {
    notes.splice(canEdit.indexOfBook, 1, note);
  }

  notesContainer.innerHTML = "";
  notes.forEach(function (value, id) {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note-card");
    noteDiv.innerHTML = `
    ${id + 1}  
    <p>${value.title}</p>
      <p>${value.desc}</p>

      <button onclick="editNote('${value.title}', ${id})">Edit Note</button>
    `;

    notesContainer.appendChild(noteDiv);
  });

  noteTitle.value = "";
  noteDesc.value = "";
  noteCategory.value = "";
});
