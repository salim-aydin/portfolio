"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

function PracYazilar1() {
  const initialText = `
import java.util.Scanner;

public class VKI_Hesaplama {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Lütfen boyunuzu (metre cinsinde) giriniz: ");
        double boy = scanner.nextDouble();

        System.out.print("Lütfen kilonuzu giriniz: ");
        double kilo = scanner.nextDouble();

        double vki = kilo / (boy * boy);

        System.out.println("Vücut Kitle İndeksiniz: " + vki);
    }
}

  `;
  const goCode = `
package main

import (
	"fmt"
	"math"
)

func main() {
	var boy, kilo float64

	fmt.Print("Lütfen boyunuzu (metre cinsinde) giriniz: ")
	fmt.Scan(&boy)

	fmt.Print("Lütfen kilonuzu giriniz: ")
	fmt.Scan(&kilo)

	vki := kilo / math.Pow(boy, 2)

	fmt.Println("Vücut Kitle İndeksiniz:", vki)
}

  `;

  const pythonCode = `
boy = float(input("Lütfen boyunuzu (metre cinsinde) giriniz: "))
kilo = float(input("Lütfen kilonuzu giriniz: "))
  
vki = kilo / (boy ** 2)
  
print("Vücut Kitle İndeksiniz:", vki)
  
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
      <h1>Vücut Kitle İndeksi Hesaplama</h1>
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

export default PracYazilar1;
