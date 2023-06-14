import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch} from 'react-redux';
import { SurveyFetchAsync } from 'actions/LoadSurveyDataAsync';
import { useEffect, useState } from 'react';
import QuestionAnswerTable from '../components/QuestionAnswerTable';
import {UserTable} from 'components/UserTable';

export default function SurveyEditor() {
  const surveys = useSelector(state => state.surveys);
 

  const currentUser = {id: "2d9dc5ca-a4a2-11ed-b9df-0242ac120003", email: "julia.newbie@world.com"};
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SurveyFetchAsync());
  }, []);

  const [id, setId] = useState(currentUser.id);
  const [email, setEmail] = useState(currentUser.email);

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <div><h1 className="p-4 mb-2 bg-primary text-white">Survey answer</h1></div>

      <div className='container-fluid'>
        <UserTable currentUser={currentUser} />
        <input type="text" value={id} onChange={handleIdChange} />
        <input type="text" value={email} onChange={handleEmailChange} />

        {surveys.map((survey) =>
          <div className='card m-5 border-secondary' key={survey.id + "Survey answer table"}>
            <div className='card-header bg-primary text-white'>
              <h1>{survey.name}</h1>
            </div>
            <QuestionAnswerTable questions={survey.questions} currentUser={{ id, email }} />
          </div>
        )}

      </div>
    </div>
  );
}