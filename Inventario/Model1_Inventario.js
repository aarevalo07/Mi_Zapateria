class Zapato {
  constructor(nombre, marca, modelo, talla, color, precio, cantidad, exhibicion) {
    this.nombre = nombre;
    this.marca = marca;
    this.modelo = modelo;
    this.talla = talla;
    this.color = color;
    this.precio = precio;
    this.cantidad = cantidad;
    this.exhibicion = exhibicion;
  }
}

class Inventario {
  constructor() {
    this.zapatos = [];
  }

  agregarZapato(zapato) {
    this.zapatos.push(zapato);
  }

  eliminarZapato(nombre) {
    this.zapatos = this.zapatos.filter((zapato) => zapato.nombre !== nombre);
  }
}

let inventario = new Inventario();

let zapato1 = new Zapato("Zapato 1", "Nike", "Air Max", 42, "Negro", 100, 10, "N/A");
let zapato2 = new Zapato(
  "Zapato 2",
  "Adidas",
  "Superstar",
  40,
  "Blanco",
  80,
  20,
  "BN"
);

inventario.agregarZapato(zapato1);
inventario.agregarZapato(zapato2);

console.log(inventario.zapatos);
