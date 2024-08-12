import SplitPane from "react-split-pane";
import React from 'react';

function problemAndEditor(problemid){
    return(
        <>
        <SplitPane minSize={50} split="horizontal" >
        <problemDescription problemID={problemid}/>
        <editor/>
        </SplitPane>
        </>
    )
}