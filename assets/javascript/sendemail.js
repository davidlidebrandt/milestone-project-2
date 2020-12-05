
 function sendMail(form) {
     console.log("send mail")
     emailjs.send('service_ek6w4ip', 'template_fxoyyj6', {
       user_email: form.email.value,
       score: score,
   })
    .then(function(response) {
       alert("You succesfully sent your score");
    }, function(error) {
       alert("An error occured");
    });
    return false;
  
  };

  