let btn = document.getElementById("sendButton");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let body =
    "name:" +
    name +
    "<br/>" +
    " email:" +
    email +
    "<br/>" +
    " message:" +
    message;

  Email.send({
    SecureToken: "87647aee-bd91-4241-a14a-514dbbe6efce ",
    To: "barkoklord@gmail.com",
    From: "barkotshetie@gmail.com",
    Subject: "Message About The Digital Library",
    Body: body,
  }).then((message) => alert("Message Sent Successfully"));
});
