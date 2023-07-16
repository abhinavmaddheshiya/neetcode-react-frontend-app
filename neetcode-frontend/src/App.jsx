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
  const [problems, setProblems] = useState([])
  return (
    <>
      <div >
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="password"></input>
        <button>Sign in</button>
      </div>
      <div>
        <button onClick={() => {
          setProblems(problems => problems1);
        }}>1</button>
        <button onClick={() => {
          setProblems(problems => problems2);
        }}>2</button>
      </div>
      <div>
        {problems.map(problem => <ProblemStatement
          title = {problem.title}
          acceptance = {problem.acceptance}
          difficulty = {problem.difficulty}
        />)}
      </div>
    </>
  )
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
