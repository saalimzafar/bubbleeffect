import Link from 'next/link'
export default function Home () {
    return (
        <>
        
    <div>
     <ul>
     <Link href="/Home">
     <a>Home</a>
     </Link>
          <Link href="/About">
     <a>About</a>
     </Link>
       <Link href="/Skills">
     <a>Skills</a>
     </Link>
       <Link href="/Contact">
     <a>Contact</a>
     </Link>
  
     </ul>
     <style jsx>{`
        a {
          color: white;
          margin:5px;
        }
        div {
          background: black;
          margin:0;
          padding:0;
          height:50px;
          width:auto;
          display:flex;
          align-items:center;
          justify-content:center; 
          
        }
        ul{
            text-align:center;
            padding:0;
        }
      
      `}</style>
      
    </div>
    
    </>
    )
}