import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isStudentRoute = createRouteMatcher(["/user/(.*)"]);
const isTeacherRoute = createRouteMatcher(["/teacher/(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { sessionClaims } = await auth();

  const userRole = (sessionClaims?.metadata as { userType?: "student" | "teacher" })?.userType || "student";

  console.log("User Role:", userRole);

  if (isStudentRoute(req) && userRole !== "student") {
    const url = new URL("/teacher/courses", req.url);
    return NextResponse.redirect(url);
  }

  if (isTeacherRoute(req) && userRole !== "teacher") {
    const url = new URL("/user/courses", req.url);
    return NextResponse.redirect(url);
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
