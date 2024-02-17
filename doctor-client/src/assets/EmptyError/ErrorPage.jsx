import React from 'react'
import BgButton from '../Share/button/BgButton'

const ErrorPage = () => {
  return (
    <div>
      <section class="flex h-screen items-center p-16 dark:bg-gray-900 dark:text-gray-100">
        <div class="flex flex-col items-center justify-center mx-auto my-8">
          <div class=" text-center">
            <h2 class="mb-8 font-extrabold text-9xl text-primery dark:text-gray-600">
              <span class="sr-only">Error</span>404
            </h2>
            <p class="text-2xl font-semibold md:text-3xl text-secondery">Sorry, we couldn't find this page.</p>
            <p class="mt-4 mb-8 text-neutral-400">But dont worry, you can find plenty of other things on our homepage.</p>
          
            <BgButton address='/' lable='Back to homepage'/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ErrorPage