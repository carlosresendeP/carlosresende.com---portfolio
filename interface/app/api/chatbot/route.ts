import { NextResponse } from "next/server";
import { env } from "@/lib/env";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const response = await fetch(env.WEBHOOK_CHAT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: "Webhook returned an error" },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error in webhook:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}