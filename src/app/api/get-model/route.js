import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req){
    
    const models = await prisma.model.findMany()

    return NextResponse.json(models)
}