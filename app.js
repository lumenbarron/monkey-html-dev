window.addEventListener('load', function(){
    new Glider (document.querySelector('.carousel-list'), {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
          prev: '.carousel-prev',
          next: '.carousel-next'
    },
    responsive: [
      // {
      //   // screens greater than >= 775px
      //   breakpoint: 425,
      //   settings: {
      //     // Set to `auto` and provide item width to adjust to viewport
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     itemWidth: 150,
      //     duration: 0.25
      //   }
      // },
      //   {
      //     // screens greater than >= 775px
      //     breakpoint: 775,
      //     settings: {
      //       // Set to `auto` and provide item width to adjust to viewport
      //       slidesToShow: 2,
      //       slidesToScroll: 1,
      //       itemWidth: 150,
      //       duration: 0.25
      //     }
      //   },
      {
        // screens greater than >= 1024px
        breakpoint: 1700,
        // rewind: true,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          itemWidth: 200,
          // exactWidth: true,
          duration: 0.25
        }
      },
        {
          // screens greater than >= 1024px
          breakpoint: 1024,
          // rewind: true,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            itemWidth: 350,
            exactWidth: true,
            duration: 0.25
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
          }
        }
      ]
})
})

const sendContact = (event) => {
  event.preventDefault()
  console.log('holi')
  let name = document.getElementById("nome").value;
  let email = document.getElementById("email").value.toLowerCase();
  let phone = document.getElementById("telefone").value;
  let message = document.getElementById("message").value;

  const rbs = document.querySelectorAll('input[name="choice"]');
  let selectCompany;
  for ( const rb of rbs){
    selectCompany = rb.value;
    break;
  }

  // let errorName = document.getElementById("errorName");
  // let errorEmail = document.getElementById("errorEmail");
  // let errorTelefone = document.getElementById("errorTelefone");

  if (name === '' || name === null) {
    //errorName.innerHTML = "É preciso colocar um nome";
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'É preciso colocar um nome',
    })
    return false;
  }
  if (message === '' || message === null) {
    //errorName.innerHTML = "É preciso colocar um nome";
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'É preciso colocar uma message',
    })
    return false;
  } 
  if (email === '' || email === null || email.indexOf("@") == -1 ) {
    //errorEmail.innerHTML = "É preciso colocar um email válido";
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'É preciso colocar um email válido',
    })
    return false;
  } 
  if (phone === '' || isNaN(phone)) {
    //errorTelefone.innerHTML = "É preciso colocar um número de telefone";
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'É preciso colocar um número de telefone',
    })
    return false;
  } 
  //else {

    console.log(name, email, phone, message, selectCompany)

    let headers = new Headers();
  
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://http://127.0.0.1:5500/');
  
    fetch('https://coq95qxf15.execute-api.us-east-1.amazonaws.com/prod', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        name: name,
        telefone: phone,
        email : email,
        perfil : selectCompany,
        comentarios: message,
        clientes: 'sc'
      }),
      headers: headers,
    })
    .then( (response) => response.json())
    .then((result) => {
      console.log(result);
      Swal.fire({
        title: 'Obrigado!',
        text: 'Sua informação foi enviada',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      document.getElementById("contact-form").reset();
    })
    .catch ( function (error){
      console.log("Can’t access " , error);
    })
  //}



}

const selectLang = () => {
  console.log('select')
  if (document.getElementById("portugues") === "portugues") {
    console.log('port')
  }
  if (document.getElementById("ingles") === "ingles") {
    console.log('ingles')
  }
  if (document.getElementById("espanhol") === "espanhol") {
    console.log('espanhol')
    window.location.replace("");
  }
}

