"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

function Yazilar2() {
  const initialText = `
  import java.util.Scanner;

  public class ManavKasaProgrami {
      public static void main(String[] args) {
          Scanner scanner = new Scanner(System.in);
  
          double armutFiyat = 2.14;
          double elmaFiyat = 3.67;
          double domatesFiyat = 1.11;
          double muzFiyat = 0.95;
          double patlicanFiyat = 5.00;
  
          System.out.print("Armut kaç kilo? : ");
          double armutKilo = scanner.nextDouble();
  
          System.out.print("Elma kaç kilo? : ");
          double elmaKilo = scanner.nextDouble();
  
          System.out.print("Domates kaç kilo? : ");
          double domatesKilo = scanner.nextDouble();
  
          System.out.print("Muz kaç kilo? : ");
          double muzKilo = scanner.nextDouble();
  
          System.out.print("Patlıcan kaç kilo? : ");
          double patlicanKilo = scanner.nextDouble();
  
          double toplamTutar = (armutKilo * armutFiyat) +
                              (elmaKilo * elmaFiyat) +
                              (domatesKilo * domatesFiyat) +
                              (muzKilo * muzFiyat) +
                              (patlicanKilo * patlicanFiyat);
  
          System.out.println("Toplam Tutar : " + toplamTutar + " TL");
      }
  }
  

  `;
  const goCode = `
  package main

  import "fmt"
  
  func main() {
      var armutFiyat float64 = 2.14
      var elmaFiyat float64 = 3.67
      var domatesFiyat float64 = 1.11
      var muzFiyat float64 = 0.95
      var patlicanFiyat float64 = 5.00
  
      var armutKilo float64
      fmt.Print("Armut kaç kilo? : ")
      fmt.Scan(&armutKilo)
  
      var elmaKilo float64
      fmt.Print("Elma kaç kilo? : ")
      fmt.Scan(&elmaKilo)
  
      var domatesKilo float64
      fmt.Print("Domates kaç kilo? : ")
      fmt.Scan(&domatesKilo)
  
      var muzKilo float64
      fmt.Print("Muz kaç kilo? : ")
      fmt.Scan(&muzKilo)
  
      var patlicanKilo float64
      fmt.Print("Patlıcan kaç kilo? : ")
      fmt.Scan(&patlicanKilo)
  
      toplamTutar := (armutKilo * armutFiyat) +
                     (elmaKilo * elmaFiyat) +
                     (domatesKilo * domatesFiyat) +
                     (muzKilo * muzFiyat) +
                     (patlicanKilo * patlicanFiyat)
  
      fmt.Printf("Toplam Tutar : %.2f TL", toplamTutar)
  }
  
  `;

  const pythonCode = `
  armutFiyat = 2.14
  elmaFiyat = 3.67
  domatesFiyat = 1.11
  muzFiyat = 0.95
  patlicanFiyat = 5.00
  
  armutKilo = float(input("Armut kaç kilo? : "))
  elmaKilo = float(input("Elma kaç kilo? : "))
  domatesKilo = float(input("Domates kaç kilo? : "))
  muzKilo = float(input("Muz kaç kilo? : "))
  patlicanKilo = float(input("Patlıcan kaç kilo? : "))
  
  toplamTutar = (armutKilo * armutFiyat) + \
                (elmaKilo * elmaFiyat) + \
                (domatesKilo * domatesFiyat) + \
                (muzKilo * muzFiyat) + \
                (patlicanKilo * patlicanFiyat)
  
  print("Toplam Tutar : {:.2f} TL".format(toplamTutar))
  
  `;

  const [text, setText] = useState(initialText);
  const [activeButton, setActiveButton] = useState("Java");

  const handleButtonClick = (buttonText, buttonName) => {
    setText(buttonText);
    setActiveButton(buttonName);
  };

  const buttonStyle = (buttonName) => ({
    marginRight: "10px",
    backgroundColor: activeButton === buttonName ? "lightblue" : "white",
    fontSize: "18px",
    padding: "10px",
  });
  return (
    <div className="App">
      <h1>Manav Kasa Programı</h1>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => handleButtonClick(initialText, "Java")}
          style={buttonStyle("Java")}
        >
          Java
        </button>
        <button
          onClick={() => handleButtonClick(goCode, "Go")}
          style={buttonStyle("Go")}
        >
          Go
        </button>
        <button
          onClick={() => handleButtonClick(pythonCode, "Python")}
          style={buttonStyle("Python")}
        >
          Python
        </button>
      </div>
      {activeButton === "Java" && (
        <SyntaxHighlighter language="java" style={darcula}>
          {text}
        </SyntaxHighlighter>
      )}
      {activeButton === "Go" && (
        <SyntaxHighlighter language="go" style={darcula}>
          {goCode}
        </SyntaxHighlighter>
      )}
      {activeButton === "Python" && (
        <SyntaxHighlighter language="python" style={darcula}>
          {pythonCode}
        </SyntaxHighlighter>
      )}
    </div>
  );
}

export default Yazilar2;
