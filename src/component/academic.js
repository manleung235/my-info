import React from 'react';
import transcript from '../files/NamManLeung_transcript.pdf';
export default function Academic(props){
    return(
        <div>
        <h4>
            The Chinese University of Hong Kong
        </h4>
        <h5>
            Bachelor of Science in Computer Science
        </h5>
        <h6>
            Cumulative GPA: 3.43 / 4.00
        </h6>
        <h6>
            Major GPA : 3.58 / 4.00
        </h6>
        <div>
            <h5>Transcript</h5>
            <iframe src={transcript} style={{width:'100%',height:600}}></iframe>
        </div>
        </div>
    )
}