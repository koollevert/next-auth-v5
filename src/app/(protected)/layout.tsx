import { Navbar } from "./__components/navbar";

interface ProtectedLayoutProps{
    children: React.ReactNode;
}

export default function ProtectedLayout({children}: ProtectedLayoutProps) {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500">
        <Navbar/>
        {children}
    </div>
  )
}
