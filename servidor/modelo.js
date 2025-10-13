function Sistema(){
    this.usuarios={};
    this.agregarUsuario=function(nick){
        let res = {nick:-1};
        if (!this.usuarios[nick]){
            this.usuarios[nick]=new Usuario(nick);
            res.nick=nick;
        }
        else{
            console.log("el nick " + nick + " está en uso");
        }
        return res;
    }
    this.obtenerUsuarios=function(){
        return this.usuarios;
    }
    this.usuarioActivo=function(nick){
        let res = {"res":false};
        if (this.usuarios[nick]){
            res.res=true;
        }
        else{
            console.log("el nick " + nick + " no existe");
        }
        return res;
    }
    this.eliminarUsuario=function(nick){
        let res = {[nick]:false};
        if (delete this.usuarios[nick]) {
            res[nick] = true;
            return res;
        }
        return res;
    }
    this.numeroUsuarios=function(){
        return Object.keys(this.usuarios).length
    }
}

function Usuario(nick){
    this.nick=nick;
}

module.exports.Sistema=Sistema