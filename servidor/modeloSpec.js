const modelo = require("./modelo.js")

describe('El sistema...', function(){
  let sistema;
  beforeEach(function(){
    sistema = new modelo.Sistema()
  });

  it('Inicialmente no hay usuarios', function(){
    expect(sistema.numeroUsuarios()).toEqual(0);
  });
  it('Agregar usuario', function(){
    let result = {nick:"Pepe"};
    expect(sistema.agregarUsuario("Pepe")).toEqual(result);
  });
  it('obtenerUsuarios', function(){
    expect(sistema.obtenerUsuarios()).toEqual({});
  })
  it('usuarioActivo', function(){
    let result = {"res":false};
    expect(sistema.usuarioActivo("Pepe")).toEqual(result);
  })
  it('eliminarUsuario', function(){
    let result = {"Pepe":true}
    expect(sistema.eliminarUsuario("Pepe")).toEqual(result);
  })
})