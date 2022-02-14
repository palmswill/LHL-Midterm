import { submitForm } from "./methods.js";


export const initalizeForm = () => {
  // open form on check out
  $(".check-out").click(function () {
    $(".pop-up").addClass("active");
  });
  // close form on form submit/close form bottom;
  $(".cancel-modal,.submit-order").click(function () {
    $(".pop-up").removeClass("active");
  });


  //
  $(".submit-order").click(function (event) {
    event.preventDefault();

    submitForm();
  });
};

