import { NextResponse } from "next/server";

export default function Middleware(req: NextResponse) {
  let verify = req.cookies.get("userCredentials");
  let url = req.url;

  if (!verify && url.includes("/profile")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (verify && url === "http://localhost:3000/login") {
    return NextResponse.redirect("http://localhost:3000/profile");
  }
  if (verify && url === "http://localhost:3000/login/registration") {
    return NextResponse.redirect("http://localhost:3000/profile");
  }
}
