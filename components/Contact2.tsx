'use client'
import React, { useRef, FormEvent } from 'react'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'

function Contact2() {
  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm(
          'service_bko28ml',
          'contact_form',
          form.current,
          'j-YMxGRZYzD6J7rqF'
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text)
          },
          (error: EmailJSResponseStatus) => {
            console.log(error.text)
          }
        )
    }
  }

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact2

// 'use client'
// import Image from 'next/image'
// import { useState } from 'react'
// import { useForm, SubmitHandler } from 'react-hook-form'

// type Inputs = {
//   name: string
//   email: string
//   industry: string
//   message: string
// }

// function Contact() {
//   const [isLoading, setIsLoading] = useState(false)

//   function submitForm(url: string, data: Inputs) {
//     const form = document.createElement('form')
//     form.method = 'POST'
//     form.action = url

//     const formDataInput = document.createElement('input')
//     formDataInput.type = 'hidden'
//     formDataInput.name = 'form_data'
//     formDataInput.value = JSON.stringify(data)
//     form.appendChild(formDataInput)

//     document.body.appendChild(form)
//     form.submit()
//   }

//   const {
//     register,
//     handleSubmit,

//     formState: { errors },
//   } = useForm<Inputs>()
//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     console.log(data) // You can handle the form data as needed here
//     submitForm('https://formsubmit.co/wayuloju@mailgolem.com', data)
//     setIsLoading(true)
//   }

//   return (
//     <div
//       id="contact"
//       className="w-full flex flex-col bg-black px-24 py-12 relative"
//     >
//       <div className="flex flex-row gap-x-10">
//         <div className="flex items-center">
//           <Image src="/plane.svg" alt="Plane" width={40} height={40} />
//         </div>
//         <div>
//           <p>Tell us about your project</p>
//           <h1 className="font-medium text-[64px]">Get in Touch</h1>
//         </div>
//       </div>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="grid grid-cols-1 gap-6 mt-8 max-w-2xl mx-auto w-full"
//       >
//         <input
//           type="text"
//           className="
//                     mt-0
//                     block
//                     w-full
//                     px-0.5
//                     border-0 border-b-[1px] border-neutral-600
//                     focus:ring-0 focus:border-white bg-black text-neutral-600
//                   "
//           placeholder="Full Name"
//           {...register('name', { required: true })}
//           name="name"
//         />
//         {errors.name && (
//           <span className="text-[14px] animate-pulse text-red-900">
//             This field is required
//           </span>
//         )}
//         <input
//           type="email"
//           className="
//                     mt-0
//                     block
//                     w-full
//                     px-0.5
//                     border-0 border-b-[1px] border-neutral-600
//                     focus:ring-0 focus:border-white bg-black text-neutral-600
//                   "
//           placeholder="john@example.com"
//           {...register('email', { required: true })}
//           name="email"
//         />
//         {errors.email && (
//           <span className="text-[14px] animate-pulse text-red-900">
//             This field is required
//           </span>
//         )}
//         <select
//           className="
//                     block
//                     w-full
//                     mt-0
//                     px-0.5
//                     border-0 border-b-[1px] border-neutral-600
//                     focus:ring-0 focus:border-white bg-black text-neutral-600
//                   "
//           {...register('industry', { required: true })}
//           defaultValue={'Industry'}
//           placeholder="industry"
//           name="industry"
//         >
//           <option>What industry are you in?</option>
//           <option value="Corporate event">Corporate event</option>
//           <option value="Wedding">Wedding</option>
//           <option value="Birthday">Birthday</option>
//           <option value="Other">Other</option>
//         </select>
//         {errors.industry && (
//           <span className="text-[14px] animate-pulse text-red-900">
//             This field is required
//           </span>
//         )}
//         <textarea
//           className="
//                     mt-0
//                     block
//                     w-full
//                     px-0.5
//                     border-0 border-b-[1px] border-neutral-600
//                     focus:ring-0 focus:border-white bg-black text-neutral-600
//                   "
//           placeholder="Message"
//           {...register('message', { required: true })}
//           name="message"
//         ></textarea>
//         {errors.message && (
//           <span className="text-[14px] animate-pulse text-red-900">
//             This field is required
//           </span>
//         )}
//         <input type="hidden" name="_next" value="http://localhost:3000/" />
//         <input type="hidden" name="_captcha" value="false" />
//         {isLoading ? (
//           <div className="absolute bottom-12 right-24">
//             <div className="flex flex-row items-center text-[34px] gap-x-4">
//               <Image src="/loader.svg" alt="loader" width={50} height={50} />
//             </div>
//           </div>
//         ) : (
//           <button type="submit" className="absolute bottom-12 right-24">
//             <div className="flex flex-row items-center text-[34px] gap-x-4 group">
//               Send
//               <Image
//                 src="/arrl.svg"
//                 alt="arrow"
//                 width={50}
//                 height={50}
//                 className="transition ease-in-out delay-150 group-hover:translate-x-4 group-hover:scale-110 duration-300"
//               />
//             </div>
//           </button>
//         )}
//       </form>
//     </div>
//   )
// }

// export default Contact
