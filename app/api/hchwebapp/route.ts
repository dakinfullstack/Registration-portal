import React from 'react'
import axios from 'axios';

type Props = {}



export async function  GET (){
    try{

        console.log("test");
        /*
var ssoid ='1160100078831'
        let response = await axios.get(
            `http://livetc.hc-hospital.com:52773/HCHIntraAPI/GetPatientSSO/${ssoid.trim()}`
  )*/

        return Response.json({ name: "mikelopster",});

    }catch(error){
        return new Response(error as BodyInit, {
            status: 500,
          })
    }
}