import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';

import './App.css'
// import UploadPic from './components/upload';
const UploadPic =()=>{
    return(
    <div className='w-2 h-3 m-2'>
    <FileUploaderRegular
       sourceList="local, camera, gdrive, gphotos"
       className='text-red-500'
       classNameUploader="uc-gray"
       pubkey="4f4fba60de4a91f7ddc4"
    />
   </div>
  )
}
const App =()=>{

  return(
    <div className='h-screen'>
      <header className=' bg-emerald-400 flex align-bottom w-screen text-white  h-8 md:h-12 lg:h-14 justify-between'>
        <div className="logo px-4 flex align-center text-center ">logo</div>
        <nav className=' px-12 flex ml-3 justify-evenly gap-4  md:text-xl '>
          <a href="" className="navbar hover:bg-green-100 hover:rounded  px-1py-6">home</a>
          <a href="" className="navbar hover:bg-green-100 hover:rounded  px-1py-6">products</a>
          <a href="" className="navbar hover:bg-green-100 hover:rounded  px-1py-6">lease</a>
        </nav>
      </header>
       <section >
        <div className="flex justify-center font-bold text-3xl ">
          n_bour
        </div>
        <div className="pro-listed bg-slate-600 flex rounded m-3 
        flex-col
        p-6
        "
      
        >
          <div className=" flex 
          wrap
          justify-center f-4 
          flex-row
          font-bold
          text-5xl
          text-white underline">the products</div>
          <div className=" flex  
          justify-center
          align-center
          flex-wrap gap-3 ">
            <div className="tamplate 
            shadow-lg
            bg-red-100 inline-flex 
            flex-col
            rounded-lg
            justify-center align-center
            p-5">
              <img className='
              w-34
              border-4
              mt-0
              mb-4
              h-[250px]
              rounded-2xl
              ' src="" alt="the item" />
              <div className="decsript
              flex
              justify-end
              align-start
              gap-3">
                <h3 className=''>name</h3>
                <p>small table</p>
                <p><span>price</span>399</p>
                <p className="condition bg-red-400
                rounded
                h-6
                flex
                justify-center
                align-center
                text-green-200">good</p>  
              </div>   
              <div className='
              bg-yellow-600
              rounded
              flex 
              justify-center
              align-center
              w-10
            '>latest</div>           
            </div>  
            <div className="tamplate 
            shadow-lg
            bg-red-100 inline-flex 
            flex-col
            rounded-lg
            justify-center align-center
            p-5">
              <img className='
              w-34
              h-40
              rounded' src="" alt="the item" />
              <div className="decsript
              flex
              justify-end
              align-start
              gap-3">
                <h3 className=''>name</h3>
                <p>small table</p>
                <p><span>price</span>399</p>
                <p className="condition bg-red-400
                rounded
                h-6
                flex
                justify-center
                align-center
                text-green-200">good</p>  
              </div>   
              <div className='
              bg-yellow-600
              rounded
              flex 
              justify-center
              align-center
              w-10
            '>latest</div>           
            </div>  
            <div className="tamplate 
            shadow-lg
            bg-red-100 inline-flex 
            flex-col
            rounded-lg
            justify-center align-center
            p-5">
              <img className='
              w-34
              h-40
              rounded' src="" alt="the item" />
              <div className="decsript
              flex
              justify-end
              align-start
              gap-3">
                <h3 className=''>name</h3>
                <p>small table</p>
                <p><span>price</span>399</p>
                <p className="condition bg-red-400
                rounded
                h-6
                flex
                justify-center
                align-center
                text-green-200">good</p>  
              </div>   
              <div className='
              bg-yellow-600
              rounded
              flex 
              justify-center
              align-center
              w-10
            '>latest</div>           
            </div>  
            <div className="tamplate 
            shadow-lg
            bg-red-100 inline-flex 
            flex-col
            rounded-lg
            justify-center align-center
            p-5">
              <img className='
              w-34
              h-40
              rounded' src="" alt="the item" />
              <div className="decsript
              flex
              justify-end
              align-start
              gap-3">
                <h3 className=''>name</h3>
                <p>small table</p>
                <p><span>price</span>399</p>
                <p className="condition bg-red-400
                rounded
                h-6
                flex
                justify-center
                align-center
                text-green-200">good</p>  
              </div>   
              <div className='
              bg-yellow-600
              rounded
              flex 
              justify-center
              align-center
              w-10
            '>latest</div>           
            </div>  
            <div className="tamplate 
            shadow-lg
            bg-red-100 inline-flex 
            flex-col
            rounded-lg
            justify-center align-center
            p-5">
              <img className='
              w-34
              h-40
              rounded' src="" alt="the item" />
              <div className="decsript
              flex
              justify-end
              align-start
              gap-3">
                <h3 className=''>name</h3>
                <p>small table</p>
                <p><span>price</span>399</p>
                <p className="condition bg-red-400
                rounded
                h-6
                flex
                justify-center
                align-center
                text-green-200">good</p>  
              </div>   
              <div className='
              bg-yellow-600
              rounded
              flex 
              justify-center
              align-center
              w-10
            '>latest</div>           
            </div>  
            <div className="tamplate 
            shadow-lg
            bg-red-100 inline-flex 
            flex-col
            rounded-lg
            justify-center align-center
            p-5">
              <img className='
              w-34
              h-40
              rounded' src="" alt="the item" />
              <div className="decsript
              flex
              justify-end
              align-start
              gap-3">
                <h3 className=''>name</h3>
                <p>small table</p>
                <p><span>price</span>399</p>
                <p className="condition bg-red-400
                rounded
                h-6
                flex
                justify-center
                align-center
                text-green-200">good</p>  
              </div>   
              <div className='
              bg-yellow-600
              rounded
              flex 
              justify-center
              align-center
              w-10
            '>latest</div>           
            </div>  
            <div className="tamplate 
            shadow-lg
            bg-red-100 inline-flex 
            flex-col
            rounded-lg
            justify-center align-center
            p-5">
              <img className='
              w-34
              h-40
              rounded' src="" alt="the item" />
              <div className="decsript
              flex
              justify-end
              align-start
              gap-3">
                <h3 className=''>name</h3>
                <p>small table</p>
                <p><span>price</span>399</p>
                <p className="condition bg-red-400
                rounded
                h-6
                flex
                justify-center
                align-center
                text-green-200">good</p>  
              </div>   
              <div className='
              bg-yellow-600
              rounded
              flex 
              justify-center
              align-center
              w-10
            '>latest</div>           
            </div>  
            <div className="tamplate 
            shadow-lg
            bg-red-100 inline-flex 
            flex-col
            rounded-lg
            justify-center align-center
            p-5">
              <img className='
              w-34
              h-40
              rounded' src="" alt="the item" />
              <div className="decsript
              flex
              justify-end
              align-start
              gap-3">
                <h3 className=''>name</h3>
                <p>small table</p>
                <p><span>price</span>399</p>
                <p className="condition bg-red-400
                rounded
                h-6
                flex
                justify-center
                align-center
                text-green-200">good</p>  
              </div>   
              <div className='
              bg-yellow-600
              rounded
              flex 
              justify-center
              align-center
              w-10
            '>latest</div>           
            </div>  
            <div className="tamplate 
            shadow-lg
            bg-red-100 inline-flex 
            flex-col
            rounded-lg
            justify-center align-center
            p-5">
              <img className='
              w-34
              h-40
              rounded' src="" alt="the item" />
              <div className="decsript
              flex
              justify-end
              align-start
              gap-3">
                <h3 className=''>name</h3>
                <p>small table</p>
                <p><span>price</span>399</p>
                <p className="condition bg-red-400
                rounded
                h-6
                flex
                justify-center
                align-center
                text-green-200">good</p>  
              </div>   
              <div className='
              bg-yellow-600
              rounded
              flex 
              justify-center
              align-center
              w-10
            '>latest</div>           
            </div>  
          </div>
        </div>
       </section>
       <UploadPic className="bg-red-800"/>
    </div>
  )
}
export default App;
