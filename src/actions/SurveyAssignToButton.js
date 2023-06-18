import { useDispatch } from 'react-redux';
import {SurveyAssignToFetch } from '../async/SurveyAssignToFetch';

/**
 * Component for a button that assigns a survey to the current user.
 * @param {Object} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export const SurveyAssignToUserButton = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button className="btn btn-outline-dark" onClick={() => dispatch(SurveyAssignToFetch(props))}>
        Assign survey to currentUser
      </button>
    </div>
  );
};