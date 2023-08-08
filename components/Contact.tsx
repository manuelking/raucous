'use client'
import Image from 'next/image'
import React, { useRef, FormEvent, useState } from 'react'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  user_name: string
  user_email: string
  user_industry: string
  message: string
}

type Config = {
  serviceId: string
  templateId: string
  publicKey: string
}

function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const form = useRef<HTMLFormElement | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async () => {
    try {
      setIsLoading(true)

      if (form.current) {
        const result = await emailjs.sendForm(
          process.env.serviceId!,
          process.env.templateId!,
          form.current,
          process.env.publicKey!
        )

        console.log(result.text)
      }
    } catch (error) {
      console.log((error as EmailJSResponseStatus).text)
    } finally {
      setIsLoading(false)
      setSent(true)
      reset()
    }
  }

  return (
    <div
      id="contact"
      className="w-full flex flex-col bg-black px-24 py-12 relative"
    >
      <div className="flex flex-row gap-x-10">
        <div className="flex items-center">
          <Image src="/plane.svg" alt="Plane" width={40} height={40} />
        </div>
        <div>
          <p>Tell us about your project</p>
          <h1 className="font-medium text-[64px]">Get in Touch</h1>
        </div>
      </div>
      {sent ? (
        <div className="flex flex-col mt-8">
          <p className="text-center text-neutral-600 text-[44px]">
            Message successfully sent
          </p>
          <button onClick={(e) => setSent(false)}>Send another message</button>
        </div>
      ) : (
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6 mt-8 max-w-2xl mx-auto w-full"
        >
          <input
            type="text"
            className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-[1px] border-neutral-600
                    focus:ring-0 focus:border-white bg-black text-neutral-600
                  "
            placeholder="Full Name"
            {...register('user_name', { required: true })}
            name="user_name"
          />
          {errors.user_name && (
            <span className="text-[14px] animate-pulse text-red-900">
              This field is required
            </span>
          )}
          <input
            type="email"
            className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-[1px] border-neutral-600
                    focus:ring-0 focus:border-white bg-black text-neutral-600
                  "
            placeholder="john@example.com"
            {...register('user_email', { required: true })}
            name="user_email"
          />
          {errors.user_email && (
            <span className="text-[14px] animate-pulse text-red-900">
              This field is required
            </span>
          )}
          <select
            className="
                    block
                    w-full
                    mt-0
                    px-0.5
                    border-0 border-b-[1px] border-neutral-600
                    focus:ring-0 focus:border-white bg-black text-neutral-600
                  "
            {...register('user_industry', { required: true })}
            defaultValue={'Industry'}
            placeholder="industry"
            name="user_industry"
          >
            <option>What industry are you in?</option>
            <option value="Corporate event">Corporate event</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Other">Other</option>
          </select>
          {errors.user_industry && (
            <span className="text-[14px] animate-pulse text-red-900">
              This field is required
            </span>
          )}
          <textarea
            className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-[1px] border-neutral-600
                    focus:ring-0 focus:border-white bg-black text-neutral-600
                  "
            placeholder="Message"
            {...register('message', { required: true })}
            name="message"
          ></textarea>
          {errors.message && (
            <span className="text-[14px] animate-pulse text-red-900">
              This field is required
            </span>
          )}
          {isLoading ? (
            <div className="absolute bottom-12 right-24">
              <div className="flex flex-row items-center text-[34px] gap-x-4">
                <Image src="/loader.svg" alt="loader" width={50} height={50} />
              </div>
            </div>
          ) : (
            <button type="submit" className="absolute bottom-12 right-24">
              <div className="flex flex-row items-center text-[34px] gap-x-4 group">
                Send
                <Image
                  src="/arrl.svg"
                  alt="arrow"
                  width={50}
                  height={50}
                  className="transition ease-in-out delay-150 group-hover:translate-x-4 group-hover:scale-110 duration-300"
                />
              </div>
            </button>
          )}
        </form>
      )}
    </div>
  )
}

export default Contact
