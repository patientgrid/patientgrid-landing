// Base imports
import * as React from "react"

// Assets
import {
  CalendarIcon,
  LightningBoltIcon,
  HeartIcon,
  EyeOffIcon,
  RefreshIcon,
  StarIcon,
} from '@heroicons/react/outline'

// Components
import { Link } from "gatsby"
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import SEO from '../components/seo'

// Data
const features = [
  {
    name: 'Scheduling',
    description: '77% of patients think self-scheduling is important. Make it easy for them to book their appointments online via their mobile devices.',
    icon: CalendarIcon,
  },
  {
    name: 'Faster Intake',
    description: '80% of patients choose providers based on convenience factors alone. Eliminate wait times by collecting intake and insurance online before a visit.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Reduce no-shows',
    description: 'Customizable, Multichannel appointment reminders, sent in a personalized way, automatically by AI.',
    icon: EyeOffIcon,
  },
  {
    name: 'Feedback and reviews',
    description: '94% of patients use online reviews to choose a new doctor. Win their business by mobilizing existing patients to complete satisfaction surveys and write online reviews.',
    icon: StarIcon,
  },
  {
    name: 'Engage',
    description: 'Get patients back with  automated texts asking them to re-book their visit right from their phones.',
    icon: HeartIcon,
  },
  {
    name: 'Follow-up',
    description: 'Keep patients engaged post visit sending followup communications with relevant care instructions.',
    icon: RefreshIcon,
  },
]


const footerNavigation = {
  solutions: [
    //    { name: 'Marketing', href: '#' },
    //    { name: 'Analytics', href: '#' },
    //    { name: 'Insights', href: '#' },
  ],
  support: [
    //    { name: 'Pricing', href: '#' },
    //    { name: 'Documentation', href: '#' },
    //    { name: 'Guides', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    //    { name: 'Blog', href: '#' },
    //    { name: 'Jobs', href: '#' },
    //    { name: 'Press', href: '#' },
    //    { name: 'Partners', href: '#' },
  ],
  legal: [
    //    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '/privacy' },
    //    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ]
}

export default function Landing() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">

        {/* SEO meta section */}
        <SEO/>
        
        {/* Navigation section */}
        <Navigation />

        {/* Hero section */}
        <main>
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                      Coming soon
                    </span>
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">Practice to Patient communications</span>
                      <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                        reinvented
                      </span>
                    </h1>
                    <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                      Patient Grid's comprehensive patient communication solution reduces no-shows,
                      backfills cancellations, and maximizes referral conversions, all with zero staff effort.
                    </p>

                    <div className="mt-10 sm:mt-12">
                      <p className="text-base font-medium text-gray-300">Sign up to get notified when it’s ready.</p>
                      <form name="contact" className="sm:max-w-xl sm:mx-auto lg:mx-0" data-netlify="true">
                        <div className="sm:flex">
                          <div className="min-w-0 flex-1">
                            <label htmlFor="email" className="sr-only">
                              Email address
                            </label>
                            <input
                              id="email"
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                            />
                            <input type="hidden" name="form-name" value="contact" /> {/* Needed for netlify to find the form in JSX components*/}
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button
                              type="submit"
                              className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                            >
                              Keep me posted
                            </button>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                          We care about the protection of your data. Read our{' '}
                          <Link to="/privacy" className="font-medium text-white">
                            privacy policy
                          </Link>
                          .
                        </p>
                      </form>
                    </div>



                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Feature block */}
          <div className="relative bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Increase Revenue</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Complete solution to drive patient satisfaction and retention
              </p>
              <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                We help practices increase revenue using our patient centered communications platform.
              </p>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                          <p className="mt-5 text-base text-gray-500">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* End of main section */}
        </main>

          {/* Footer */}
        <Footer />

      </div>
    </div>
  )
}
