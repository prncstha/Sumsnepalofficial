import React from "react";
import ujjwalp from '../assets/Ujjwal.jpg'
import manishp from '../assets/manish.png'
import rajp from '../assets/raj.jpg'

const Team = () => {
  return (

                                                <section class="py-24 ">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-12">
                <h2 class=" text-5xl text-center text-gray-900 mb-6">Meet the brains</h2>
                <p class="text-lg text-gray-500 text-center">Meet our outstanding team - a synergy of talent, creativity, and dedication, crafting success together.</p>
            </div>

            <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src={manishp}
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Manish Khadka</p>
            <p className="text-sm text-gray-800">CEO</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src={ujjwalp}
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Ujjwal Dahal</p>
            <p className="text-sm text-gray-800">COO</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src={rajp}
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Rajkumar Shrestha</p>
            <p className="text-sm text-gray-800">CTO</p>
          </div>
        </div>
        </div>
            {/* <div class="flex flex-wrap justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full ">
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                    <div class="relative mb-5">
                        <img src="https://pagedone.io/asset/uploads/1698649968.png" alt="Marvin image" class="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-orange-600"/>
                    </div>
                    <h4 class="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-orange-600">Manish Khadka</h4>
                    <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">CEO</span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                    <div class="relative mb-5">
                        <img src="https://pagedone.io/asset/uploads/1698650000.png" alt="Kathryn image" class="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-orange-600"/>
                    </div>
                    <h4 class="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-orange-600">Kathryn Murphy</h4>
                    <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">CTO</span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                    <div class="relative mb-5">
                        <img src="https://pagedone.io/asset/uploads/1698659360.png" alt="Jerome image" class="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-orange-600"/>
                    </div>
                    <h4 class="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-orange-600">Jerome Bell</h4>
                    <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">CMO</span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                    <div class="relative mb-5">
                        <img src="https://pagedone.io/asset/uploads/1698650109.png" alt="Wade image" class="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-orange-600"/>
                    </div>
                    <h4 class="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-orange-600">Wade Warren</h4>
                    <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">CEO</span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                    <div class="relative mb-5">
                        <img src="https://pagedone.io/asset/uploads/1698650146.png" alt="Leslie image" class="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-orange-600"/>
                    </div>
                    <h4 class="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-orange-600">Leslie Alexander</h4>
                    <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">Customer Support</span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                    <div class="relative mb-5">
                        <img src="https://pagedone.io/asset/uploads/1698650184.png" alt="Guy image" class="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-orange-600"/>
                    </div>
                    <h4 class="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-orange-600">Guy Hawkins</h4>
                    <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">HR</span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                    <div class="relative mb-5">
                        <img src="https://pagedone.io/asset/uploads/1698650213.png" alt="Ronald image" class="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-orange-600"/>
                    </div>
                    <h4 class="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-orange-600">Ronald Richards</h4>
                    <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">CO-Founder</span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                    <div class="relative mb-5">
                        <img src="https://pagedone.io/asset/uploads/1698650242.png" alt="Devon image" class="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-orange-600"/>
                    </div>
                    <h4 class="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-orange-600">Devon Lane</h4>
                    <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">UI Designer</span>
                </div>
                <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                    <div class="relative mb-5">
                        <img src="https://pagedone.io/asset/uploads/1698650271.png" alt="Dianne image" class="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-orange-600"/>
                    </div>
                    <h4 class="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-orange-600">Dianne Russell</h4>
                    <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">Product Designer</span>
                </div>
            </div> */}
      </div>
    </section>
                                            



//     <section className="py-6 dark:bg-neutral dark:text-gray-800">
// 	<div className="container p-4 mx-auto space-y-16 sm:p-10">
// 		<div className="space-y-4">
//         <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">Meet our team</h2>
// 			<p className="max-w-2xl dark:text-gray-600">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
// 		</div>
// 		<div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
// 			<div className="space-y-4">
// 				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://source.unsplash.com/240x320/?portrait?0" />
// 				<div className="flex flex-col items-center">
// 					<h4 className="text-xl font-semibold">Leroy Jenkins</h4>
// 					<p className="text-sm dark:text-gray-600">Web developer</p>
// 					<div className="flex mt-2 space-x-2">
// 						<a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-4 h-4">
// 								<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
// 							</svg>
// 						</a>
// 						<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
// 								<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
// 							</svg>
// 						</a>
// 						<a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
// 								<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
// 							</svg>
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="space-y-4">
// 				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://source.unsplash.com/240x320/?portrait?1" />
// 				<div className="flex flex-col items-center">
// 					<h4 className="text-xl font-semibold">Leroy Jenkins</h4>
// 					<p className="text-sm dark:text-gray-600">Web developer</p>
// 					<div className="flex mt-2 space-x-2">
// 						<a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-4 h-4">
// 								<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
// 							</svg>
// 						</a>
// 						<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
// 								<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
// 							</svg>
// 						</a>
// 						<a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
// 								<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
// 							</svg>
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="space-y-4">
// 				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://source.unsplash.com/240x320/?portrait?2" />
// 				<div className="flex flex-col items-center">
// 					<h4 className="text-xl font-semibold">Leroy Jenkins</h4>
// 					<p className="text-sm dark:text-gray-600">Web developer</p>
// 					<div className="flex mt-2 space-x-2">
// 						<a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-4 h-4">
// 								<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
// 							</svg>
// 						</a>
// 						<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
// 								<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
// 							</svg>
// 						</a>
// 						<a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
// 								<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
// 							</svg>
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="space-y-4">
// 				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://source.unsplash.com/240x320/?portrait?3" />
// 				<div className="flex flex-col items-center">
// 					<h4 className="text-xl font-semibold">Leroy Jenkins</h4>
// 					<p className="text-sm dark:text-gray-600">Web developer</p>
// 					<div className="flex mt-2 space-x-2">
// 						<a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-4 h-4">
// 								<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
// 							</svg>
// 						</a>
// 						<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
// 								<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
// 							</svg>
// 						</a>
// 						<a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
// 								<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
// 							</svg>
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="space-y-4">
// 				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://source.unsplash.com/240x320/?portrait?4" />
// 				<div className="flex flex-col items-center">
// 					<h4 className="text-xl font-semibold">Leroy Jenkins</h4>
// 					<p className="text-sm dark:text-gray-600">Web developer</p>
// 					<div className="flex mt-2 space-x-2">
// 						<a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-4 h-4">
// 								<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
// 							</svg>
// 						</a>
// 						<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
// 								<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
// 							</svg>
// 						</a>
// 						<a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
// 								<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
// 							</svg>
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="space-y-4">
// 				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://source.unsplash.com/240x320/?portrait?5" />
// 				<div className="flex flex-col items-center">
// 					<h4 className="text-xl font-semibold">Leroy Jenkins</h4>
// 					<p className="text-sm dark:text-gray-600">Web developer</p>
// 					<div className="flex mt-2 space-x-2">
// 						<a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-4 h-4">
// 								<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
// 							</svg>
// 						</a>
// 						<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
// 								<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
// 							</svg>
// 						</a>
// 						<a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
// 								<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
// 							</svg>
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="space-y-4">
// 				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://source.unsplash.com/240x320/?portrait?6" />
// 				<div className="flex flex-col items-center">
// 					<h4 className="text-xl font-semibold">Leroy Jenkins</h4>
// 					<p className="text-sm dark:text-gray-600">Web developer</p>
// 					<div className="flex mt-2 space-x-2">
// 						<a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-4 h-4">
// 								<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
// 							</svg>
// 						</a>
// 						<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
// 								<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
// 							</svg>
// 						</a>
// 						<a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
// 								<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
// 							</svg>
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="space-y-4">
// 				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://source.unsplash.com/240x320/?portrait?7" />
// 				<div className="flex flex-col items-center">
// 					<h4 className="text-xl font-semibold">Leroy Jenkins</h4>
// 					<p className="text-sm dark:text-gray-600">Web developer</p>
// 					<div className="flex mt-2 space-x-2">
// 						<a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-4 h-4">
// 								<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
// 							</svg>
// 						</a>
// 						<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
// 								<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
// 							</svg>
// 						</a>
// 						<a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
// 							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
// 								<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
// 							</svg>
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </section>
    // <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
    //   <div className="container mx-auto">
    //     <div className="-mx-4 flex flex-wrap">
    //       <div className="w-full px-4">
    //         <div className="mx-auto mb-[60px] max-w-[510px] text-center">
    //           <span className="mb-2 block text-lg font-semibold text-primary">
    //             Our Team
    //           </span>
    //           <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
    //             Our Awesome Team
    //           </h2>
    //           <p className="text-base text-body-color dark:text-dark-6">
    //             There are many variations of passages of Lorem Ipsum available
    //             but the majority have suffered alteration in some form.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="-mx-4 flex flex-wrap justify-center">
    //       <TeamCard
    //         name="Coriss Ambady"
    //         profession="Web Developer"
    //         imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
    //       />
    //       <TeamCard
    //         name="Coriss Ambady"
    //         profession="Web Developer"
    //         imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
    //       />
    //       <TeamCard
    //         name="Coriss Ambady"
    //         profession="Web Developer"
    //         imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
    //       />
    //       <TeamCard
    //         name="Coriss Ambady"
    //         profession="Web Developer"
    //         imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};

export default Team;

// const TeamCard = ({ imageSrc, name, profession }) => {
//   return (
//     <>
//       <div className="w-full px-4 md:w-1/2 xl:w-1/4">
//         <div className="mx-auto mb-10 w-full max-w-[370px]">
//           <div className="relative overflow-hidden rounded-lg">
//             <img src={imageSrc} alt="" className="w-full" />
//             <div className="absolute bottom-5 left-0 w-full text-center">
//               <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2">
//                 <h3 className="text-base font-semibold text-dark dark:text-white">
//                   {name}
//                 </h3>
//                 <p className="text-xs text-body-color dark:text-dark-6">
//                   {profession}
//                 </p>
//                 <div>
//                   <span className="absolute bottom-0 left-0">
//                     <svg
//                       width={61}
//                       height={30}
//                       viewBox="0 0 61 30"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <circle
//                         cx={16}
//                         cy={45}
//                         r={45}
//                         fill="#13C296"
//                         fillOpacity="0.11"
//                       />
//                     </svg>
//                   </span>
//                   <span className="absolute right-0 top-0">
//                     <svg
//                       width={20}
//                       height={25}
//                       viewBox="0 0 20 25"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <circle
//                         cx="0.706257"
//                         cy="24.3533"
//                         r="0.646687"
//                         transform="rotate(-90 0.706257 24.3533)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="6.39669"
//                         cy="24.3533"
//                         r="0.646687"
//                         transform="rotate(-90 6.39669 24.3533)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="12.0881"
//                         cy="24.3533"
//                         r="0.646687"
//                         transform="rotate(-90 12.0881 24.3533)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="17.7785"
//                         cy="24.3533"
//                         r="0.646687"
//                         transform="rotate(-90 17.7785 24.3533)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="0.706257"
//                         cy="18.6624"
//                         r="0.646687"
//                         transform="rotate(-90 0.706257 18.6624)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="6.39669"
//                         cy="18.6624"
//                         r="0.646687"
//                         transform="rotate(-90 6.39669 18.6624)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="12.0881"
//                         cy="18.6624"
//                         r="0.646687"
//                         transform="rotate(-90 12.0881 18.6624)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="17.7785"
//                         cy="18.6624"
//                         r="0.646687"
//                         transform="rotate(-90 17.7785 18.6624)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="0.706257"
//                         cy="12.9717"
//                         r="0.646687"
//                         transform="rotate(-90 0.706257 12.9717)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="6.39669"
//                         cy="12.9717"
//                         r="0.646687"
//                         transform="rotate(-90 6.39669 12.9717)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="12.0881"
//                         cy="12.9717"
//                         r="0.646687"
//                         transform="rotate(-90 12.0881 12.9717)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="17.7785"
//                         cy="12.9717"
//                         r="0.646687"
//                         transform="rotate(-90 17.7785 12.9717)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="0.706257"
//                         cy="7.28077"
//                         r="0.646687"
//                         transform="rotate(-90 0.706257 7.28077)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="6.39669"
//                         cy="7.28077"
//                         r="0.646687"
//                         transform="rotate(-90 6.39669 7.28077)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="12.0881"
//                         cy="7.28077"
//                         r="0.646687"
//                         transform="rotate(-90 12.0881 7.28077)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="17.7785"
//                         cy="7.28077"
//                         r="0.646687"
//                         transform="rotate(-90 17.7785 7.28077)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="0.706257"
//                         cy="1.58989"
//                         r="0.646687"
//                         transform="rotate(-90 0.706257 1.58989)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="6.39669"
//                         cy="1.58989"
//                         r="0.646687"
//                         transform="rotate(-90 6.39669 1.58989)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="12.0881"
//                         cy="1.58989"
//                         r="0.646687"
//                         transform="rotate(-90 12.0881 1.58989)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="17.7785"
//                         cy="1.58989"
//                         r="0.646687"
//                         transform="rotate(-90 17.7785 1.58989)"
//                         fill="#3056D3"
//                       />
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
