const problems1 = [{
    title: "2769. Find the Maximum Achievable Number",
    difficulty: "Easy",
    acceptance: "87.4%"
},
{
    title: "1306. Jump Game III",
    difficulty: "Medium",
    acceptance: "63.9%"
},
{
    title: "42. Trapping Rain Water",
    difficulty: "Hard",
    acceptance: "59.5%"
}]
const problems2 = [{
    title: "347. Top K Frequent Elements",
    difficulty: "Medium",
    acceptance: "63.6%"
},
{
    title: "88. Merge Sorted Array",
    difficulty: "Easy",
    acceptance: "47.3%"
},
{
    title: "54. Spiral Matrix",
    difficulty: "Medium",
    acceptance: "46.8%"
}]

// function createChildEl(){
// 
// }

function renderProblems(problems){
    const parentEl = document.getElementById("problem-statements");
    parentEl.innerHTML = "";
    const tableTag = document.createElement("table");
    let len=problems.length;
    for(let i=0; i<len; i++){
        const trTag = document.createElement("tr");
        const td1Tag = document.createElement("td");
        td1Tag.innerHTML = problems[i].title;
        const td2Tag = document.createElement("td");
        td2Tag.innerHTML = problems[i].difficulty;
        const td3Tag = document.createElement("td");
        td3Tag.innerHTML = problems[i].acceptance;

        trTag.appendChild(td1Tag);
        trTag.appendChild(td2Tag);
        trTag.appendChild(td3Tag);
        tableTag.appendChild(trTag);
    }
    parentEl.appendChild(tableTag);
}
/*
import { useState } from 'react'

const problems1 = [{
  title: "2769. Find the Maximum Achievable Number",
  difficulty: "Easy",
  acceptance: "87.4%"
},
{
  title: "1306. Jump Game III",
  difficulty: "Medium",
  acceptance: "63.9%"
},
{
  title: "42. Trapping Rain Water",
  difficulty: "Hard",
  acceptance: "59.5%"
}]
const problems2 = [{
  title: "347. Top K Frequent Elements",
  difficulty: "Medium",
  acceptance: "63.6%"
},
{
  title: "88. Merge Sorted Array",
  difficulty: "Easy",
  acceptance: "47.3%"
},
{
  title: "54. Spiral Matrix",
  difficulty: "Medium",
  acceptance: "46.8%"
}]

function App() {
  const [problem, setProblems] = useState({
    title: "Maximum Product Subarray\n",
    description: "Given an integer array nums, find a subarray that has the largest product, and return the product.",
    examples: [{
      input: "[2,3,-2,4]",
      output: "6",
      explaination: "[2,3] has the largest product 6."
    },{
      input: "[-2,0,-1]",
      output: "0",
      explaination: "The result cannot be 2, because [-2,-1] is not a subarray."
    }]
  })
  return (
    <>
      <div>
        {problem.title}
        <br/>
        {problem.description}
        <br/>
        {problem.examples.map((x, index) => <examples index={index} input={x.input} output={x.output} explaination={x.explaination}></examples>)}
      </div>
    </>
  )
}

function example(props){
  return <div style={{border: "1px solid black"}}>
    Example {props.index + 1}
    <div style={{margin: 10}}>
      Input: <b> {props.input} </b>
    </div>
    <br/>
    <div style={{margin: 10}}>
      Output: <b> {props.output} </b>
    </div>
    <div style={{margin: 10}}>
      {props.explaination}
    </div>
  </div>
}
function fnColor(difficulty){
  if(difficulty=="Easy")return "green";
  else if(difficulty=="Medium")return "orange";
  else return "red";
}
function ProblemStatement(props){
  const title = props.title;
  const acceptance = props.acceptance;
  const difficulty = props.difficulty;

  return <div>
    <tr>
      <td>
        {title}
      </td>
      <td>
        {acceptance}
      </td>
      <td style={{color: fnColor(difficulty)}}>
        {difficulty}
      </td>
    </tr>
  </div>
}

export default App
*/