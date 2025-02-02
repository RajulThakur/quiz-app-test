import {TopicItem} from '@/components/TopicItem';
import {Question} from '@/data/Question';

function ContestPage() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {Question.map((question) => (
        <TopicItem
          key={question.id}
          topic={question}
        />
      ))}
    </div>
  );
}

export default ContestPage;
