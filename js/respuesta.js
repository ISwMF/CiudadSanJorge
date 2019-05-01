//Muestra un mensaje al ingresar un usuario o contraseña incorrecto
function responseAtBadLogin() {
  $("#login").hide(700);
  $("#body").append('<div id="resultadologin">');
  $('#body').append('</div>');
  $("#resultadologin").append("<h2>La cedula o contraseña es incorrecta</h2>");
  $("#resultadologin").append('<button type="submit" class="btn btn-primary btn-block btn-large" onclick="returnLogin()">Regresar</button>');
}

//Retorna al login luego de ingresar credenciales incorrectas en el Login
function returnLogin() {
  $("#resultadologin").remove();
  $("#login").show(500);
}

//Muestra la información principal de la página y la página di inicio al ingresar correctamente las credenciales
function responseAtGoodLogin() {
  $('#body').append(
    '<div id="userlogged">' +
    '<div id="pageheader">' +
    '<div id="titulopagina">' +
    '<h1>Ciudad San Jorge</h1>' +
    '</div>' +
    '<div class="dropdown">' +
    '<button class="dropbtn">Menú</button>' +
    '<div class="dropdown-content">' +
    '<a href="#" onclick="showHomePage()" >Hogar</a>' +
    '<a href="#" onclick="showSearchUserPage()">Buscar ciudadano</a>' +
    '<a href="#" onclick="showEventsCitizen()">Ver reportes</a>' +
    '<a href="#" onclick="location.reload()">Salir</a>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>'
  );
  showHomePage();
}


//Muestra una tabla con el Top 10 de ciudadanos según sus puntos
function createTableTop10() {
  var ciudadanos = arguments[0];
  $('#divtable').append(
    '<h3> TOP 10 </h3>' +
    '<table id="tableTop10">' +
    '<tr>' +
    '<th>Posición</th>' +
    '<th>Nombre</th>' +
    '<th>Puntos</th>' +
    '</tr>' +
    '</table>'
  );
  if (ciudadanos.length < 10) {
    for (var i = 0; i < ciudadanos.length; i++) {
      $('#tableTop10').append(
        '<tr>' +
        '<td>' + (i + 1) + '</td>' +
        '<td>' + ciudadanos[i].name + '</td>' +
        '<td>' + ciudadanos[i].points + '</td>' +
        '</tr>'
      );
    }
  } else {
    for (var i = 0; i < 10; i++) {
      $('#tableTop10').append(
        '<tr>' +
        '<td>' + (i + 1) + '</td>' +
        '<td>' + ciudadanos[i].name + '</td>' +
        '<td>' + ciudadanos[i].points + '</td>' +
        '</tr>'
      );
    }
  }
}

//Muestra la pagina principal
//Mostrará un mensaje de bienvenida, botones de acciones para reportes y la tabla del top 10 de ciudadanos
function showHomePage() {
  $('#messagewelcome').remove();
  $("#eventsmenu").remove();
  $("#divtable").remove();
  $('#searching').hide(500);
  $('#result').hide(500);
  $('#citizenevents').hide(500);
  $('#divtoclone').hide(500);
  setTimeout(
    function() {
      $("#searching").remove();
      $("#result").remove();
      $("#citizenevents").remove();
      $("#divtoclone").remove();
    }, 1000);

  $('#userlogged').append(
    '<div id="messagewelcome">' +
    '<h2>Bienvenido</h2>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
    'sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' +
    'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
    'Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
    '</div>' +
    '<div id="eventsmenu">' +
    '<button type="submit" class="btn btn-primary btn-block btn-large">Últimos reportes que realizaste</button>' +
    '<br>' +
    '<button type="submit" class="btn btn-primary btn-block btn-large">Últimos reportes realizados por otros usuarios</button>' +
    '<br>' +
    '<button type="submit" class="btn btn-primary btn-block btn-large">Reportes generales</button>' +
    '<br>' +
    '<button type="submit" class="btn btn-primary btn-block btn-large">Reportes más importantes</button>' +
    '</div>' +
    '<div id="divtable">' +
    '<script type="text/javascript">' +
    'getUserInOrder();' +
    '</script>' +
    '</div>'
  );
}

//Muestra un formulario de busqueda de ciudadanos según su id o su cédula
function showSearchUserPage() {
  $("#messagewelcome").hide(500);
  $("#eventsmenu").hide(500);
  $("#divtable").hide(500);
  $("#searching").remove();
  $("#result").remove();
  $("#citizenevents").hide(500);
  $("#divtoclone").hide(500);
  setTimeout(
    function() {
      $("#messagewelcome").remove();
      $("#eventsmenu").remove();
      $("#divtable").remove();
      $("#citizenevents").remove();
      $("#divtoclone").remove();
    }, 1000);
  $("#userlogged").append(
    '<div id="searching">' +
    '</div>' +
    '<div id="result">' +
    '</div>' +
    '<div id="divtoclone">' +
    '</div>'
  );
  $("#result").hide();
  $('#divtoclone').hide();
  $("#searching").append(
    '<h3>Busqueda de ciudadanos</h3>' +
    '<p>Por id: </p>' +
    '<input type="text" id="searchbyid"></input>' +
    '<button type="submit" class="btn btn-primary" onclick="getUserByID(searchbyid.value)">Buscar</button>' +
    '<br>' +
    '<p>Por cedula: </p>' +
    '<input type="text" id="searchbyidentificator"></input>' +
    '<button type="submit" class="btn btn-primary" onclick="getUserByIdentificator(searchbyidentificator.value)">Buscar</button>'
  );
}

//Muestra un mensaje al no encontrar un ciudadano
function getNullUser() {
  $("#result").remove();
  $("#userlogged").append('<div id="result"></div>');
  $('#result').append("<h2>No se ha encontrado resultado</h2>");
}

//Muestra el ciudadano encontrado
function getFullUser() {
  var citizen = arguments[0];
  $("#result").remove();
  $("#userlogged").append('<div id="result"></div>');
  $("#result").hide();
  $('#result').append('<h3><b> ID:</b> ' + citizen.id + '</h3>');
  $('#result').append('<h3><b> Nombre:</b> ' + citizen.name + '</h3>');
  $('#result').append('<h3><b> Cedula:</b> ' + citizen.cedula + '</h3>');
  $('#result').append('<h3><b> Points:</b> ' + citizen.points + '</h3>');
  $('#result').append('<button type="submit" id="buttonshowcitizen" class="btn btn-primary btn-block" onclick="showCitizen(\'' + citizen.id + '\',\'' + citizen.name + '\',\'' + citizen.cedula + '\',\'' + citizen.points + '\')">Ver reportes de este ciudadano</button>');
  $('#result').show(500);
}

//Añade funciones al mostrar los reportes de un ciudadano (BOTON)
function showCitizen() {
  $('#result').css('float', 'left');
  $('#searching').hide(500);
  setTimeout(
    function() {
      $('#searching').remove();
    }, 1000);
  $('#userlogged').append('<div id="citizenevents"></div>');
  $('#citizenevents').append(
    '<script>' +
    'getEventsByCitizen(' + arguments[0] + ')' +
    '</script>'
  );
}

//Muestra los reportes asociados al ciudadano encontrado anteriormente
function showEventsByCitizen() {
  $('#buttonshowcitizen').hide();
  var eventos = arguments[0];
  if (eventos.length == 0) {
    $('#citizenevents').append('<h3 id="citizenwithoutevents"> Este usuario no tiene reportes, ¿será bueno o malo? </h3>');
    $('#citizenwithoutevents').css('color', '#fff');
    $('#citizenwithoutevents').css('text-shadow', '0 0 10px rgba(0,0,0,0.3)');
    $('#citizenwithoutevents').css('letter-spacing', '1px');
    $('#citizenwithoutevents').css('text-align', 'center');

  } else {
    for (var i = 0; i < eventos.length; i++) {
      $('#citizenevents').append(
        '<table id="event_' + i + '">' +
        '<tr>' +
        '<th> ID </th>' +
        '<th> Situación </th> ' +
        '<th> Lugar </th>' +
        '<th> Descripción </th>' +
        '<th> Puntos </th>' +
        '<th> Fecha </th>' +
        '</tr>' +
        '</table>'
      );
      var current = new Date(eventos[i].date);
      $('#event_' + i).append(
        '<tr>' +
        '<td>' + eventos[i].id + '</td>' +
        '<td>' + eventos[i].situation + '</td>' +
        '<td>' + eventos[i].place + '</td>' +
        '<td>' + eventos[i].description + '</td>' +
        '<td>' + eventos[i].points + '</td>' +
        '<td>' + current.getDate() + '/' + (current.getMonth() + 1) + '/' + current.getFullYear() + '</td>' +
        '</tr>'
      );
    }
  }
}

function showEventsCitizen() {
  showMessage();
}

//Mensaje de prueba
function showMessage() {
  alert("Funciona: " + arguments[0]);
}
