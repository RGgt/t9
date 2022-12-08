import React, { useRef } from 'react';
import MarkdownToHtml from './markdown/markdownToHtml';
import './card.css';

interface CardViewData {
  AversMarkdown: string;
  ReverseMarkdown: string;
}

function Card(props: CardViewData) {
  const clickableFace = useRef<HTMLInputElement>(null);
  let flipped = false;
  const toggleFlipped = () => {
    const element = clickableFace.current;
    if (!element) return;
    if (flipped) {
      element.classList.remove('flipped');
      flipped = false;
    } else {
      element.classList.add('flipped');
      flipped = true;
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      toggleFlipped();
    }
  };
  const { ReverseMarkdown: markdownReverse, AversMarkdown: markdownAvers } =
    props;
  return (
    <div className="card-typography">
      <div className="flip">
        <div
          className="flip-content"
          role="button"
          onClick={toggleFlipped}
          tabIndex={0}
          onKeyPress={handleKeyPress}
          ref={clickableFace}
        >
          <div className="flip-front">
            <MarkdownToHtml>{markdownAvers}</MarkdownToHtml>
          </div>
          <div className="flip-back">
            {' '}
            <MarkdownToHtml>{markdownReverse}</MarkdownToHtml>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
