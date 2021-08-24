import { SCard } from 'components/UI/Card/style.js';
import CardHeader from 'components/UI/Card/CardHeader';
import CardContent from 'components/UI/Card/CardContent';
import CardFooter from 'components/UI/Card/CardFooter';

const Crad = ({ color, title, content }) => {
  return (
    <SCard color={color}>
      <CardHeader>{title}</CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter />
    </SCard>
  );
};

export default Crad;
