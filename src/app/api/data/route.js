import axios from 'axios'
import ENDPOINTS from '@/cofig/urls'
import { NextResponse } from 'next/server'

export async function GET(req){
    try{

        // const response = await axios({
        //     method: 'get',
        //     url: ENDPOINTS.DATA
        // })

        // console.log(response)

        return NextResponse.json({msg: 'work'})

    }catch(err){

        return NextResponse.json({error: 'failed to load data'})

    }
}