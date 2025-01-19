import Header from "@/components/Header";
import Login from "@/components/Login";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) return <Login />
  return (
    <div className="">
      <Header />

      <main>
        {/* sidebar */}
        {/* feed */}
        {/* widgets? */}
      </main>
    </div>
  );
}

