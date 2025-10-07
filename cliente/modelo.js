function Sistema(){
    this.usuarios={};
    this.agregarUsuario=function(nick){
        this.usuarios[nick]=new Usuario(nick);
    }
    this.obtenerUsuarios=function(){
        return this.usuarios;
    }
    this.usuarioActivo=function(nick){
        return Object.hasOwn(this.usuarios,nick);
    }
}

function Usuario(nick){
    this.nick=nick;
}