import { useState } from 'react';
import { TabsWrapper, ActiveTabs, TabList, TabItem, TabContent } from './style';

function Tabs ( { tabs = [] } ) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsWrapper>
      <TabList>
        {tabs?.map((tab, index) => {
          if (index === activeTab) {
            return (
              <TabItem key={index}>
                <ActiveTabs active='true'>
                  {tab.title}
                </ActiveTabs>
              </TabItem>
            );
          }
          return (
            <TabItem key={index}>
              <ActiveTabs onClick = {() => setActiveTab(index)}>
                {tab.title}
              </ActiveTabs>
            </TabItem>
          );
        })}
      </TabList>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </TabsWrapper>
  );
}

export { Tabs };




    // <div>
    //   <ul>
    //     {tabs?.map((tab, index) => {
    //       if (index === activeTab) {
    //         return (
    //           <li key={index}>
    //             <ActiveTabs>
    //               {tab.title}
    //             </ActiveTabs>
    //           </li>
    //         );
    //       }
    //       return (
    //         <li key={index}>
    //           <ActiveTabs onClick = {() => setActiveTab(index)}>
    //             {tab.title}
    //           </ActiveTabs>
    //         </li>
    //       );
    //     })}
    //   </ul>
    //   <p>{tabs.content}</p>
    // </div>;
