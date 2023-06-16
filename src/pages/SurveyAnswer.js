import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { SurveyFetchAsync } from 'actions/LoadSurveyDataAsync';
import { useEffect, useState } from 'react';
import QuestionAnswerTable from '../components/QuestionAnswerTable';
import { UserTable } from 'components/UserTable';

export default function SurveyAnswer() {
  const surveys = useSelector(state => state.surveys);

  const currentUser = { id: "2d9dc5ca-a4a2-11ed-b9df-0242ac120003" };
  const dispatch = useDispatch();

  /*
  Fetch survey data when the component mounts
  */
  useEffect(() => {
    dispatch(SurveyFetchAsync());
  }, [dispatch]);

  const [id, setId] = useState(currentUser.id);

  /*
  Handle ID change event
  */
  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <div><h1 className="p-4 mb-2 bg-primary text-white">Survey answer</h1></div>

      <div className='container-fluid'>

        {/* Render the UserTable component */}
        <UserTable currentUser={currentUser} /> 
        
         {/* Render an input for user ID selection */}
        <input type="text" value={id} onChange={handleIdChange} />

        {/* Iterate over surveys and render the QuestionAnswerTable for surveys containing user answers */}
        {surveys.map((survey) => {
          const found = survey.questions.some(question => {
            return question.answers.some(answer => {
              return answer.user.id === id; 
            });
          });

          if (found) {
            return (
              <div className='card m-5 border-secondary' key={survey.id + "Survey answer table"}>
                <div className='card-header bg-primary text-white'>
                  <h1>{survey.name}</h1>
                </div>
                <QuestionAnswerTable questions={survey.questions} currentUser={{ id: id }} />
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}


