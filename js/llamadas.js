
//Obtiene una lista de usuarios
//Este método aún no se usa
function getUsers() {
  $.ajax({
    url: "http://localhost:8080/APIspring/informacion/citizens/",
    method: "GET",
    success: function(result) {
      console.log(result);
    }
  });
}

//Obtiene un ciudadano por ID
//Se usa en la busqueda de ciudadanos
//Si no se encuentra retorna un ciudadano con datos nulos
function getUserByID() {
  if (arguments[0] == null) {
    getNullUser();
  } else {
    $.ajax({
      url: "http://localhost:8080/APIspring/informacion/citizens/" + arguments[0],
      method: "GET",
      success: function(result) {
        if (result.id == null) {
          getNullUser();
        }else{
          getFullUser(result);
        }
      }
    });
  }
}

//Busca y obtiene un usuario usando la cedula
//Se usa en la busqueda de ciudadanos
//Si no se encuentra retorna una lista vacia
function getUserByIdentificator() {
  if (arguments[0] == null) {
    getNullUser();
  } else {
    $.ajax({
      url: 'http://localhost:8080/APIspring/informacion/citizensArg/?cedula=' + arguments[0],
      method: "GET",
      success: function(result) {
        if (result[0] == null) {
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

//Crea un evento
//Este método aún no se usa
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

//Crea un registro login
//Se usa en la vista Login
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
        responseAtBadLogin();
      } else {
        $("#login").hide(700);
        responseAtGoodLogin();
      }
    }
  });
}


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
