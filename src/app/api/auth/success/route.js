import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {NextResponse} from "next/server";
import prisma from "@/lib/prismadb";

export async function GET() {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'phase-production-build') {
        console.log('Skipping authentication check during build process');
        return new NextResponse(null, { status: 307, headers: { Location: '/' } });
    }

    if (!user || user == null || !user.id) {
        console.error("Authentication failed:", user);
        return new NextResponse(null, { status: 401, statusText: "Unauthorized" });
    }

    let dbUser = await prisma.user.findUnique({
        where: {kindeId: user.id}
    });

    if (!dbUser) {
        console.log('User is being created')
        dbUser = await prisma.user.create({
            data: {
                kindeId: user.id,
                firstName: user.given_name ?? "",
                lastName: user.family_name ?? "",
                email: user.email ?? "" 
            }
        });
    }

    return NextResponse.redirect(`${process.env.DOMAIN}/dashboard`);
}