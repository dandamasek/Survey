import { useDispatch } from 'react-redux';
import { SurveyUpdateFetch } from '../async/SurveyUpdateFetch';

/**
 * Component for a button that updates a survey's name.
 * @param {object} props - The component props containing the survey details.
 * @returns {JSX.Element} - The rendered component.
 * @function 
 */
export const SurveyUpdateButton = (props) => {
  const dispatch = useDispatch();

  
  return (
    <button className="btn btn-secondary m-2" onClick={() => dispatch(SurveyUpdateFetch(props))}>
      Change Name
    </button>
  );
};
