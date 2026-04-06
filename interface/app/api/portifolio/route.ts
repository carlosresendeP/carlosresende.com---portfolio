import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET() {
    try {
        const projects = await db.project.findMany();
        return NextResponse.json(projects);
    } catch (error) {
        console.error("Error fetching portfolio:", error);
        return NextResponse.json({ error: "Failed to fetch portfolio" }, { status: 500 });
    }
}
