import Card from 'components/UI/Card';
import { SCards } from 'components/Cards/style.js';

const DUMMY_DATA = [
  { id: 'c1', color: '', title: 'default', content: 'default' },
  { id: 'c2', color: '#f28b82', title: 'red', content: 'red' },
  { id: 'c3', color: '#fbbc04', title: 'orange', content: 'orange' },
  { id: 'c4', color: '#fff475', title: 'yellow', content: 'yellow' },
  { id: 'c5', color: '#ccff90', title: 'green', content: 'green' },
  { id: 'c6', color: '#a7ffeb', title: 'teal', content: 'teal' },
  { id: 'c7', color: '#cbf0f8', title: 'blue', content: 'blue' },
  { id: 'c8', color: '#aecbfa', title: 'dark-blue', content: 'dark-blue' },
  { id: 'c9', color: '#d7aefb', title: 'purple', content: 'purple' },
  { id: 'c10', color: '#fdcfe8', title: 'pink', content: 'pink' },
  { id: 'c11', color: '#e6c9a8', title: 'brown', content: 'brown' },
  { id: 'c12', color: '#e8eaed', title: 'gray', content: 'gray' },
];

// default #e0e0e0
// red #f28b82
// orange #fbbc04
// yellow #fff475
// green #ccff90
// teal #a7ffeb
// blue #cbf0f8
// dark-blue #aecbfa
// purple #d7aefb
// pink #fdcfe8
// brown #e6c9a8
// gray #e8eaed

const Cards = () => {
  return (
    <SCards>
      {DUMMY_DATA.map((card) => (
        <Card key={card.id} color={card.color} />
      ))}
    </SCards>
  );
};

export default Cards;
