export const content = {
  title: "Send me a message",
  placeholders: {
    firstName: "First name *",
    lastName: "Last name *",
    email: "Email address *",
    class: "Type of class *",
    level: "Your current English level *",
    message: "Write your message here"
  },
  selectOptions: {
    class: [
      // { value: "grupales", label: "Cursos Grupales" },
      // { value: "unt", label: "Cursos para la UNT" },
      { value: "individual", label: "Individual Classes" }
    ],
    level: [
      { value: "1", label: "I never studied" },
      { value: "2", label: "It's difficult to speak" },
      { value: "3", label: "I can speak in the present tense" },
      { value: "4", label: "I can speak in the past tense" },
      { value: "5", label: "I can speak in the future tense" },
      { value: "6", label: "I can speak well but I want to express myself better" }
    ]
  },
  submitButton: "Send",
  successMessage: "Message sent successfully.",
  errorMessage: "An error occurred. Try again later."
};