import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import '../App.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Options(props) {
  return (
    <div className="m-1 flex  justify-center">

    <Menu as="div" className="">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" absolute right-0 left-0 ml-auto mr-auto  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a 
                  onClick={() => 
                    {props.setScore(0)
                    props.setPool(props.pool.map(item => {

                      return {...item, picked: false};
                    }));}
                  
                  
                  }
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                   Reset Round
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {Object.keys(props.pool).length}
                </a>
              )}
            </Menu.Item>
     

            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <div className="pl-2 pr-2">

                    <input
                    type="range" min="10" steps="3" max={props.cardPool.length} onChange={(e) => props.setPool(props.cardPool.slice(0, e.target.value))} defaultValue={Object.keys(props.pool).length} id="myRange"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm',
                        
                      )}
                    />
                    
                    
                  </div>
                  
                )}
              </Menu.Item>
            </form>
    
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
  )
}
