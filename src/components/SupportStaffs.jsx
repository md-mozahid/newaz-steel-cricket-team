import { SupportStaffList } from '../data/SupportStaffList'
import SupportStaff from './SupportStaff'

const SupportStaffs = () => {
  return (
    <>
      <div className="container mx-auto p-10  text-white">
        <h2 className="text-4xl text-center uppercase">Support Staff List</h2>
        <ul className="mt-10 grid md:grid-cols-7 gap-y-10 ">
          {SupportStaffList.map((support) => (
            <li key={support.id}>
              <SupportStaff support={support} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SupportStaffs
