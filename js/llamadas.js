
//Obtiene un ciudadano por ID
function getUserByID() {
  if (arguments[0] == null) {
    console.log("No se ha encontrado usuario");
    getNullUser();
  } else {
    $.ajax({
      url: "http://localhost:8080/APIspring/informacion/citizens/" + arguments[0],
      method: "GET",
      success: function(result) {
        if (result.id == null) {
          console.log("No se ha encontrado usuario");
          getNullUser();
        }else{
          getFullUser(result);
        }
      }
    });
  }
}

/////////////
//Obtiene los reportes asignados a un ciudadano
//Se usa como opción cuando se busca un ciudadano
function getEventsByCitizen() {
  $.ajax({
    url: "http://localhost:8080/APIspring/informacion/citizens/"+arguments[0]+"/events",
    method: "GET",
    success: function(result) {
      showEventsByCitizen(result);
    }
  });
}


/////////////
//Crea un registro login
function createLogin() {
  var datos = {
    cedula: $("#cedulalogin").val(),
    password: $("#contrasenalogin").val()
  };
  $.ajax({
    url: "http://localhost:8080/APIspring/informacion/logins/",
    method: "post",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify(datos),
    success: function(result) {
      if (result.id == null) {
        console.log("No encontrado");
        responseAtBadLogin();
      } else {
        $("#login").hide(700);
        responseAtGoodLogin();
      }
    }
  });
}






/////////////////////

//Busca y obtiene un usuario usando la cedula
//Se usa en la busqueda de ciudadanos
//Si no se encuentra retorna una lista vacia
function getUserByIdentificator() {
  if (arguments[0] == null) {
      console.log("No se ha encontrado cedula");
    getNullUser();
  } else {
    $.ajax({
      url: 'http://localhost:8080/APIspring/informacion/citizensArg/?cedula=' + arguments[0],
      method: "GET",
      success: function(result) {
        if (result[0] == null) {
            console.log("No se ha encontrado cedula");
          getNullUser();
        }else{
          getFullUser(result[0]);
        }
      }
    });
  }
}

//Crea un usuario
//Este método aún no se está usando
function createUser() {
  var datos = {
    name: "Pedro",
    password: "12345",
    points: "0"
  }
  $.ajax({
    url: "http://localhost:8080/APIspring/informacion/citizens/",
    method: "post",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify(datos),
    success: function(result) {
      console.log(result);
    }
  });
}

//Obtiene los ciudadanos ordenados por puntos
//Se usa para mostrar el top 10 de usuarios
function getUserInOrder() {
  $.ajax({
    url: "http://localhost:8080/APIspring/informacion/citizens/orden/",
    method: "GET",
    success: function(result) {
      createTableTop10(result);
    }
  });
}

//Crea un evento nel
function createEvent2() {
  var datos = {
    date: "2019-02-02",
    place: "lugar de prueba",
    situation: "situacion de prueba",
    description: "descripción de prueba",
    points: 1,
    id_citizen: 2
  };

  $.ajax({
    url: "http://localhost:8080/APIspring/informacion/events/",
    method: "post",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify(datos),
    success: function(result) {
      console.log(result);
    },
    error: function(jqXHR, exception) {
      $('#resultado').append(jqXHR.responseText);
    },
  });

}
