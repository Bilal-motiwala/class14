import Link from "next/link"
export default async function Home() {

  const url= await fetch('https://jsonplaceholder.typicode.com/todos')
  const res= await url.json();
  console.log(res);

  return (
    <div>
      {
        res.map((user:any,index:number)=>(
          <div key={index}>
            <Link href={`${user.id}`} >

            <h1 className="text-5xl">
            {user.title}
          </h1> <br />

          <h1 className="text-5xl">
            {user.id }
          </h1> <br />

          </Link>
         </div>
        ))
      }
    </div>
  );
}
