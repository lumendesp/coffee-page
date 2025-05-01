const feedbacks = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
    name: "Jonny Thomas",
    position: "Project Manager",
    img: "assets/profile_img.jpg"
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
    name: "Jane Doe",
    position: "Designer",
    img: "assets/profile_img2.jpg"
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
    name: "Alice Johnson",
    position: "Software Engineer",
    img: "assets/profile_img3.jpg"
  }
];

let currentFeedbackIndex = 0;

function updateFeedback(index) {
  const feedbackText = document.querySelector(".feedback-card-section p");
  const feedbackName = document.querySelector(".feedback-individual-info h2");
  const feedbackPosition = document.querySelector(".feedback-individual-info h3");
  const feedbackImage = document.querySelector(".feedback-individual-info-img img");

  feedbackText.innerHTML = feedbacks[index].text;
  feedbackName.innerHTML = feedbacks[index].name;
  feedbackPosition.innerHTML = feedbacks[index].position;
  feedbackImage.src = feedbacks[index].img;
}

document.querySelector(".feedback-individual-info-vector button").addEventListener("click", function() {
  currentFeedbackIndex = (currentFeedbackIndex - 1 + feedbacks.length) % feedbacks.length;
  updateFeedback(currentFeedbackIndex);
});

document.querySelector(".feedback-individual-info-vector-right button").addEventListener("click", function() {
  currentFeedbackIndex = (currentFeedbackIndex + 1) % feedbacks.length;
  updateFeedback(currentFeedbackIndex);
});

updateFeedback(currentFeedbackIndex);
