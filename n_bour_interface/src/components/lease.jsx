// import{ useState } from 'react';

function Lease() {

  return (
    <div className="flex items-center justify-center mx-4 my-14
     p-4 align-middle flex-col">
        <h1 className="text-2xl
        text-center
        font-bold">Hey ! member</h1>
        <form method="post" action="/userV" className="flex flex-col  justify-center rounded-xl px-6 py-12 bg-slate-600 
         m-3 w-80 sm:w-72">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name: </label>
          <input type="text" name="name" id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          <label htmlFor="emai" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
          <input type="email" name="email" id="email" 
          className="
          bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
          "/>
          <label htmlFor="passwaord" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>
          <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="password" />
          <button type="submit" className="text-white 
          my-5
          bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify me</button>
        </form>
    </div>
  );
}
export default Lease;