import EditCardColorButton from '@/components/ActionButtons/EditCardColorButton';
import EditCardLabelsButton from '@/components/ActionButtons/EditCardLabelsButton';
import CopyMemoButton from '@/components/ActionButtons/CopyMemoButton';
import EditMemoArchiveButton from '@/components/ActionButtons/EditMemoArchiveButton';
import DeleteMemoButton from '@/components/ActionButtons/DeleteMemoButton';
import { SCardFooter } from '@/components/UI/Card/CardFooter/style.jsx';

interface CardFooter {
  id: string;
  isOnlyImages: boolean;
  isOnlyLinks: boolean;
  isOnlyImagesAndLinks: boolean;
}

function CardFooter({
  id,
  isOnlyImages,
  isOnlyLinks,
  isOnlyImagesAndLinks,
}: CardFooter) {
  const isOnlyImagesOrLinks = isOnlyImages || isOnlyLinks;
  return (
    <SCardFooter
      isOnlyImagesOrLinks={isOnlyImagesOrLinks}
      isOnlyImagesAndLinks={isOnlyImagesAndLinks}
      style={{
        '--position':
          isOnlyImagesOrLinks || isOnlyImagesAndLinks ? 'absolute' : 'unset',
        '--bottom': isOnlyImagesAndLinks ? '198px' : '0px',
        '--color':
          (isOnlyImagesOrLinks || isOnlyImagesAndLinks) &&
          'var(--color-card-footer-bg)',
      }}
    >
      {/* palette */}
      <EditCardColorButton id={id} />
      {/* labels */}
      <EditCardLabelsButton id={id} />
      {/* copy */}
      <CopyMemoButton id={id} />
      {/* archive */}
      <EditMemoArchiveButton id={id} />
      {/* delete */}
      <DeleteMemoButton id={id} />
    </SCardFooter>
  );
}

export default CardFooter;
