import {useState} from "react"
import data from "../assets/data.json"
import { useRouter } from "next/router";


export async function getStaticPaths() {
  const paths = data.map((el) => {
    return {
      params: {
        word: el,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }:any) {
  const word = params.word;
  return {
    props: {
      word,
      count: data.indexOf(word)
    },
  };
}


export default function Word({word, count }: any) {
  const [index, setIndex] = useState<number | undefined>()
  const router = useRouter()

  const toggle = () => {
    let randomNum = Math.floor(Math.random() * 54)
    setIndex(randomNum)
router.push(`/${data[randomNum]}`)

  }
  return (
      <div className='bg-gradient-to-br from-blue-300 to-blue-500 pb-5 h-screen text-white px-24   ' >
      <p>Random Number: { count }</p>
      <button onClick={toggle} className='bg-[#f7d78c] text-gray-900 px-8 py-2 rounded mx-auto block'>Show text</button>
      <div className=''>
        {/* {index !== undefined &&  data[index || 0 ].toUpperCase()} */ }
        {word.toUpperCase()}
      </div>
      {/* <Speaker /> */}
    </div>
    
  );
}