export class Producto{
  public id: number;
  public nombre: string;
  public valor: number;
  public existencias: number;
  public balance: number;


  constructor() {
    this.id = 0;
    this.nombre = 'nombre del producto';
    this.valor = 0;
    this.existencias = 0;
    this.balance = 0;
  }
}
