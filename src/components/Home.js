import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
export default function Home() {
    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <div className="hidden md:flex w-64 bg-[#1e1f23] border-r border-gray-700">
                <Sidebar />
            </div>

            {/* Main */}
            <div className="flex-1 bg-[#2b2d31] overflow-y-auto">
                <MainContent />
            </div>

        </div>
    )
}