import React, {useState, useCallback} from 'react';
import MySurvey from '../surveyTypes/surveytypeone';

const SurveyOne= () => {
    const [showPage, setShowPage] = useState(true);

    const onCompletePage = useCallback((data)=> {
        console.log(data);
        setShowPage(!showPage)
    },[showPage])

    const setFinalPage = ()=> {
        return(
            <main>
                <h1>Thank you for taking survey one</h1>
            </main>
        )
    }
    return(
        <div className="App">
            {
                showPage?
                <MySurvey showCompletedPage={data=>onCompletePage(data)} />:
                setFinalPage()
            }
        </div>
    )
}

export default SurveyOne;
