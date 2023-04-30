import React from "react";
import 'survey-react/survey.css';
import * as Survey from "survey-react";
import Json from '../surveys/questionsone';

const Mysurvey = (prop) => {
    return(
        <Survey.Survey
        showCompletedPage = {false}
        onComplete = {data=>prop.showCompletedPage(data.valuesHash)}
        json={Json} 
        />
    )
}

export default Mysurvey;