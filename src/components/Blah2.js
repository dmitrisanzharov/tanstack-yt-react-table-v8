import React from 'react'

const Blah2 = () => {

    const [dataName1, setDataName1] = React.useState({loading: true, data: []}); 


    React.useEffect(() => {
        async function getData(){
            const url = 'http://localhost:5000/max-speed-report-data';
            let req = await fetch(url);
            let res = await req.json();
            setDataName1({loading: false, data: res.data});
            }
        getData(); 
    }, []);
    console.log(dataName1);


    React.useEffect(() => {

        // const a = dataName1?.data.length;
        // console.log('a', a);

        // const ra_number = dataName1?.data?.filter(el=> el.ra_number).length;
        // console.log("ra_number: ", ra_number);


        // const nrm_number = dataName1?.data?.filter(el=> el.nrm_number && !el.ra_number); 
        // console.log("nrm_number: ", nrm_number);

        // const testSum = ra_number + nrm_number;
        // console.log("testSum: ", testSum);

    }, [dataName1]);



  return (
    <div>Blah2</div>
  )
}

export default Blah2; 