function ControlWeb() {
    console.log("Control Web iniciado");
    // Aquí va la lógica para controlar la web

    this.mostrarAgregarUsuario = function() {
        

        //inyección de código html para el formulario de usuario
        let cadena = '<div id="auFormdiv" class="form-group">'
        cadena += '<label for="usr">Name:</label>'
        cadena += '<input type="text" class="form-control" id="nick">'
        cadena += '<button id="auB" type="submit" class="btn btn-primary mt-3">Submit</button>'
        cadena += '</div>'
        cadena += '<script>'
        cadena += '$("#auB").on("click",function(){'
        cadena += 'let nick=$("#nick").val();'
        cadena += 'rest.agregarUsuario(nick);'
        cadena += '$("#auFormdiv").remove();'
        cadena += '});'
        cadena += '</script>'
        $("#auForm").html(cadena);
    }

    this.mostrarObtenerUsuarios = function() {
        


        //inyección de código html para el formulario de usuario
        let cadena = '<div id="uFormdiv" class="form-group">'
        cadena += '<button id="uB" type="submit" class="btn btn-primary mt-3">Buscar</button>'
        cadena += '</div>'
        cadena += '<script>'
        cadena += '$("#uB").on("click",function(){'
        cadena += 'rest.obtenerUsuarios(function(users){cw.mostrarUsuarios(users);});'
        cadena += '});'
        cadena += '</script>'
        $("#auForm").html(cadena);
    }

    this.mostrarUsuarios = function(users) {
        let cadena = '<div>';
        for (let key in users) {
            if (users.hasOwnProperty(key)) {
                let user = users[key];
                cadena += `<p>Nick: ${user.nick}</p>`;
                console.log(user);
            }
        }
        cadena += '</div>';
        $("#auForm").html(cadena);
    }

    this.numeroUsuarios = function() {
        rest.numeroUsuarios(function(num) {
            let cadena = `<div><p>Número de usuarios: </p>` + JSON.stringify(num) + `</div>`;
            $("#auForm").html(cadena);
        });
    }

    this.mostrarUsuarioActivo = function() {

        let cadena = '<div id="uaFormdiv" class="form-group">'
        cadena += '<label for="usr">Name:</label>'
        cadena += '<input type="text" class="form-control" id="nick">'
        cadena += '<button id="uaB" type="submit" class="btn btn-primary mt-3">Submit</button>'
        cadena += '</div>'
        cadena += '<script>'
        cadena += '$("#uaB").on("click",function(){'
        cadena += 'let nick=$("#nick").val();'
        cadena += 'rest.usuarioActivo(nick,function(res){$("#auForm").html(`<div><p>el usuario ` + nick + ` existe? </p>` + JSON.stringify(res.res) + `</div>`);});'
        cadena += '});'
        cadena += '</script>'
        $("#auForm").html(cadena);
    }
}