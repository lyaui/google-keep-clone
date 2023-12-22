import { Fragment, useRef, useEffect, useReducer, memo } from 'react';
import type { MouseEvent, ChangeEvent } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import type { MemoLabel } from '@/types';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import {
  useFetchLabelsQuery,
  usePatchLabelNameMutation,
  useDeleteLabelMutation,
} from '@/store/apis/labelApi';
import * as Icon from '@/components/UI/Icon';
import {
  SLabel,
  SLabelIcon,
  SLabelEditInput,
  SLabelValue,
  SLabelErrMsg,
} from '@/components/EditLabels/style';

const INIT_LABEL_STATES = {
  isEditing: false,
  textValue: '',
  tempInputValue: '',
  errorMessage: '',
};

const LABEL_ACTIONS = {
  INIT: 'INIT',
  CHANGE: 'CHANGE',
  SWITCH: 'SWITCH',
  BLUR: 'BLUR',
  ERROR: 'ERROR',
  RESET: 'RESET',
} as const;

type LabelAction =
  | {
      type: typeof LABEL_ACTIONS.INIT;
      textValue: string;
      tempInputValue: string;
    }
  | {
      type: typeof LABEL_ACTIONS.SWITCH;
      isEditing: boolean;
      tempInputValue: string;
    }
  | {
      type: typeof LABEL_ACTIONS.CHANGE;
      textValue: string;
      tempInputValue: string;
    }
  | { type: typeof LABEL_ACTIONS.BLUR; isEditing: boolean }
  | { type: typeof LABEL_ACTIONS.ERROR; errorMessage: string }
  | { type: typeof LABEL_ACTIONS.RESET };

const labelReducer = (state = INIT_LABEL_STATES, action: LabelAction) => {
  switch (action.type) {
    case LABEL_ACTIONS.INIT:
      return {
        ...state,
        textValue: action.textValue,
        tempInputValue: action.tempInputValue,
        errorMessage: '',
      };
    case LABEL_ACTIONS.SWITCH:
      return {
        ...state,
        isEditing: action.isEditing,
        tempInputValue: action.tempInputValue,
        errorMessage: '',
      };
    case LABEL_ACTIONS.CHANGE:
      return {
        ...state,
        textValue: action.textValue,
        tempInputValue: action.tempInputValue,
        errorMessage: '',
      };
    case LABEL_ACTIONS.BLUR:
      return { ...state, isEditing: action.isEditing, errorMessage: '' };
    case LABEL_ACTIONS.ERROR:
      return { ...state, errorMessage: action.errorMessage };
    case LABEL_ACTIONS.RESET:
      return INIT_LABEL_STATES;
    default:
      return state;
  }
};

const EditableLabelInput = ({ label }: { label: MemoLabel }) => {
  const [inputStates, inputDispatch] = useReducer(labelReducer, {
    ...INIT_LABEL_STATES,
    textValue: label?.name || '',
  });
  const { isEditing, textValue, tempInputValue, errorMessage } = inputStates;
  const inputRef = useRef<HTMLInputElement>(null);

  const { data } = useFetchLabelsQuery();
  const labels = data?.labels || [];

  const [updateLabel, updateResult] = usePatchLabelNameMutation();
  const [deleteLabel, deleteResult] = useDeleteLabelMutation();
  const isLoading = updateResult.isLoading || deleteResult.isLoading;

  useEffect(() => {
    inputDispatch({
      type: LABEL_ACTIONS.INIT,
      textValue: label.name,
      tempInputValue: label.name,
    });
  }, [label.name]);

  const deleteLabelHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    deleteLabel(label._id);
    inputDispatch({
      type: LABEL_ACTIONS.RESET,
    });
  };

  const switchInputHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    inputDispatch({
      type: LABEL_ACTIONS.SWITCH,
      isEditing: true,
      tempInputValue: tempInputValue,
    });
  };

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    inputDispatch({
      type: LABEL_ACTIONS.CHANGE,
      textValue: inputRef.current?.value || '',
      tempInputValue: inputRef.current?.value || '',
    });
  };

  const blurInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    inputDispatch({
      type: LABEL_ACTIONS.BLUR,
      isEditing: false,
    });
  };

  const updateLabelHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    const isLabelExisted = !!labels.find(
      (label) => label.name === textValue.trim()
    );
    if (!textValue.trim())
      return inputDispatch({
        type: LABEL_ACTIONS.ERROR,
        errorMessage: '請輸入標籤內容',
      });
    if (isLabelExisted)
      return inputDispatch({
        type: LABEL_ACTIONS.ERROR,
        errorMessage: '標籤已存在',
      });

    updateLabel({
      labelId: label._id,
      body: { name: tempInputValue.trim() },
    });
  };

  const isSameValue = textValue.trim() === label.name;

  if (isLoading)
    return (
      <SkeletonTheme
        baseColor="var(--color-skeleton-bg)"
        highlightColor="var(--color-skeleton-highlight-bg)"
      >
        <Skeleton
          height={30}
          count={1}
          width={'calc(100% - 30px)'}
          style={{ margin: '0 15px' }}
        />
      </SkeletonTheme>
    );

  return (
    <Fragment>
      <SLabel key={label._id}>
        <SLabelIcon>
          <Icon.Label name={'label'} />
        </SLabelIcon>
        {/* delete */}
        <Tippy content={TOOLTIP_TEXT.DELETE_LABEL}>
          <SLabelIcon onClick={deleteLabelHandler}>
            <Icon.Delete name={'delete'} />
          </SLabelIcon>
        </Tippy>

        {isEditing ? (
          <SLabelEditInput
            autoFocus
            type="text"
            ref={inputRef}
            value={tempInputValue}
            onChange={changeInputHandler}
            onBlur={blurInputHandler}
            placeholder="輸入標籤名稱"
          />
        ) : (
          <SLabelValue>
            <span onClick={switchInputHandler}>{textValue}</span>
            {errorMessage && <SLabelErrMsg>{errorMessage}</SLabelErrMsg>}
          </SLabelValue>
        )}

        {/* switch edit / save edit */}
        {isSameValue}
        <Tippy
          content={
            isSameValue
              ? TOOLTIP_TEXT.RENAME_LABEL
              : TOOLTIP_TEXT.SAVE_RENAME_LABEL
          }
        >
          <SLabelIcon
            onClick={isSameValue ? switchInputHandler : updateLabelHandler}
          >
            {isSameValue ? <Icon.Edit /> : <Icon.Save />}
          </SLabelIcon>
        </Tippy>
      </SLabel>
    </Fragment>
  );
};

export default memo(EditableLabelInput);
