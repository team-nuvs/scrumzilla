import ReactJson from 'react-json-view'

const JsonViewer = ({data}) => {
    if(!data) return <h1 className='text-red-500 text-2xl font-semibold uppercase '>null</h1>
    return ( 
        <ReactJson src={data}
            theme = "monokai" 
            indentWidth={8}
            collapsed={1}
        />
     );
}
 
export default JsonViewer;