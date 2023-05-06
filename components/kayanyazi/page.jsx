"use client"
import { useEffect, useState } from 'react';
import Typed from 'typed.js';

const TypingText = ({ text }) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const typed = new Typed('.typing-text', {
      strings: text,
      typeSpeed: 50,
      loop: true,
      backDelay: 900,
      backSpeed: 30,
      onStringTyped: (arrayPos, self) => {
        setCurrentText(self.strings[arrayPos]);
      },
    });

    return () => {
      typed.destroy();
    };
  }, [text]);

  return <span className="typing-text">{currentText}</span>;
};

export default TypingText;
