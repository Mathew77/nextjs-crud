import Head from 'next/head'
import { BiUserPlus } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <Head>
        <title>CRUD APPLICATION</title>
      </Head>
      <main className='py-5'>
        <h1 className='text-xl md:text-5xl text-center font-bold py-5'>EMPLOYEE MANAGEMENT</h1>
        <div className='container mx-auto flex justify-between py-5 border-b'>
          <div className='left flex gap-3'>
            <button className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800'>
              Add Employee  <span className='px-1'> <BiUserPlus size={23}/></span>
            </button>
          </div>
          
        </div>
      </main>
        
     
    </>
  )
}
