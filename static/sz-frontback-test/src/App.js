import JsonViewer from "./jsonViewer";
import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';

// use the component in your app!
function App() {
  const [data, setData] = useState(null);

  const [sp, setSp] = useState(null);
  const [homedata, setHomedata] = useState(null);
  const [userData, setUserData] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [standupDetails, setStandupDetails] = useState(null);


  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);

    invoke('getProgressMetrics', { example: 'my-invoke-variable' }).then(setHomedata);
    invoke('getUserData', { example: 'my-invoke-variable' }).then(setUserData);
    invoke('getStorypoint', { example: 'my-invoke-variable' }).then(setSp);

    invoke('getStandupDetails').then(setStandupDetails);

  }, []);


  const triggerIssueModalData = () => {
    const issueId = document.querySelector("#issueId").value;

    invoke('getIssueData', { issueId: issueId }).then(setModalData);
  };

  const triggerAssignee = () => {
    setHomedata(null);
    const issueId = document.querySelector("#issueId").value;
    const assigneeId = document.querySelector("#assigneeId").value;

    invoke('setAssignee', { assigneeId: assigneeId, issueId: issueId }).then(setHomedata);
    invoke('getUserData', { example: 'my-invoke-variable' }).then(setUserData);
  };
  return (
    <div className='m-4'>
      {data && <h1>{data}</h1>}


      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <h1>progress tracker <i>home page</i> data</h1>
          <JsonViewer data={homedata} />
        </div>
        <div className="">
          <h1 className="font-medium">Recommendation <i>modal</i> data</h1>
          <h1 className="w-full mt-8">get issue data </h1>
          <div className="flex">
            <input type="text" className="p-2 border-2 border-black my-2 w-full"
              placeholder="Issue id"
              id="issueId"
            />
            <button className=" my-2 mx-1 px-2 bg-black text-white hover:bg-gray-700"
              onClick={triggerIssueModalData}
            >Go</button>
          </div>
          <h1 className="w-full">assigne above issue to</h1>
          <div className="flex">
            <input type="text" className="p-2 border-2 border-black my-2 w-full"
              placeholder="assignee id"
              id="assigneeId"
            />
            <button className=" my-2 mx-1 px-2 bg-black text-white hover:bg-gray-700"
              onClick={triggerAssignee}
            >Assign</button>
          </div>
          <JsonViewer data={modalData} />
        </div>

        {/* storage api */}
        <div className="">
          <h1>storage user's data</h1>
          <JsonViewer data={userData} />
        </div>

        <div className="">
          <h1>storage sprint storypoint</h1>
          {sp &&
            <h1 className="text-blue-500 text-xl font-bold">{sp}</h1>}
        </div>



        <div className="">
          <h1>standup Details</h1>
          <JsonViewer data={standupDetails} />
        </div>

        <div className="">
          <h1>my standup updates</h1>

          <div className="">
            <div className="font-bold text-blue-800 italic text-md">
                <li>0. What did I work on yesterday?</li>
                <li>1. What am I working on today?</li>
                <li>2. What issues are blocking me?</li>
            </div>
            <input type="text" className="p-2 border-2 border-black my-2 w-full"
              placeholder="update code here (from above)..."
              id="updateCode"
            />
            <textarea type="text" className="p-2 border-2 border-black my-2 w-full"
              placeholder="brief details here..."
              id="updateText"
            />
            <button className=" my-2 mx-1 px-2 bg-black text-white hover:bg-gray-700"
              onClick={() => {
                  const updateText = document.querySelector("#updateText").value;
                  const updateCode = document.querySelector("#updateCode").value;
                  invoke('setStandupDetails', { updateType: updateCode, message : updateText }).then(setStandupDetails);
                  
              }}
            >submit</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
