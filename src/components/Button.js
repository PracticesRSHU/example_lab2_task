// const Button = (props) => {
//     console.log(props);
//     return (
//         <button style={{backgroundColor:props.color}}>{props.text}</button>
//     )
// }
// export default Button;

// const Button = ({color, text}) => {
//     console.log(color,text);
//     return (
//         <button style={{backgroundColor:color}}>{text}</button>
//     )
// }
// export default Button;

const Button = (props) => {
    let {color,text}=props;
    console.log(color,text);
    let handleBtn=()=>{
        alert(`Btn color ${color} clicked!!! `);
    }
  
    return (
        <button onClick={handleBtn} style={{backgroundColor:color}}>{text}</button>
    )
}
export default Button;