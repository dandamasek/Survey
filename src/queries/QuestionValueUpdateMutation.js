import { authorizedFetch } from './authorizedFetch';

const QuestionValueUpdateJSON = (lastchange,id,name,order) => ({
  query: `
  mutation(
    $lastchange: DateTime!,
    $id: ID!,
    $name: String,
    $order: Int,  
  ){

    questionValueUpdate(questionValue:
      {
        lastchange: $lastchange,
        id: $id,
        name: $name, 
        order: $order })
        {
          msg
          id
          question
            {
              id
              lastchange
              name
              order
            }
        }
  }`,
    variables:{
      lastchange: lastchange,
      id: id,
      name: name,
      order: order
    }
});
/*
Sends a mutation request to update a question value.
*/
export const QuestionValueUpdateMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(QuestionValueUpdateJSON(props.lastchange, props.id, props.name ,props.order))
  })


  








  

//   import {authorizedFetch} from "./authorizedFetch";

// const AddFacilityToLessonMutationJSON = (lessonId, facilityId) => ({
//     query:`
//     mutation(
//         $lessonId: ID!,
//         $facilityId: ID!,
//     ) {
//   plannedLessonFacilityInsert(facilitylesson: {
//     planlessonId: $lessonId, 
//     facilityId: $facilityId}) {
//     id
//     msg
//     lesson {
//         id
//         name
//         lastchange
//         order
//         groups { id, name }
//         users { id, email }
//         facilities { id, name }
//         plan { id }
//         topic { lessons { type { id, name } } }
//     }
//   }
// }`,
//     variables:{
//         lessonId: lessonId,
//         facilityId: facilityId,
//     }
// });

// /**
//  * Funkcia pre vytvorenie mutácie pre pridanie zariadenia do hodiny.
//  * @param {Object} props - Vlastnosti mutácie
//  * @param {string} props.lessonId - ID hodiny
//  * @param {string} props.facilityId - ID zariadenia
//  * @returns {Promise} - Promise s výsledkom mutácie
//  */

// export const AddFacilityToLessonMutation = (props) =>
//     authorizedFetch('/gql', {
//         body: JSON.stringify(AddFacilityToLessonMutationJSON(props.lessonId, props.facilityId)),
//     })