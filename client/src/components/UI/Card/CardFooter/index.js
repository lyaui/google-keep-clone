import EditCardColorButton from 'components/ActionButtons/EditCardColorButton';
import EditCardLabelsButton from 'components/ActionButtons/EditCardLabelsButton';
import CopyMemoButton from 'components/ActionButtons/CopyMemoButton';
import EditCardArchiveButton from 'components/ActionButtons/EditCardArchiveButton';
import DeleteCardButton from 'components/ActionButtons/DeleteCardButton';
import { SCardFooter } from 'components/UI/Card/CardFooter/style.js';

const CardFooter = ({ id, isOnlyImages, isOnlyLinks, isOnlyImagesAndLinks }) => {
  const isOnlyImagesOrLinks = isOnlyImages || isOnlyLinks;
  return (
    <SCardFooter
      isOnlyImagesOrLinks={isOnlyImagesOrLinks}
      isOnlyImagesAndLinks={isOnlyImagesAndLinks}
    >
      {/* palette */}
      <EditCardColorButton id={id} />
      {/* labels */}
      <EditCardLabelsButton id={id} />
      {/* copy */}
      <CopyMemoButton id={id} />
      {/* archive */}
      <EditCardArchiveButton id={id} />
      {/* delete */}
      <DeleteCardButton id={id} />
    </SCardFooter>
  );
};

export default CardFooter;
