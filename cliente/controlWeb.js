function ControlWeb() {
    console.log("Control Web iniciado");
    // Aquí va la lógica para controlar la web

    this.mostrarAgregarUsuario = function() {
        

        //inyección de código html para el formulario de usuario
        let cadena = '<div id="Formdiv" class="form-group">'
        cadena += '<label for="usr">Name:</label>'
        cadena += '<input type="text" class="form-control" id="nick">'
        cadena += '<button id="auB" type="submit" class="btn btn-primary mt-3">Submit</button>'
        cadena += '</div>'
        $("#auB").on("click",function(){
            let nick=$("#nick").val();
            rest.agregarUsuario(nick);
            $("#Formdiv").remove();
        });
        $("#Form").html(cadena);
    }

    this.mostrarObtenerUsuarios = function() {
        


        //inyección de código html para el formulario de usuario
        let cadena = '<div id="uFormdiv" class="form-group">'
        cadena += '<button id="uB" type="submit" class="btn btn-primary mt-3">Buscar</button>'
        cadena += '</div>'
        c$("#uB").on("click",function(){
            rest.obtenerUsuarios(function(users){cw.mostrarUsuarios(users);});
        });
        $("#Form").html(cadena);
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
        $("#Form").html(cadena);
    }

    this.numeroUsuarios = function() {
        rest.numeroUsuarios(function(num) {
            let cadena = `<div><p>Número de usuarios: </p>` + JSON.stringify(num) + `</div>`;
            $("#Form").html(cadena);
        });
    }

    this.mostrarUsuarioActivo = function() {

        let cadena = '<div id="uaFormdiv" class="form-group">'
        cadena += '<label for="usr">Name:</label>'
        cadena += '<input type="text" class="form-control" id="nick">'
        cadena += '<button id="uaB" type="submit" class="btn btn-primary mt-3">Submit</button>'
        cadena += '</div>'
        $("#uaB").on("click",function(){
            let nick=$("#nick").val();
            rest.usuarioActivo(nick,function(res){
                $("#Form").html(`<div><p>el usuario ` + nick + ` existe? </p>` + JSON.stringify(res.res) + `</div>`);
            });
        });
        $("#Form").html(cadena);
    }

    this.mostrarEliminarUsuario = function() {

        let cadena = '<div id="euFormdiv" class="form-group">'
        cadena += '<label for="usr">Name:</label>'
        cadena += '<input type="text" class="form-control" id="nick">'
        cadena += '<button id="euB" type="submit" class="btn btn-primary mt-3">Submit</button>'
        cadena += '</div>'
        cadena += '<script>'
        c$("#euB").on("click",function(){
            let nick=$("#nick").val();
            rest.eliminarUsuario(nick,function(res){
                $("#Form").html(`<div><p>el usuario ` + nick + ` ha sido eliminado? </p>` + JSON.stringify(res[nick]) + `</div>`);
            });
        });
        $("#Form").html(cadena);
    }
}