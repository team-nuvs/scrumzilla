// import '@atlaskit/css-reset';

// import Select from '@atlaskit/select';
// import TextArea from '@atlaskit/textarea';
// import SectionMessage from '@atlaskit/section-message';
// import Button from '@atlaskit/button';

// import { invoke } from '@forge/bridge';

// import React, { useEffect, useState } from 'react';


// const updateOptions = [
//     {
//         label: "What did I work on yesterday?",
//         value: 0
//     },
//     {
//         label: "What am I working on today?",
//         value: 1
//     },
//     {
//         label: "What issues are blocking me?",
//         value: 2
//     },
// ];


// const MyUpdatesActivity = () => {

//     const [updateValue, setUpdateValue] = useState(null);
//     const [textArea, setTextArea] = useState(null);
//     const [successMessage, setSuccessMessage] = useState(false);


//     const updateOptionTrigger = (e) => {
//         const value = e.target;
//         console.log(value);
//         return setUpdateValue(value);
//     };

//     const textAreaTrigger = (e) => {
//         console.log(e);
//         return setTextArea(e.target.value);
//     };

//     const submitUpdates = () => {
//         invoke('setMyUpdates', { updateValue: updateValue, message: textArea })
//             .then(res => {
//                 setSuccessMessage(true);
//                 setTimeout(() => {
//                     setSuccessMessage(false);
//                     setUpdateValue(null);
//                 }, 2000);
//             });
//     };

//     return (
//         <div>
//             {true &&

//                 <div>
//                     <SectionMessage appearance="success">
//                         <p>Daily standup updates are recorded.</p>
//                     </SectionMessage>
//                 </div>
//             }

//             <>
//                 <label htmlFor="single-select-example">What city do you live in?</label>
//                 <Select
//                     inputId="single-select-exampl"
//                     className="single-select"
//                     classNamePrefix="react-select"
//                     options={[
//                         { label: 'Adelaide', value: 'adelaide' },
//                         { label: 'Brisbane', value: 'brisbane' },
//                         { label: 'Canberra', value: 'canberra' },
//                         { label: 'Darwin', value: 'darwin' },
//                         { label: 'Hobart', value: 'hobart' },
//                         { label: 'Melbourne', value: 'melbourne' },
//                         { label: 'Perth', value: 'perth' },
//                         { label: 'Sydney', value: 'sydney' },
//                     ]}
//                     placeholder="Choose a city"
//                 />
//             </>


//             <label htmlFor="multi-select-example">Standup updates</label>
//             <Select
//                 inputId="multi-select-example"
//                 className="multi-select"
//                 classNamePrefix="react-select"
//                 options={updateOptions}
//                 isSearchable={false}
//                 placeholder="Select the type of update"
//                 onChange={updateOptionTrigger}
//             />

//             {true &&

//                 <div className='w-full'>
//                     <TextArea
//                         resize="auto"
//                         maxHeight="20vh"
//                         name="area"
//                         defaultValue="Add a message here"
//                         onChange={textAreaTrigger}
//                     />

//                     <div className='w-full flex flex-row-reverse'>
//                         <Button
//                             onClick={submitUpdates}
//                             appearance="primary">
//                             Submit
//                         </Button>
//                     </div>
//                 </div>
//             }
//         </div>
//     );
// };

// export default MyUpdatesActivity;