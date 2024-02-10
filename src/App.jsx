import { useState } from "react"
import { RevenueCard } from "./components/RevenueCard"
import { PayoutCard } from "./components/PayoutCard"
import { SideBar } from "./components/SideBar"
import { TopBar } from "./components/TopBar"
import { OverviewHeader } from "./components/OverviewHeader"
import { LowerSection } from "./components/LowerSection"
import { OrdersBar } from "./components/OrdersBar"
import { Table } from "./components/Table"
function App(){
  return <>
  <div className="flex">
      <SideBar />
      <div className="flex-grow  md:pl-64">
        <TopBar />

        <OverviewHeader overviewTitle={"Overview"} periodSelector={"This Month"} />
        <div className="grid grid-cols-1 md:space-x-4 md:grid-cols-2 lg:grid-cols-3 z-5">
          {/* <SideBar></SideBar> */}
          <PayoutCard title={"Next Payout"} amount={"2,312.23"} orderCount={"23"} paymentDate={"Today, 4:00PM"} ></PayoutCard>
          <RevenueCard title="Amount Pending" amount="92,312.20" orderCount="13" ></RevenueCard>
          <RevenueCard title="Amount Processed" amount="23,92,312.19" ></RevenueCard>
        </div>
        <br /><br />

        <LowerSection></LowerSection>
        <br /><br />
        <OrdersBar></OrdersBar>
        <br />
        <Table></Table>
      </div>
      
  </div>
    
  </>
}

export default App
