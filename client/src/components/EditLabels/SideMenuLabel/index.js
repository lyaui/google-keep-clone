import { Fragment, useRef, useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { toast } from 'react-toastify';
import { TOAST_TEXT } from 'constants/toastText.js';
import { updateLabel, deleteLabel } from 'store/labelsSlice/labels-action.js';
import { useAuth } from 'contexts/auth-context';
import * as Icon from 'components/UI/Icon/index.js';
import {
  SLabel,
  SLabelIcon,
  SLabelEditInput,
  SLabelValue,
  SLabelErrMsg,
} from 'components/EditLabels/style.js';

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
};

const labelReducer = (state = INIT_LABEL_STATES, action) => {
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
    default:
      return state;
  }
};

const SideMenuLabel = ({ label, isSideMenu }) => {
  const dispatch = useDispatch();
  const { labels } = useSelector((state) => state.labels);
  const [inputStates, inputDispatch] = useReducer(labelReducer, INIT_LABEL_STATES);
  const { isEditing, textValue, tempInputValue, errorMessage } = inputStates;
  const { authState } = useAuth();
  const { userId } = authState;
  const inputRef = useRef('');

  useEffect(() => {
    inputDispatch({ type: LABEL_ACTIONS.INIT, textValue: label.name, tempInputValue: label.name });
  }, [label.name]);

  const deleteLabelHandler = (e) => {
    e.preventDefault();
    dispatch(deleteLabel(label._id));
    toast(TOAST_TEXT.LABEL_UPDATE_SUCCESS);
  };

  const switchInputHandler = (e) => {
    e.preventDefault();
    inputDispatch({
      type: LABEL_ACTIONS.SWITCH,
      isEditing: true,
      tempInputValue: tempInputValue,
    });
  };

  const changeInputHandler = (e) => {
    e.preventDefault();
    inputDispatch({
      type: LABEL_ACTIONS.CHANGE,
      textValue: inputRef.current.value,
      tempInputValue: inputRef.current.value,
    });
  };

  const blurInputHandler = (e) => {
    e.preventDefault();
    inputDispatch({
      type: LABEL_ACTIONS.BLUR,
      isEditing: false,
    });
  };

  const updateLabelHandler = (e) => {
    e.preventDefault();

    const isLabelExisted = !!labels.find((label) => label.name === textValue.trim());
    if (!textValue.trim())
      return inputDispatch({ type: LABEL_ACTIONS.ERROR, errorMessage: '請輸入標籤內容' });
    if (isLabelExisted)
      return inputDispatch({ type: LABEL_ACTIONS.ERROR, errorMessage: '標籤已存在' });
    dispatch(
      updateLabel({
        labelId: label._id,
        payload: { name: tempInputValue.trim(), creator: userId },
      }),
    );
    toast(TOAST_TEXT.LABEL_UPDATE_SUCCESS);
  };

  const isSameValue = textValue.trim() === label.name;

  return (
    <Fragment>
      <SLabel key={label.id} isSideMenu={isSideMenu}>
        <SLabelIcon>
          <Icon.Label name={'label'} />
        </SLabelIcon>
        {/* delete */}
        <Tippy content={TOOLTIP_TEXT.DELETE_LABEL}>
          <SLabelIcon onClick={deleteLabelHandler}>
            <Icon.Delete name={'delete'} />
          </SLabelIcon>
        </Tippy>
        {/* edit */}
        {!isEditing && (
          <SLabelValue>
            <span onClick={switchInputHandler}>{textValue || '輸入標籤名稱'}</span>
            {errorMessage && <SLabelErrMsg>{errorMessage}</SLabelErrMsg>}
          </SLabelValue>
        )}

        {isEditing && (
          <SLabelEditInput
            autoFocus
            type='text'
            ref={inputRef}
            value={tempInputValue}
            onChange={changeInputHandler}
            onBlur={blurInputHandler}
            placeholder='輸入標籤名稱'
          />
        )}

        {/* switch edit / save edit */}
        {isSameValue}
        <Tippy content={isSameValue ? TOOLTIP_TEXT.RENAME_LABEL : TOOLTIP_TEXT.SAVE_RENAME_LABEL}>
          <SLabelIcon onClick={isSameValue ? switchInputHandler : updateLabelHandler}>
            {isSameValue ? <Icon.Edit /> : <Icon.Save />}
          </SLabelIcon>
        </Tippy>
      </SLabel>
    </Fragment>
  );
};

export default SideMenuLabel;
