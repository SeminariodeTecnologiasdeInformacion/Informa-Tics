package com.mycompany.calculadora;

public class Main {
    public static void main(String[] args) {
        Calculadora calc = new Calculadora();

        System.out.println("Ejemplo de uso de la Calculadora:");
        System.out.println("2 + 3 = " + calc.sumar(2,3));
        System.out.println("8 * 2 (dividir en tu código) = " + calc.dividir(8,2));
        System.out.println("Historial promedio = " + calc.promedioHistorial());
    }
}
