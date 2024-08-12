import React,{useState} from "react"

function editor({sampleInputs,expectedOutputs}){
    const [text,handletext]=useState('')
    const [lang,langSetter]=useState('C++')
    const [outputArr,outputArrSetter]=useState([])
    const [compileResult,compileResultSetter]=useState('')
    var resultCnt=0;
    const resultEleFlag=0;
    
    const handleChange=(event)=>{
    handletext(event.target.value)
    }
    
    //handle code submission
    const handleClick=()=>{
    
    outputArrSetter([])	//make output array empty
    compileResultSetter('');
    resultCnt=0;
    resultEleFlag=0;
    
    
    
    sampleInputs.forEach((inp)=>{
    var requestData={
      "clientId": "e569ea558c27c0125adcf45eac006a50",
      "clientSecret": "18adef0e1b0ba4bf31eeb8c073321f3811992bf6be2310a472fd7d2948033d91",
      "script": text,
      "stdin": inp,
      "language": lang,
      "compileOnly": false
    }
    fetch("https://api.jdoodle.com/v1/execute", requestData)
      .then(response => response.json())
      .then(result => {console.log(result);outputArrSetter(...outputArr,result)})
      .catch(error => console.log('error', error));
    
    })
    
    //now checking outputs against expectedOuputs
    
    for(let i=0;i<ouputArr.length;i++){
    if(outputArr[i].output==expectedOutputs[i])resultCnt++;
    else{
    compileResultSetter(outputArr[i].output);
    break;
    }
    }
    
    if(resultCnt==expectedOutputs.length)compileResultSetter('ALL Tescases passed!!')
    resultEleFlag=1;
    }
    
    
    const handleSelect=(event)=>{
    langSetter(event.target.value)
    }
    
    return(
    <>
    <form>
    <textarea value={text} onChange={handleChange}/>
    <div>
    <label>language:</label>
    <select value={lang} onChange={handleSelect} required>
    <option name="C++">C++</option>
    <option name="python3">python3</option>
    <option name="Java">Java</option>
    </select>
    <button type="submit" onClick={handleClick}>Submit</button>
    </div>
    </form>
    {resultEleFlag && <div>Failed on Testcase: {resultCnt+1}  '\n' {compileResult}</div>}
    </>
    )
    }