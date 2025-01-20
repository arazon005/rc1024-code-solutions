import './Accordion.css';
import { useState } from 'react';
type AccordionProps = {
  topics: { id: number; title: string; content: string }[];
};

export default function Accordion({ topics }: AccordionProps) {
  const [openTopicId, setOpenTopicId] = useState(1);
  function handleClick(id: number) {
    if (openTopicId === Number(id)) {
      setOpenTopicId(0);
    } else {
      setOpenTopicId(Number(id));
    }
  }
  return (
    <div>
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={openTopicId === topic.id}
          clickHandler={handleClick}
        />
      ))}
    </div>
  );
}

type TopicCardProps = {
  topic: { id: number; title: string; content: string };
  isOpen: boolean;
  clickHandler: (id: number) => void;
};

function TopicCard({ topic, isOpen, clickHandler }: TopicCardProps) {
  return (
    <>
      <h2 onClick={() => clickHandler(topic.id)}>{topic.title}</h2>
      {isOpen && <p>{topic.content}</p>}
    </>
  );
}
