import React from 'react';

interface FormattedTextProps {
  text: string;
}

export function FormattedText({text}: FormattedTextProps) {
  const cleanText = (text: string) => {
    return text
      .trim() // Remove leading/trailing whitespace
      .split(/\n\s*\n/) // Split into paragraphs
      .filter((paragraph) => paragraph.trim()) // Remove empty paragraphs
      .map((paragraph) => paragraph.replace(/^(Explanation:\s*)+/i, '')) // Remove duplicate "Explanation:" at the start
      .join('\n\n'); // Join paragraphs back
  };

  const formatInlineText = (text: string) => {
    return text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong
            key={index}
            className="font-bold text-gray-900 dark:text-gray-100">
            {part.slice(2, -2)}
          </strong>
        );
      } else if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em
            key={index}
            className="italic text-gray-700 dark:text-gray-300">
            {part.slice(1, -1)}
          </em>
        );
      } else if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code
            key={index}
            className="rounded bg-gray-200 px-1 py-0.5 font-mono text-sm dark:bg-gray-700 dark:text-gray-300">
            {part.slice(1, -1)}
          </code>
        );
      } else {
        return part;
      }
    });
  };

  const formatText = (text: string) => {
    return text.split(/\n\s*\n/).map((paragraph, pIndex) => {
      if (paragraph.startsWith('# ')) {
        return (
          <h1
            key={pIndex}
            className="mb-4 text-2xl font-bold text-blue-600 dark:text-blue-400">
            {formatInlineText(paragraph.slice(2))}
          </h1>
        );
      } else if (paragraph.startsWith('## ')) {
        return (
          <h2
            key={pIndex}
            className="mb-3 text-xl font-semibold text-blue-500 dark:text-blue-400">
            {formatInlineText(paragraph.slice(3))}
          </h2>
        );
      } else if (paragraph.startsWith('> ')) {
        return (
          <blockquote
            key={pIndex}
            className="border-l-4 border-blue-500 bg-blue-100 p-3 italic text-gray-700 dark:border-blue-400 dark:bg-gray-800 dark:text-gray-300">
            {formatInlineText(paragraph.slice(2))}
          </blockquote>
        );
      } else if (paragraph.match(/^(- |\* )/)) {
        const listItems = paragraph.split('\n').map((item) => item.replace(/^[-*] /, '').trim());
        return (
          <ul
            key={pIndex}
            className="mb-4 list-disc pl-5 text-gray-800 dark:text-gray-300">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="mb-1">
                {formatInlineText(item)}
              </li>
            ))}
          </ul>
        );
      }

      return (
        <p
          key={pIndex}
          className="mb-4 text-gray-800 dark:text-gray-300">
          {formatInlineText(paragraph)}
        </p>
      );
    });
  };

  return <div className="whitespace-pre-line px-4">{formatText(cleanText(text))}</div>;
}
