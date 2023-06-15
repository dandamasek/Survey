import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useSelector, useDispatch } from 'react-redux'; // Import necessary Redux hooks
import { SurveyFetchAsync } from 'actions/LoadSurveyDataAsync'; // Import the async action for fetching survey data
import { useEffect, useState } from 'react'; // Import React hooks for side effects and state management
import QuestionAnswerTable from '../components/QuestionAnswerTable'; // Import the QuestionAnswerTable component
import { UserTable } from 'components/UserTable'; // Import the UserTable component

export default function SurveyAnswer() {
  const surveys = useSelector(state => state.surveys); // Select surveys from the Redux store

  const currentUser = { id: "2d9dc5ca-a4a2-11ed-b9df-0242ac120003" }; // Define the current user object
  const dispatch = useDispatch(); // Create a dispatch function from the useDispatch hook

  useEffect(() => {
    dispatch(SurveyFetchAsync()); // Fetch survey data when the component mounts
  }, [dispatch]);

  const [id, setId] = useState(currentUser.id); // Set up state for the user ID

  const handleIdChange = (event) => {
    setId(event.target.value); // Update the user ID when the input value changes
  };

  return (
    <div>
      <div><h1 className="p-4 mb-2 bg-primary text-white">Survey answer</h1></div>

      <div className='container-fluid'>
        <UserTable currentUser={currentUser} /> {/* Render the UserTable component */}
        <input type="text" value={id} onChange={handleIdChange} /> {/* Render an input for user ID selection */}

        {/* Iterate over surveys and render the QuestionAnswerTable for surveys containing user answers */}
        {surveys.map((survey) => {
          const found = survey.questions.some(question => {
            return question.answers.some(answer => {
              return answer.user.id === id; // Check if the answer user ID matches the selected ID
            });
          });

          if (found) {
            return (
              <div className='card m-5 border-secondary' key={survey.id + "Survey answer table"}>
                <div className='card-header bg-primary text-white'>
                  <h1>{survey.name}</h1>
                </div>
                <QuestionAnswerTable questions={survey.questions} currentUser={{ id: id }} /> {/* Render the QuestionAnswerTable component */}
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
