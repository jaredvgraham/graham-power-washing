import { redirect } from "next/navigation";

/** Legacy Firebase sign-in route — use shared app password login. */
export default function SignInPage() {
  redirect("/login");
}
