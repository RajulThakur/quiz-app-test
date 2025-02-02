import {FormattedText} from './FormattedText';

function Explation({explanation}: {explanation: string}) {
  const extractFirstBoldText = (text: string): [string | null, string] => {
    const boldMatch = text.match(/\*\*(.*?)\*\*/);
    if (boldMatch) {
      const [fullMatch, boldText] = boldMatch;
      return [boldText, text.replace(fullMatch, '').trim()];
    }
    return [null, text];
  };

  const [heading, remainingText] = extractFirstBoldText(explanation);

  return (
    <div className="flex h-full flex-col rounded-lg bg-gray-50 p-4 transition-all duration-300 ease-in-out dark:bg-gray-800">
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
        {heading || 'Explanation:'}
      </h3>
      <div className="flex-1 overflow-y-auto">
        <span className="text-gray-700 dark:text-gray-300">
          <FormattedText text={remainingText} />
        </span>
      </div>
    </div>
  );
}

export default Explation;
