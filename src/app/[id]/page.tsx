const DynamicBook= async (props: any) => {
    
  const url= await fetch('https://jsonplaceholder.typicode.com/todos/1/users/${props.params.id}')
  
  const res= await url.json();
  console.log("SingleBookREsponse",res);

  return (
        <h1 className="pl-5 text-5xl">
        {props.params.id} <br />
        
        </h1>
    );
}

export default DynamicBook  