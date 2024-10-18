import axios from 'axios'
import ENDPOINTS from '@/cofig/urls'
import { NextResponse } from 'next/server'

export async function GET(req){
    try{

        const response = await axios({
            method: 'get',
            url: ENDPOINTS.DATA
        })

        // console.log(response.data)
        // console.log(response.status)

        return NextResponse.json(response.data, {status: 200})

    }catch(err){

        return NextResponse.json({error: 'failed to load data'}, {status: 500})

    }
}