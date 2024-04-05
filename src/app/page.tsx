import Image from "next/image";
import Login from "@/components/Login";
import Otp from "@/components/Otp";
import Dashboard from "@/components/dashboard/dashboard";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Login />
      <Otp />
      <Dashboard />
    </main>
  );
}
