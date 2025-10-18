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
}