import { useState, useEffect, useRef } from 'react';
import Card from 'components/UI/Card';
import { SCards } from 'components/Cards/style.js';

const DUMMY_DATA = [
  {
    id: 'c1',
    color: '',
    title: 'default',
    content:
      'Default (law), the failure to do something required by lawDefault (finance), failure to satisfy the terms of a loan obligation or failure to pay back a loanDefault judgment, a binding judgment in favor of either party based on some failure to take action by the other partyDefault rule, a rule of law that can be overridden by a contract, trust, will, or other legally effective agreement',
  },
  {
    id: 'c2',
    color: '#f28b82',
    title: 'red',
    content:
      'Red is a 2010 American action comedy film loosely inspired by the Homage Comics limited series of the same name.',
  },
  {
    id: 'c3',
    color: '#fbbc04',
    title: 'orange',
    content:
      'The orange is the fruit of various citrus species in the family Rutaceae (see list of plants known as orange); it primarily refers to Citrus × sinensis,[1] which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations. ',
  },
  {
    id: 'c4',
    color: '#fff475',
    title: 'yellow',
    content:
      'Look at the stars Look how they shine for you And everything you do Yeah, they were all yellow I came along I wrote a song for you And all the things you do  ',
  },
  {
    id: 'c5',
    color: '#ccff90',
    title: 'green',
    content:
      'Green is the color between blue and yellow on the visible spectrum. It is evoked by light which has a dominant wavelength of roughly 495–570 nm. In subtractive color systems, used in painting and color printing, it is created by a combination of yellow and cyan; in the RGB color model, used on television and computer screens, it is one of the additive primary colors, along with red and blue, which are mixed in different combinations to create all other colors. By far the largest contributor to green in nature is chlorophyll, the chemical by which plants photosynthesize and convert sunlight into chemical energy. Many creatures have adapted to their green environments by taking on a green hue themselves as camouflage. Several minerals have a green color, including the emerald, which is colored green by its chromium content.',
  },
  {
    id: 'c6',
    color: '#a7ffeb',
    title: 'teal',
    content:
      'Teal is a cyan-green color. Its name comes from that of a bird — the Eurasian teal (Anas crecca) — which presents a similarly colored stripe on its head. The word is often used colloquially to refer to shades of cyan in general.',
  },
  {
    id: 'c7',
    color: '#cbf0f8',
    title: 'blue',
    content:
      'Blue is one of the three primary colours of pigments in painting and traditional colour theory, as well as in the RGB colour model. It lies between violet and green on the spectrum of visible light. The eye perceives blue when observing light with a dominant wavelength between approximately 450 and 495 nanometres. Most blues contain a slight mixture of other colours; azure contains some green, while ultramarine contains some violet. The clear daytime sky and the deep sea appear blue because of an optical effect known as Rayleigh scattering. An optical effect called Tyndall effect explains blue eyes. Distant objects appear more blue because of another optical effect called aerial perspective.',
  },
  {
    id: 'c8',
    color: '#aecbfa',
    title: 'dark-blue',
    content:
      "Los Angeles, 1992. The film opens in medias res to LAPD Sergeant Eldon Perry, who is pacing in a motel room with a shotgun and pistol. Five days earlier, four people are killed and one wounded when two men, Darryl Orchard and Gary Sidwell, rob a convenience store in order to gain access to a safe in the office. Meanwhile, Perry defends his partner, Detective Bobby Keough, before an internal hearing concerning Keough's use of deadly force in a previous case; Keough is later exonerated. Perry and Keough later celebrate the former's impending promotion with their superior, Jack Van Meter, who is also Keough's uncle. Van Meter, a corrupt cop who often encourages his subordinates to fabricate evidence, visits Orchard and Sidwell's house later that night and takes the money stolen from the safe, admonishing them for behaving recklessly during the robbery.",
  },
  {
    id: 'c9',
    color: '#d7aefb',
    title: 'purple',
    content:
      'Purple is, generally, any color with hue between red and blue.[1][2] Blue-dominated hues may be classed as violet instead, especially in the United Kingdom.',
  },
  {
    id: 'c10',
    color: '#fdcfe8',
    title: 'pink',
    content:
      'Pink is a color that is a pale tint of red and is named after a flower of the same name.[2][3] It was first used as a color name in the late 17th century.[4] According to surveys in Europe and the United States, pink is the color most often associated with charm, politeness, sensitivity, tenderness, sweetness, childhood, femininity and romance. A combination of pink and white is associated with chastity and innocence, whereas a combination of pink and black links to eroticism and seduction.',
  },
  {
    id: 'c11',
    color: '#e6c9a8',
    title: 'brown',
    content:
      'Brown is a composite color. In the CMYK color model used in printing or painting, brown is made by combining red, black, and yellow,[1][2] or red, yellow, and blue.[3] In the RGB color model used to project colors onto television screens and computer monitors, brown is made by combining red and green, in specific proportions. In painting, brown is generally made by adding black to orange. The brown color is seen widely in nature, wood, soil, human hair color, eye color and skin pigmentation. Brown is the color of dark wood or rich soil.[4] According to public opinion surveys in Europe and the United States, brown is the least favorite color of the public; it is often associated with plainness, the rustic, feces, and poverty.[5] More positive associations include baking, warmth, wildlife and the autumn',
  },
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
  const masonryRef = useRef();
  const [masonryDom, setMasonryDom] = useState(null);

  useEffect(() => {
    setMasonryDom(masonryRef.current);
  }, []);

  return (
    <SCards className='masonry' ref={masonryRef}>
      {DUMMY_DATA.map((card) => (
        <Card
          key={card.id}
          color={card.color}
          title={card.title}
          content={card.content}
          masonryDom={masonryDom}
        />
      ))}
    </SCards>
  );
};

export default Cards;
