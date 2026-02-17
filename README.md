# word-counter-hasmik-hunanyan

A lightweight, single-page web application designed to analyze text metrics in real-time. 

​🚀 Features
​Letter Counter: Counts only alphabetic characters, ignoring numbers, symbols, and whitespace.
​Word Counter: Uses transition logic to accurately count words regardless of extra spacing.
​Sentence Counter: Detects sentence boundaries using multilingual terminators.

​🛠️ Technical Implementation

​Letter Detection: Identified by checking if a character's uppercase version is different from its lowercase version. This effectively ignores numbers and symbols without needing a list of all possible letters.
​Word Transitions: Uses a boolean flag inWord.
​If the current character is not whitespace and inWord is false, a new word is counted.
​This prevents "empty" words caused by double spaces or newlines.
​Sentence Logic: Tracks specific terminal marks (., !, ?, 。, etc.) while ignoring consecutive marks (like !!!) to prevent over-counting.