import { SCardContent } from 'components/UI/Card/CardContent/style.js';

function CardContent({ children }) {
  return <SCardContent contentEditable='true'>{children}</SCardContent>;
}

export default CardContent;
