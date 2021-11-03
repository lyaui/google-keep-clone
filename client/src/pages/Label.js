import { useMemo } from 'react';
import { useFetchMemos } from 'hooks/fetchMemos-hook.js';
import { useRouteMatch } from 'react-router-dom';
import { getUserMemosByLabelName } from 'store/memosSlice/memos-action.js';
import Cards from 'components/Cards';
import CardEditor from 'components/CardEditor';
import EditModal from 'components/EditModal';

const Label = () => {
  const {
    params: { labelName },
  } = useRouteMatch();

  const params = useMemo(() => ({ labelName, query: { isArchived: false } }), [labelName]);

  const { pinnedMemo, unpinnedMemo } = useFetchMemos({
    action: getUserMemosByLabelName,
    params,
  });

  return (
    <div>
      {/* editor */}
      <CardEditor />

      {/* isPinned === true */}
      {pinnedMemo.length > 0 && <Cards memos={pinnedMemo} title={'已固定'} />}
      {/* isPinned === false */}
      {unpinnedMemo.length > 0 && (
        <Cards memos={unpinnedMemo} title={pinnedMemo.length > 0 ? '其他記事' : ''} />
      )}
      {/* editModal */}
      <EditModal />
    </div>
  );
};

export default Label;
