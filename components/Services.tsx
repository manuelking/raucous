import Image from 'next/image'
import React from 'react'

function Services() {
  return (
    <div
      id="services"
      className="w-full flex flex-col bg-black sm:px-24 px-12 py-12 relative"
    >
      <div className="flex flex-row xs:space-x-10 space-x-4">
        <Image src="/transcube.svg" alt="arrow" width={40} height={40} />
        <h1 className="font-medium sm:text-[64px] xs:text-[44px] text-[34px]">
          Our Expertise
        </h1>
      </div>
      <div className="grid divide-y divide-neutral-600 max-w-2xl mx-auto mt-8 w-full">
        <div className="py-8">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="sm:text-[20px]">Customized Web Development</span>
              <span
                className="transition group-open:rotate-180"
                style={{ minWidth: '40px' }}
              >
                <Image src="/faqarrow.svg" alt="arrow" width={40} height={40} />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              We understand that every business is unique, and we believe your
              website should reflect that. Our experienced developers will work
              closely with you to understand your goals, brand identity, and
              target audience, crafting a custom website that not only looks
              amazing but also delivers exceptional user experiences.
            </p>
          </details>
        </div>

        <div className="py-8">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none gap-x-4">
              <div className="flex flex-row space-x-3">
                <span className="sm:text-[20px]">
                  AI-Powered Solutions
                  <Image
                    src="/sparkles.svg"
                    alt="Sparkle"
                    width={25}
                    height={25}
                  />
                </span>
              </div>
              <span
                className="transition group-open:rotate-180"
                style={{ minWidth: '40px' }}
              >
                <Image src="/faqarrow.svg" alt="Arrow" width={40} height={40} />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              We harness the power of artificial intelligence to take your web
              development experience to the next level. Our team leverages
              cutting-edge AI technologies to enhance various aspects of your
              website. With AI as part of our toolkit, we create smarter, more
              intuitive websites that provide exceptional value to your
              customers and help your business thrive in the digital age.
            </p>
          </details>
        </div>
        <div className="py-8">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none gap-x-4">
              <span className="sm:text-[20px]">E-commerce Solutions</span>
              <span
                className="transition group-open:rotate-180"
                style={{ minWidth: '40px' }}
              >
                <Image src="/faqarrow.svg" alt="arrow" width={40} height={40} />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Our cutting-edge e-commerce solutions are designed to
              revolutionize your online business. In this fast-paced digital
              era, having an optimized and responsive website is not just
              crucial but a game-changer. At our company, we go above and beyond
              to provide exceptional e-commerce solutions that empower your
              brand to thrive in the ever-evolving online marketplace.
            </p>
          </details>
        </div>
        <div className="py-8">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="sm:text-[20px]">Responsive Design</span>
              <span
                className="transition group-open:rotate-180"
                style={{ minWidth: '40px' }}
              >
                <Image src="/faqarrow.svg" alt="arrow" width={40} height={40} />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              In today's mobile-driven world, having a responsive website is
              crucial. We ensure your website seamlessly adapts to different
              screen sizes, providing a consistent and engaging experience
              across all devices. With our expertise in responsive design, your
              business will stand out from the competition and capture the
              attention of your potential customers.
            </p>
          </details>
        </div>
        <div className="py-8">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="sm:text-[20px]">
                User-Friendly Content Management System (CMS)
              </span>
              <span
                className="transition group-open:rotate-180"
                style={{ minWidth: '40px' }}
              >
                <Image src="/faqarrow.svg" alt="arrow" width={40} height={40} />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Maintaining and updating your website should be hassle-free.
              That's why we offer a user-friendly content management system that
              empowers you to make changes effortlessly. You'll have complete
              control over your website's content, allowing you to keep it up to
              date with the latest information and engage your audience
              effectively.
            </p>
          </details>
        </div>
        <div className="py-8">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="sm:text-[20px]">
                Search Engine Optimization (SEO) Friendly
              </span>
              <span
                className="transition group-open:rotate-180"
                style={{ minWidth: '40px' }}
              >
                <Image src="/faqarrow.svg" alt="arrow" width={40} height={40} />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              A visually stunning website is only valuable if it can be found by
              your target audience. Our web development services include SEO
              best practices to ensure your website is optimized for search
              engines, improving its visibility and driving organic traffic to
              your business. We implement the latest SEO techniques, such as
              keyword research, on-page optimization, and strategic link
              building, to help your website rank higher in search results.
            </p>
          </details>
        </div>

        <div className="py-8">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="sm:text-[20px]">
                Ongoing Support and Maintenance
              </span>
              <span
                className="transition group-open:rotate-180"
                style={{ minWidth: '40px' }}
              >
                <Image src="/faqarrow.svg" alt="arrow" width={40} height={40} />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Our commitment to your success doesn't end with the launch of your
              website. We provide ongoing support and maintenance services to
              ensure your website remains secure, up to date, and running
              smoothly. Our team is just a phone call or email away, ready to
              assist you with any questions or issues that may arise.
            </p>
          </details>
        </div>
      </div>
    </div>
  )
}

export default Services
