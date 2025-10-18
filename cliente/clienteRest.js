function ClienteRest(){
    this.agregarUsuario=function(nick){
        var cli=this;
        $.getJSON("/agregarUsuario/"+nick,function(data){
            if (data.nick!=-1){
                console.log("Usuario "+nick+" ha sido registrado")
            }
            else{
                console.log("El nick ya está ocupado");
            }
        })
    }
    this.agregarUsuario2=function(nick){
        $.ajax({
            type:'GET',
            url:'/agregarUsuario/'+nick,
            success:function(data){
                if (data.nick!=-1){
                console.log("Usuario "+nick+" ha sido registrado")
                }
                else{
                    console.log("El nick ya está ocupado");
                }
            },
            error:function(xhr, textStatus, errorThrown){
                console.log("Status: " + textStatus);
                console.log("Error: " + errorThrown);
            },
            contentType:'application/json'

        });
    }
    this.obtenerUsuarios=function(callback){
        $.ajax({
            type:'GET',
            url:'/obtenerUsuarios',
            success:function(data){
                console.log("Lista de usuarios obtenida" + JSON.stringify(data));
                callback(data);
            },
            error:function(xhr, textStatus, errorThrown){
                console.log("Status: " + textStatus);
                console.log("Error: " + errorThrown);
            },
            contentType:'application/json'

        });
    }
    this.numeroUsuarios=function(callback){
        $.ajax({
            type:'GET',
            url:'/numeroUsuarios',
            success:function(data){
                console.log("Hay registrados " + JSON.stringify(data) + " usuarios en el sistema");
                callback(data);
            },
            error:function(xhr, textStatus, errorThrown){
                console.log("Status: " + textStatus);
                console.log("Error: " + errorThrown);
            },
            contentType:'application/json'

        });
    }
    this.usuarioActivo=function(nick, callback){
        $.ajax({
            type:'GET',
            url:'/usuarioActivo/'+nick,
            success:function(data){
                if (data.res==true){
                    console.log("El usuario "+nick+" está activo");
                    callback(data);
                }
                else{
                    console.log("El usuario "+nick+" no está activo");
                    callback(data);
                }
            },
            error:function(xhr, textStatus, errorThrown){
                console.log("Status: " + textStatus);
                console.log("Error: " + errorThrown);
            },
            contentType:'application/json'

        });
    }
    this.eliminarUsuario=function(nick){
        $.ajax({
            type:'GET',
            url:'/eliminarUsuario/'+nick,
            success:function(data){
                if (data[nick]==true){
                    console.log("El usuario "+nick+" se ha eliminado correctamente");
                }
                else{
                    console.log("El usuario "+nick+" no se ha podido eliminar");
                }
            },
            error:function(xhr, textStatus, errorThrown){
                console.log("Status: " + textStatus);
                console.log("Error: " + errorThrown);
            },
            contentType:'application/json'

        });
    }
}