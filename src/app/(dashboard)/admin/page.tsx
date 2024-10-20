import Announcement from "../../components/Announcement";
import AttendanceChart from "../../components/AttendanceChart"
import CountChart from "../../components/CountChart"
import FinanceChart from "../../components/FinanceChart"
import UserCard from "../../components/UserCard"
import EventCalendar from '../../components/EventCalendar';


const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User CRAD */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Student"/>
          <UserCard type="Teacher"/>
          <UserCard type="Parent"/>
          <UserCard type="Staffs"/>
          
        </div>
        {/*Middle chart*/}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/*count  chart*/}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/*attentdance chart*/}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

        {/*Bottom chart*/}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>


      {/*RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  )
    
}

export default AdminPage