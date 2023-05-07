"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

function Yazilar3() {
  const initialText = `
  import java.util.Scanner;

  public class UcakBiletiHesaplama {
      public static void main(String[] args) {
          Scanner scanner = new Scanner(System.in);
  
          System.out.print("Mesafeyi km türünden giriniz: ");
          int mesafe = scanner.nextInt();
  
          System.out.print("Yaşınızı giriniz: ");
          int yas = scanner.nextInt();
  
          System.out.print("Yolculuk tipini giriniz (1 => Tek Yön, 2 => Gidiş Dönüş): ");
          int yolculukTipi = scanner.nextInt();
  
          if (mesafe <= 0 || yas < 0 || yolculukTipi < 1 || yolculukTipi > 2) {
              System.out.println("Hatalı Veri Girdiniz !");
              return;
          }
  
          double normalTutar = mesafe * 0.10;
  
          double indirimliTutar = normalTutar;
          if (yas < 12) {
              indirimliTutar *= 0.5;
          } else if (yas < 24) {
              indirimliTutar *= 0.9;
          } else if (yas >= 65) {
              indirimliTutar *= 0.7;
          }
  
          if (yolculukTipi == 2) {
              indirimliTutar *= 0.8;
          }
  
          double toplamTutar = indirimliTutar * (yolculukTipi == 2 ? 2 : 1);
  
          System.out.println("Toplam Tutar = " + toplamTutar + " TL");
      }
  }
  
  `;
  const goCode = `
  package main

  import (
      "fmt"
  )
  
  func main() {
      var mesafe int
      fmt.Print("Mesafeyi km türünden giriniz: ")
      fmt.Scan(&mesafe)
  
      var yas int
      fmt.Print("Yaşınızı giriniz: ")
      fmt.Scan(&yas)
  
      var yolculukTipi int
      fmt.Print("Yolculuk tipini giriniz (1 => Tek Yön, 2 => Gidiş Dönüş): ")
      fmt.Scan(&yolculukTipi)
  
      if mesafe <= 0 || yas < 0 || yolculukTipi < 1 || yolculukTipi > 2 {
          fmt.Println("Hatalı Veri Girdiniz !")
          return
      }
  
      normalTutar := float64(mesafe) * 0.10
  
      indirimliTutar := normalTutar
      if yas < 12 {
          indirimliTutar *= 0.5
      } else if yas < 24 {
          indirimliTutar *= 0.9
      } else if yas >= 65 {
          indirimliTutar *= 0.7
      }
  
      if yolculukTipi == 2 {
          indirimliTutar *= 0.8
      }
  
      toplamTutar := indirimliTutar * float64(yolculukTipi)
  
      fmt.Printf("Toplam Tutar = %.2f TL", toplamTutar)
  }
  
  
  `;

  const pythonCode = `
  mesafe = int(input("Mesafeyi km türünden giriniz: "))
  yas = int(input("Yaşınızı giriniz: "))
  yolculukTipi = int(input("Yolculuk tipini giriniz (1 => Tek Yön, 2 => Gidiş Dönüş): "))
  
  if mesafe <= 0 or yas < 0 or yolculukTipi < 1 or yolculukTipi > 2:
      print("Hatalı Veri Girdiniz !")
  else:
      normalTutar = mesafe * 0.10
  
      indirimliTutar = normalTutar
      if yas < 12:
          indirimliTutar *= 0.5
      elif yas < 24:
          indirimliTutar *= 0.9
      elif yas >= 65:
          indirimliTutar *= 0.7
  
      if yolculukTipi == 2:
          indirimliTutar *= 0.8
  
      toplamTutar = indirimliTutar * yolculukTipi
  
      print("Toplam Tutar = {:.2f} TL".format(toplamTutar))
  
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
      <h1>Uçak Bileti Fiyatı Hesaplama</h1>
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

export default Yazilar3;
