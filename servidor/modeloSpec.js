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
    expect(sistema.agregarUsuario("Pepe")).toEqual(undefined);
  });
  it('obtenerUsuarios', function(){
    expect(sistema.obtenerUsuarios()).toEqual({});
  })
  it('usuarioActivo', function(){
    expect(sistema.usuarioActivo("Pepe")).toEqual(false);
  })
  it('eliminarUsuario', function(){
    expect(sistema.eliminarUsuario("Pepe")).toEqual(undefined);
  })
})