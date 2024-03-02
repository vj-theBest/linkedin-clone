import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArtical =(heading,subtitles) =>{
        return(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitles}</p>
            </div>
        </div>
    )}

  return (
    <div className='widgets'>
        <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
        </div>
        {newsArtical("CORONAVIRUS : Ok report","trending-546reads")}
        {newsArtical("Is redux too good!"," 234 reads")}
        {newsArtical("Recession is comming","112 reads")}
       
    </div>
  );
}

export default Widgets