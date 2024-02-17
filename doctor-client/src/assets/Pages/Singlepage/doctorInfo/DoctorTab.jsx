import { Tab } from '@headlessui/react'
import AboutDoctor from './AboutDoctor/AboutDoctor'
import Feedback from '../doctorInfo/DoctorFeedback/Feedback'
import Articles from './Articles/Articles'
import Location from './Location/Location'

const DoctorTab = ({ doctor }) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-neutral-100 p-1">
                <Tab className={({ selected }) =>
                    classNames(
                        'w-full rounded-lg py-3 text-lg font-medium leading-5',
                        'ring-white/60  ring-offset-blue-400 focus:outline-none ',
                        selected
                            ? 'bg-white text-link shadow'
                            : 'text-black hover:text-primery text-lg font-medium'
                    )
                }
                >Doctor Details</Tab>

                <Tab className={({ selected }) =>
                    classNames(
                        'w-full rounded-lg py-3 text-lg font-medium leading-5',
                        'ring-white/60  ring-offset-blue-400 focus:outline-none ',
                        selected
                            ? 'bg-white text-link shadow'
                            : 'text-black hover:text-primery text-lg font-medium'
                    )
                }
                >Feedback</Tab>

                <Tab className={({ selected }) =>
                    classNames(
                        'w-full rounded-lg py-3 text-lg font-medium leading-5',
                        'ring-white/60  ring-offset-blue-400 focus:outline-none ',
                        selected
                            ? 'bg-white text-link shadow'
                            : 'text-black hover:text-primery text-lg font-medium'
                    )
                }
                >Location</Tab>

                <Tab className={({ selected }) =>
                    classNames(
                        'w-full rounded-lg py-3 text-lg font-medium leading-5',
                        'ring-white/60  ring-offset-blue-400 focus:outline-none ',
                        selected
                            ? 'bg-white text-link shadow'
                            : 'text-black hover:text-primery text-lg font-medium'
                    )
                }
                >Articles</Tab>

            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>
                    <AboutDoctor doctor={doctor} />
                </Tab.Panel>
                <Tab.Panel>
                <Feedback doctor={doctor}/>
                </Tab.Panel>
                <Tab.Panel>
                    <Location/>
                </Tab.Panel>
                <Tab.Panel>
                <Articles/>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}

export default DoctorTab