import  {GroupsSelectQuery}  from '../queries/SurveyGroupQuery';


export default function SurveySelect() {

  let surveys = {}

    const fetchData = async () => {
      try {
        const response = await GroupsSelectQuery();
        const data = await response.json();
        console.log('Data from SurveySelect',data);
        // zmena return data
        return data;
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };

  fetchData();
 
  return surveys
}